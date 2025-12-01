import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, useWindowDimensions } from "react-native";
import classica from '../assets/classica.png';
import sertanejo from '../assets/sertanejo.png';

export default function Page() {
  const { width, height } = useWindowDimensions();

  // Breakpoints
  const isMobile = width < 600;
  const isTablet = width >= 600 && width < 1000;

  // Fontes responsivas
  const titleSize = isMobile ? 26 : isTablet ? 32 : 36;
  const textSize = isMobile ? 15 : isTablet ? 17 : 18;

  // Imagens responsivas
  const imageSize = isMobile
    ? { width: width * 0.9, height: height * 0.28 }
    : isTablet
    ? { width: width * 0.7, height: height * 0.3 }
    : { width: 600, height: 350 };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        
        {/* MÚSICA CLÁSSICA */}
        <Text style={[styles.p1, { fontSize: titleSize }]}>🎻Música Clássica</Text>

        <Image 
          source={classica} 
          style={[styles.image, imageSize]} 
          resizeMode="contain" 
        />

        <Text style={[styles.introBox, { fontSize: textSize }]}>
          A música clássica surgiu na Europa entre os séculos XVII e XIX e é considerada uma das formas mais sofisticadas de 
          expressão musical já criadas. Ela é caracterizada por composições extensas, grande preocupação com harmonia, melodias 
          complexas e o uso de instrumentos como violino, piano, violoncelo e toda uma orquestra completa. Entre os compositores
          mais famosos estão Ludwig van Beethoven, Wolfgang Amadeus Mozart e Johann Sebastian Bach, que influenciaram profundamente
          a música ocidental. Suas obras são marcadas por emoção, intensidade e perfeição técnica.
        </Text>

        {/* SERTANEJO RAIZ */}
        <Text style={[styles.p2, { fontSize: titleSize }]}>🤠Sertanejo Raiz</Text>

        <Image 
          source={sertanejo} 
          style={[styles.image, imageSize]}
          resizeMode="contain"
        />

        <Text style={[styles.introBox, { fontSize: textSize }]}>
          O Sertanejo Raiz – ou Música Caipira – nasceu no interior do Brasil e representa a cultura popular de estados como
          São Paulo, Minas Gerais, Goiás e Paraná. Sua origem está ligada ao trabalho de Cornélio Pires, na década de 1920.
          Diferente da música clássica, o Sertanejo Raiz tem como base a Viola Caipira e as Modas de Viola, que tratam da vida
          simples, saudade, fé e tradições do campo. As harmonias vocais próximas, conhecidas como Terças Afinadíssimas, são
          marcas registradas de duplas como Tonico & Tinoco e Tião Carreiro & Pardinho.
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
  p1: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 12,
  },
  p2: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 12,
  },
  image: {
    marginBottom: 15,
  },
  introBox: {
    backgroundColor: "#999999",
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    width: "100%",},
});
