import { Image, StyleSheet, Text, View } from "react-native";
import foto from "../assets/euimg.png";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sobre o autor</Text>
        <Image source={foto} style={styles.foto} />

        <Text style={styles.p}>Guilherme Soares</Text>
        <Text style={styles.p}>2° MTEC Info</Text>
        <Text style={styles.p}>
          Olá! Eu sou o Guilherme, estudante do 2° Info e idealizador do 
          projeto Mundo da Música para Mobile
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "#d3d3d3",
  },
  main: {
    width: "100%",          // 🔥 Permite que o texto ocupe toda a largura
    maxWidth: 960,
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    backgroundColor: "white",
    textAlign: "center",     // 🔥 Centraliza o texto
    width: "100%",           // 🔥 Faz o fundo ocupar a tela toda
    paddingVertical: 10,     // opcional: deixa mais bonito
    marginBottom: 20,
  },

  foto: {
    width: 130,
    height: 130,
    borderRadius: 100,
    marginBottom: 20,
    alignSelf: "center",
  },

  p: {
    textAlign: "center",
    marginBottom: 5,
  }
});
