import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from "react-native";
import foto from "../assets/euimg.png";

export default function Page() {
  const { width, height } = useWindowDimensions();

  // Breakpoints
  const isMobile = width < 600;
  const isTablet = width >= 600 && width < 1000;

  // Fontes responsivas
  const titleSize = isMobile ? 28 : isTablet ? 34 : 40;
  const textSize = isMobile ? 16 : isTablet ? 18 : 20;

  // Tamanho da foto
  const photoSize = isMobile
    ? 150
    : isTablet
    ? 180
    : 220;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>

        {/* TÍTULO */}
        <Text style={[styles.title, { fontSize: titleSize }]}>
          Sobre o Autor
        </Text>

        {/* FOTO */}
        <Image
          source={foto}
          style={[
            styles.foto,
            { width: photoSize, height: photoSize, borderRadius: photoSize / 2 }
          ]}
        />

        {/* TEXTOS */}
        <Text style={[styles.text, { fontSize: textSize }]}>
          Guilherme Soares
        </Text>

        <Text style={[styles.text, { fontSize: textSize }]}>
          2° MTEC Info
        </Text>

        <Text style={[styles.bio, { fontSize: textSize }]}>
          Olá! Eu sou o Guilherme, estudante do 2° Info e idealizador do
          projeto Mundo da Música para Mobile.
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#d3d3d3",
  },
  main: {
    width: "100%",
    maxWidth: 960,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
  foto: {
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 5,
  },
  bio: {
    textAlign: "center",
    maxWidth: 800,
    marginTop: 10,
    paddingHorizontal: 15,
  },
});
