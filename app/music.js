import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Audio } from "expo-av";
// Importa o componente Slider para barra de progresso/controlador
import Slider from "@react-native-community/slider";

// Lista de faixas com id, nome e arquivo de áudio
const tracks = [
  { id: 1, name: "Clássica", file: require("../assets/musicclassica.mp3") },
  { id: 2, name: "Sertanejo", file: require("../assets/musicsertanejo.mp3") },
  { id: 3, name: "Sertanejo raiz", file: require("../assets/musicsertanejoraiz.mp3") },
];

// Componente principal do player de música
export default function Player() {
  // Estado para armazenar o objeto de áudio atualmente carregado
  const [sound, setSound] = useState(null);
  // Estado que armazena a posição atual da música (em milissegundos)
  const [pos, setPos] = useState(0);
  // Estado que armazena a duração total da música (em milissegundos)
  const [dur, setDur] = useState(1);
  // Estado para indicar se a música está tocando (true) ou pausada (false)
  const [playing, setPlaying] = useState(false);
  // Estado que guarda o id da música atualmente selecionada
  const [track, setTrack] = useState(1);

  // Função que converte milissegundos em formato mm:ss para exibição
  const fmt = ms => {
    const m = String(Math.floor(ms / 60000)).padStart(2, "0"); // minutos
    const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0"); // segundos
    return `${m}:${s}`;
  };

  // Função assíncrona para carregar a faixa selecionada
  async function load() {
    if (sound) await sound.unloadAsync(); // Se já tem som carregado, descarrega
    const file = tracks.find(t => t.id === track).file; // Encontra o arquivo da música atual
    const { sound: s } = await Audio.Sound.createAsync(file); // Cria o objeto de som com o arquivo

    // Atualiza o estado conforme o áudio toca (posição, duração, estado de reprodução)
    s.setOnPlaybackStatusUpdate(st => {
      if (!st.isLoaded) return; // Ignora se o som não estiver carregado
      setPos(st.positionMillis); // Atualiza a posição atual
      setDur(st.durationMillis || 1); // Atualiza a duração (ou 1 se indefinido)
      setPlaying(st.isPlaying); // Atualiza se está tocando ou não
    });

    setSound(s); // Armazena o som criado no estado
  }

  // Função para alternar entre play e pause
  const toggle = () => sound && (playing ? sound.pauseAsync() : sound.playAsync());

  // Função para mover a música para uma posição específica (0 a 1 multiplicado pela duração)
  const seek = v => sound?.setPositionAsync(v * dur);

  // Função para avançar ou retroceder X milissegundos na música
  const jump = async ms => {
    if (!sound) return;
    let newPos = pos + ms; // Nova posição
    newPos = Math.max(0, Math.min(newPos, dur)); // Garante que fique entre 0 e duração total
    await sound.setPositionAsync(newPos); // Define nova posição no áudio
  };

  // useEffect que roda sempre que a música selecionada mudar
  // Carrega a nova música e limpa a anterior quando o componente desmonta ou troca de música
  useEffect(() => {
    load();
    return () => sound?.unloadAsync(); // Descarrega som antigo para liberar memória
  }, [track]); // Executa quando o 'track' muda

  // JSX que define a interface visual do player
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Player de músicas</Text>

      {/* Botões para escolher a faixa */}
      <View style={styles.row}>
        {tracks.map(t => (
          <TouchableOpacity
            key={t.id}
            style={[styles.trackBtn, track === t.id && styles.selected]} // Destaca o botão da faixa selecionada
            onPress={() => setTrack(t.id)} // Atualiza o track selecionado
          >
            <Text>{t.name}</Text> {/* Nome da faixa no botão */}
          </TouchableOpacity>
        ))}
      </View>

      {/* Slider para controle do progresso da música */}
      <Slider
        style={{ width: "90%" }}
        minimumValue={0} // Valor mínimo do slider
        maximumValue={1} // Valor máximo do slider (1 = 100% do áudio)
        value={pos / dur} // Valor atual do slider (posição relativa)
        minimumTrackTintColor="#1DB954" // Cor da parte preenchida
        maximumTrackTintColor="#aaa" // Cor da parte não preenchida
        thumbTintColor="#1DB954" // Cor do "polegar" do slider
        onSlidingComplete={seek} // Evento disparado quando o usuário solta o slider (busca na posição)
      />

      {/* Exibição do tempo atual e tempo total da música */}
      <View style={styles.timeRow}>
        <Text>{fmt(pos)}</Text> {/* Tempo atual formatado */}
        <Text>{fmt(dur)}</Text> {/* Duração total formatada */}
      </View>

      {/* Controles de voltar 10s, play/pause, avançar 10s */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => jump(-10000)}> {/* Voltar 10 segundos */}
          <Text style={styles.btn}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggle}> {/* Play ou pause */}
          <Text style={styles.btn}>{playing ? "⏸" : "▶"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => jump(10000)}> {/* Avançar 10 segundos */}
          <Text style={styles.btn}>⏩</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Estilos para os componentes visuais
const styles = StyleSheet.create({
  container: { 
    alignItems: "center", // Centraliza conteúdo horizontalmente
    padding: 20, // Espaço interno
    flexGrow: 1,            // para ScrollView ocupar a tela toda
    backgroundColor: "#d3d3d3", // fundo branco da página inteira
  },
  title: { 
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30 // Espaço abaixo do título
  },
  row: {
    flexDirection: "row", // Itens em linha horizontal
    marginBottom: 20, 
    gap: 10 // Espaço entre botões
  },
  trackBtn: {
    backgroundColor: "#fff",
    padding: 10, // Espaçamento interno
    borderRadius: 8 
  },
  selected: {
    backgroundColor: "#1DB954"
  },
  timeRow: {
    width: "90%",
    flexDirection: "row", // Conteúdo em linha
    justifyContent: "space-between", // Espaço entre os textos
    marginTop: 5, 
    marginBottom: 20,
  },
  controls: { 
    flexDirection: "row", // Controles em linha
    marginTop: 10, 
    gap: 30 // Espaço entre os botões
  },
  btn: { 
    fontSize: 35
  },
});
