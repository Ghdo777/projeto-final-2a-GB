import { Image, StyleSheet, Text, View } from "react-native";
import foto from "../assets/euimg.png";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={foto} style={styles.foto} />
        <Text style={styles.title}>Sobre Mim</Text>
        <Text style={styles.subtitle}>Meus dados avaliatorios</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#e0e0e4ff",
  },
  main: {
    flex: 0,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    alignSelf: "center",   //centraliza a imagem
  }  
});
