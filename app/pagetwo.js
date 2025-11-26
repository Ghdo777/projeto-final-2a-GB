import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from "react-native";
import classica from "../assets/classica.png";
import sertanejo from "../assets/sertanejo.png";
import claserta from "../assets/classica-sertanejo.png";

export default function Page() {
  const { width, height } = useWindowDimensions();

  // Breakpoints responsivos
  const isMobile = width < 600;
  const isTablet = width >= 600 && width < 1000;

  // Fontes responsivas
  const titleSize = isMobile ? 28 : isTablet ? 36 : 42;
  const subtitleSize = isMobile ? 20 : isTablet ? 28 : 32;
  const textSize = isMobile ? 15 : isTablet ? 17 : 19;

  // Imagem principal responsiva
  const imageSize = isMobile
    ? { width: width * 0.9, height: height * 0.28 }
    : isTablet
    ? { width: width * 0.75, height: height * 0.32 }
    : { width: 650, height: 380 };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>

        {/* TÍTULO */}
        <Text style={[styles.title, { fontSize: titleSize }]}>
          Da Música Clássica ao Sertanejo Raiz
        </Text>

        {/* SUBTÍTULO */}
        <Text style={[styles.p3, { fontSize: subtitleSize }]}>
          Do Palco Brilhante ao Terreiro de Chão Batido
        </Text>

        {/* IMAGEM */}
        <Image
          source={claserta}
          style={[styles.claserta, imageSize]}
          resizeMode="contain"
        />

        {/* TEXTOS */}
        <Text style={[styles.text, { fontSize: textSize }]}>
          Sabe quando a gente ouve uma daquelas músicas clássicas, com uma
          orquestra inteira, e sente um arrepio na espinha? É uma emoção tão
          grande, tão poderosa, que parece que o som preenche cada cantinho
          da gente.
        </Text>

        <Text style={[styles.text, { fontSize: textSize }]}>
          A gente olha para a Música Clássica e pensa: "Que coisa grandiosa,
          que arte sofisticada!" E é mesmo. Ali tem uma disciplina que vem de
          muito longe, de gente que dedicou a vida inteira a entender como os
          sons se encaixam pra tocar o coração.
        </Text>

        <Text style={[styles.text, { fontSize: textSize }]}>
          Mas aí, a gente dá um salto e pisa no chão batido do nosso interior,
          onde o sol se deita avermelhado e a vida segue o ritmo da natureza.
        </Text>

        <Text style={[styles.text, { fontSize: textSize }]}>
          À primeira vista, parece que não tem nada a ver, né? Um é do salão
          elegante, o outro da roça. Mas ambos nascem do mesmo lugar: a
          necessidade humana de expressar o que sente mais fundo.
        </Text>

        <Text style={[styles.text, { fontSize: textSize }]}>
          Nos dois mundos, existe uma sabedoria profunda: na clássica, a dos
          mestres; no sertanejo, a do povo que aprendeu pela vivência a
          transformar a vida em música.
        </Text>

        <Text style={[styles.text, { fontSize: textSize }]}>
          No fundo, as duas nos lembram que a música — seja ela tocada em um
          salão ou numa varanda simples — é a forma mais pura de tocar o
          coração.
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
    marginTop: 16,
    marginBottom: 10,
  },
  p3: {
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },
  claserta: {
    marginBottom: 20,
  },
  text: {
    maxWidth: 800,
    textAlign: "center",
    marginBottom: 18,
    paddingHorizontal: 12,
  },
});
