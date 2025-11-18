import { StyleSheet, Text, View, Image } from "react-native";
import musica from "../assets/musica.png"

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Bem-vindo ao Mundo da Música</Text>
        <Text style={styles.subtitle}>Pequena descrição do que o app oferece:</Text>
        <Image source={musica} style={styles.musica} />
        <Text style={styles.descricao}>
        Aqui você pode explorar a música do clássico ao sertanejo 
        raiz. Descubra os estilos musicais, conheça artistas importantes, 
        confira curiosidades sobre a história da música. Tudo isso de forma simples,
         visual e interativa, para você aprender mais sobre as musicas.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "",
    padding: 24,
    backgroundColor: "#e0e0e4ff",
    paddingTop: 30, // distancia do topo
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
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#38434D",
    textAlign: "center",
    marginBottom:25,
  },
  descricao: {
    fontSize: 15,
    
  },
  musica:{
    height: 200,
    width: 320,
    marginBottom: 25,
  },
});
