import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import classica from "../assets/classica.png"
import sertanejo from "../assets/sertanejo.png"
import claserta from "../assets/classica-sertanejo.png"
export default function Page() {
  return (
    <ScrollView >

      <View style={styles.main}>
        <Text style={styles.title}>Da Música Clássica ao Sertanejo Raiz</Text>
           <Text style={styles.p3}>Do Palco Brilhante ao Terreiro de Chão Batido </Text>
           <Image source={claserta} style={styles.claserta} />
           <Text style={styles.a1}>Sabe quando a gente ouve uma daquelas músicas clássicas, 
            com uma orquestra inteira, e sente um arrepio na espinha? É uma emoção tão grande, 
            tão poderosa, que parece que o som preenche cada cantinho da gente. É a alma falando 
            através de violinos, cellos e pianos, numa melodia que atravessa séculos.</Text><Text style={styles.a1}>A gente olha 
            para a Música Clássica e pensa: "Que coisa grandiosa, que arte sofisticada!" E é mesmo.
             Ali tem uma disciplina que vem de muito longe, de gente que dedicou a vida inteira a 
             entender como os sons se encaixam pra tocar o coração. Cada nota, cada pausa, tudo pensado
              pra emocionar de um jeito único, num espetáculo que nos tira o fôlego.</Text><Text style={styles.a1}>Mas aí, a gente 
              dá um salto e pisa no chão batido do nosso interior, onde o sol se deita avermelhado e 
              a vida segue o ritmo da natureza. Lá, no meio da poeira e do cheiro de mato, a gente 
              encontra o Sertanejo Raiz. Uma viola afinada de um jeito próprio, uma sanfona que parece 
              chorar e duas vozes que se entrelaçam, contando histórias de amor, de perda, de trabalho
               no campo e de saudade.</Text><Text style={styles.a1}>À primeira vista, parece que não tem nada a ver, né? Um é do salão 
               elegante, o outro, da roça. Um tem a partitura, o outro, a memória do povo. Mas a verdade
                é que os dois nascem do mesmo lugar: da necessidade do ser humano de expressar o que sente 
                mais fundo.</Text> <Text style={styles.a1}>Pensa comigo: a paixão de um grande compositor clássico ao escrever uma sinfonia
                , querendo traduzir em música a alegria ou a tristeza, não é a mesma paixão do violeiro que,
                 depois de um dia duro, senta na varanda e canta a sua lida, a sua fé, o seu amor?</Text><Text style={styles.a1}>Nos dois 
                 mundos, existe uma sabedoria profunda. Na clássica, é a sabedoria dos mestres que ensinaram
                  como os sons podem virar obras de arte eternas. No sertanejo, é a sabedoria de um povo 
                  que, sem ter estudado teoria musical, descobriu o jeito perfeito de contar a sua história 
                  através de uma melodia simples, mas cheia de alma. As modas de viola têm um jeito de 
                  começar e terminar, um "molde" que, mesmo não sendo escrito, é respeitado e passado de pai
                   pra filho, de violeiro pra violeiro. É a forma que dá força à emoção.</Text><Text style={styles.a1}>É como se a Música Clássica e o 
                   Sertanejo Raiz fossem duas línguas diferentes falando a mesma coisa: o que é ser gente, o 
                   que é amar, o que é sonhar, o que é sentir saudade. Uma fala com a pompa dos reis e a 
                   grandeza dos salões; a outra, com a simplicidade da terra e a voz de quem vive nela.</Text><Text style={styles.a1}>E é aí 
                   que elas se encontram. No fundo, as duas nos lembram que a música, em qualquer canto do mundo, 
                   em qualquer tempo, é a nossa forma mais pura de tocar o coração um do outro. É a arte que nos
                    conecta, não importa se estamos de fraque ou de chapéu de palha.</Text>
      </View>
    </ScrollView>
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
    marginBottom: 10,
    textAlign: "center",
    marginTop: 12,
  },
  subtitle: {
    fontSize: 15,
    color: "#38434D",
    marginHorizontal:"",
    textAlign: "center",
    marginBottom: 5,
  },
  claserta: {
  height: 185,
  width: 340,
  marginLeft: 10,
  marginBottom: 10,
  },
  p3: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  pp3: {
    marginBottom: 10,
    marginLeft: 10,
    
  },
  a1: {
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});
