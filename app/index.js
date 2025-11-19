import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, useWindowDimensions } from "react-native";
import musica from "../assets/musica.png";

export default function Page() {
  // Obtendo as dimensões da janela
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Bem-vindo ao Mundo da Música</Text>
        <Text style={styles.subtitle}>Pequena descrição do que o app oferece:</Text>
        <Image source={musica} style={[styles.musica, { height: height * 0.25, width: width * 0.9 }]} resizeMode="contain" />
        <Text style={styles.descricao}>
          Aqui você pode explorar a música do clássico ao sertanejo 
          raiz. Descubra os estilos musicais, conheça artistas importantes, 
          confira curiosidades sobre a história da música. Tudo isso de forma simples,
          visual e interativa, para você aprender mais sobre as musicas.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#d3d3d3",
    paddingTop: 30, // Distância do topo
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    width: '100%', // Garantir que ocupe toda a largura possível
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#38434D",
    textAlign: "center",
    marginBottom: 25,
  },
  descricao: {
    fontSize: 15,
    textAlign: "center",
  },
  musica: {
    marginBottom: 25,
  },
});
