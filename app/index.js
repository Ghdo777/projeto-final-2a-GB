import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, useWindowDimensions } from "react-native";
import musica from "../assets/musica.png";

export default function Page() {
  const { width } = useWindowDimensions();

  // Breakpoints responsivos
  const isMobile = width < 600;
  const isTablet = width >= 600 && width < 1000;
  const isWeb = width >= 1000;

  // Tamanho da imagem dependendo do dispositivo
  const imageSize = isMobile
    ? { width: width * 0.7, height: width * 0.5 }
    : isTablet
    ? { width: width * 0.5, height: width * 0.35 }
    : { width: 400, height: 300 }; // Web fixo para não esticar demais

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Bem-vindo ao Mundo da Música</Text>

        <Text style={styles.subtitle}>
          Pequena descrição do que o app oferece:
        </Text>

        <Image
          source={musica}
          style={[styles.musica, imageSize]}
          resizeMode="contain"
        />

        <Text style={styles.introBox}>
          Aqui você pode explorar a música do clássico ao sertanejo raiz.
          Descubra os estilos musicais, conheça artistas importantes, confira
          curiosidades sobre a história da música. Tudo isso de forma simples,
          visual e interativa, para você aprender mais sobre as músicas.
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
    paddingTop: 30,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    width: "100%",
    alignItems: "center", // garante alinhamento em todas as telas
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#38434D",
    textAlign: "center",
    marginBottom: 25,
  },
  descricao: {
    fontSize: 16,
    textAlign: "center",
    maxWidth: 700, // para web ficar mais elegante
    marginTop: 10,
  },
  musica: {
    marginBottom: 25,
    alignSelf: "center",
  },
  introBox: {
    backgroundColor: "#999999",
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    width: "100%",},
});
