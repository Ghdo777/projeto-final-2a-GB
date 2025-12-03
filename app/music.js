//useState:controla estados (tempo,musica,progresso)
//useEffect:executa açao (trocar musica)
//expo-nav:biblioteca de audio
//slider:barra de progresso

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";

// LISTAS DE MÚSICAS – cada player recebe sua própria lista
const tracksPlayer1 = [
  { id: 1, name: "Clássica", file: require("../assets/musicas/musicclassica.mp3") },
  { id: 2, name: "Sertanejo", file: require("../assets/musicas/musicsertanejo.mp3") },
  { id: 3, name: "Sertanejo raiz", file: require("../assets/musicas/musicsertanejoraiz.mp3") },
];

const tracksPlayer2 = [
  { id: 1, name: "Big G", file: require("../assets/musicas/FESTA DO BIG G.mp3") },
  { id: 2, name: "te dar flores", file: require("../assets/musicas/Posso Até Não Te Da Flores.mp3") },
  { id: 3, name: "Me apaixonei", file: require("../assets/musicas/EU ME APAIXONEI.mp3") },
];

const tracksPlayer3 = [
  { id: 1, name: "Tubarões", file: require("../assets/musicas/Tubarões.mp3") },
  { id: 2, name: "Cair Água", file: require("../assets/musicas/Vai Cair Água.mp3") },
  { id: 3, name: "Maloqueiro", file: require("../assets/musicas/Ama um Maloqueiro.mp3") },
];



// COMPONENTE PLAYER — ele é reutilizável para cada bloco

function PlayerBlock({ tracks, playerSubTitle }) {

  // Estados principais do player
  const [sound, setSound] = useState(null);  // controla o áudio atual
  const [pos, setPos] = useState(0);         // posição atual da música
  const [dur, setDur] = useState(1);         // duração total
  const [playing, setPlaying] = useState(false);  // se está tocando ou não
  const [track, setTrack] = useState(1);     // música selecionada

  // Formata milissegundos para 00:00
  const fmt = ms => {
    const m = String(Math.floor(ms / 60000)).padStart(2, "0");
    const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    return `${m}:${s}`;
  };

  
  // Função responsável por carregar a música selecionada
  
  async function load() {
    if (sound) await sound.unloadAsync(); // descarrega música anterior

    const file = tracks.find(t => t.id === track).file;
    const { sound: s } = await Audio.Sound.createAsync(file);

    // Atualiza barra de progresso + play/pause em tempo real
    s.setOnPlaybackStatusUpdate(st => {
      if (!st.isLoaded) return;
      setPos(st.positionMillis);
      setDur(st.durationMillis || 1);
      setPlaying(st.isPlaying);
    });

    setSound(s);
  }

  // Alterna play/pause
  const toggle = () => sound && (playing ? sound.pauseAsync() : sound.playAsync());

  // Move o slider
  const seek = v => sound?.setPositionAsync(v * dur);

  // Avança ou volta X milissegundos
  const jump = async ms => {
    if (!sound) return;
    let newPos = pos + ms;
    newPos = Math.max(0, Math.min(newPos, dur)); // evita ultrapassar limites
    await sound.setPositionAsync(newPos);
  };

  
  // Sempre que trocar de música, carrega a nova
  
  useEffect(() => {
    load();
    return () => sound?.unloadAsync();  // limpa ao desmontar
  }, [track]);

  return (
    <View style={styles.playerBox}>

      {/* Subtítulo exclusivo do player */}
      <Text style={styles.subtitle}>{playerSubTitle}</Text>

      {/* Botões de seleção de música */}
      <View style={styles.row}>
        {tracks.map(t => (
          <TouchableOpacity
            key={t.id}
            style={[styles.trackBtn, track === t.id && styles.selected]}
            onPress={() => setTrack(t.id)} // troca música
          >
            <Text>{t.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Barra de progresso */}
      <Slider
        style={{ width: "90%" }}
        minimumValue={0}
        maximumValue={1}
        value={pos / dur}
        onSlidingComplete={seek}
        minimumTrackTintColor="#1DB954"
        maximumTrackTintColor="#aaa"
        thumbTintColor="#1DB954"
      />

      {/* Tempo atual e total */}
      <View style={styles.timeRow}>
        <Text>{fmt(pos)}</Text>
        <Text>{fmt(dur)}</Text>
      </View>

      {/* Controles: voltar, play/pause, avançar */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => jump(-10000)}>
          <Text style={styles.btn}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggle}>
          <Text style={styles.btn}>{playing ? "⏸" : "▶"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => jump(10000)}>
          <Text style={styles.btn}>⏩</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// TELA PRINCIPAL — exibe 3 players independentes
export default function Player() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Título da tela */}
      <Text style={styles.title}>Estilos em Destaque</Text>

      {/* PLAYER 1 */}
      <PlayerBlock tracks={tracksPlayer1} playerSubTitle="Do Clássico ao Sertanejo" />

      {/* PLAYER 2 */}
      <PlayerBlock tracks={tracksPlayer2} playerSubTitle="Top 3 Brasil" />

      {/* PLAYER 3 */}
      <PlayerBlock tracks={tracksPlayer3} playerSubTitle="Top 3 Sertanejo" />

    </ScrollView>
  );
}

// ESTILOS
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#d3d3d3",
    flexGrow: 1,
  },

  playerBox: {
    width: "95%",
    padding: 15,
    marginBottom: 30,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 3,
  },

  title: { 
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },

  row: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },

  trackBtn: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
  },

  selected: {
    backgroundColor: "#1DB954",
  },

  timeRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 20,
  },

  controls: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },

  btn: {
    fontSize: 35,
  },

  player: {
    alignItems:"center",
    justifyContent:"center",
  },
});
