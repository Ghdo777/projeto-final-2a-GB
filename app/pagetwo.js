import { StyleSheet, Text, View, Image } from "react-native";
import classica from "../assets/classica.png"
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Da Música Clássica ao Sertanejo Raiz</Text>
        <Text style={styles.subtitle}>Colocar dados do conteudo obrigatorio</Text>
        <Image source={classica} style={styles.classica} />
        <Text style={styles.ftclassica}>
          A música clássica surgiu na Europa entre os 
          séculos XVII e XIX e é considerada uma das formas mais sofisticadas de 
          expressão musical já criadas. Ela é caracterizada por composições extensas, 
          grande preocupação com harmonia, melodias complexas e o uso de instrumentos 
          como violino, piano, violoncelo e toda uma orquestra completa.Entre os 
          compositores mais famosos estão Ludwig van Beethoven, Wolfgang Amadeus Mozart
           e Johann Sebastian Bach, que influenciaram profundamente a música ocidental. 
           Suas obras são marcadas por emoção, intensidade e perfeição técnica, servindo 
           de base para diversos estilos que surgiram ao longo do tempo.
           </Text>

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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#38434D",
    marginHorizontal:"",
    textAlign: "center",
  },
  classica: {
    height: 200,
    width: 330,
  },
});
