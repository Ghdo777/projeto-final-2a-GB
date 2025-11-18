import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import classica from '../assets/classica.png'
import sertanejo from '../assets/sertanejo.png'

export default function Page() {
  return (
    <ScrollView >
      <View style={styles.main}>
        <Text style={styles.p1}>Música Clássica</Text>
        <Image source={classica} style={styles.classica} />
        <Text style={styles.pp1}>
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
           
           <Text style={styles.p2}>Sertanejo Raiz</Text>
           <Image source={sertanejo} style={styles.sertanejo} />
           <Text style={styles.pp2}>
           Em contraste, o Sertanejo Raiz – ou Música Caipira – nasceu no interior do Brasil,
            sendo a voz autêntica e popular dos estados de São Paulo, Minas Gerais, Goiás e 
            Paraná. Sua origem é comumente associada ao trabalho de Cornélio Pires na década 
            de 1920, que registrou e popularizou as primeiras gravações dessa arte folclórica.
            Enquanto a música clássica se apoia na orquestra, o Sertanejo Raiz tem sua essência
             na Viola Caipira, instrumento fundamental que dita a melodia e o ritmo. As composições, 
             conhecidas como Modas de Viola, são geralmente mais simples na estrutura, mas profundas 
             na temática. Elas narram a vida na roça, a saudade da terra natal, os costumes, a fé e 
             os dramas do homem do campo.O estilo é inconfundível pelo uso das Terças Afinadíssimas, 
             onde as duplas (como os lendários Tonico e Tinoco ou Tião Carreiro e Pardinho) cantam em 
             harmonias vocais muito próximas, conferindo um toque de melancolia e autenticidade. Essa 
             música, transmitida por tradição oral, é um pilar da cultura brasileira, carregando emoção 
             e contando histórias de uma forma única e verdadeira.
           </Text>
           </View>
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#d3d3d3",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
classica: {
  height: 200,
  width: 340,
  marginBottom: 5,
  marginLeft: 10,
},
p1: {
  fontWeight: "bold",
  textAlign: "center" ,
  marginBottom: 10,
  marginTop: 20,
  
},
pp1: {
  marginBottom: 10,
  marginLeft: 10,
},
sertanejo: {
height: 185,
width: 340,
marginLeft: 10,
marginBottom: 10,
},
p2: {
  marginBottom: 10,
  fontWeight: "bold",
  textAlign: "center",
},
pp2: {
  marginBottom: 10,
  marginLeft: 10,
},
});
