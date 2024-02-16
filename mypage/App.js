import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
     <Image source={{uri: 'https://lncimg.lance.com.br/cdn-cgi/image/width=850,height=530,fit=crop,quality=75,format=webp/uploads/2018/11/15/5bedcf90501e4.jpeg'}} style={styles.logo}/>
     <br></br>
     <Text style={styles.textoo}>Rafael David Paes Landim Rodrigues da Silva</Text>
     <br></br>
     <br></br>
     <Text style={styles.subtexto}>Dados Pessoais:</Text>
     <br></br>
     <Text style={styles.textoDados}>Idade: 17 anos</Text>
     <br></br>
     <br></br>
     <Text style={styles.subtexto}>Formação: </Text>
     <br></br>
     <Text style={styles.textoDados}>Estou no último ano do ensino médio, e cursando Técnico em Desenvolvimento de Sistemas no Senai e torço pro Corinthians </Text>
     <br></br>
     <br></br>
     <Text style={styles.contato}>Contato</Text>
     <Button title="Github" onPress={() => Linking.openURL('https://github.com/landim9')}/>

      <StatusBar style="auto" />
    </View>
    
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b25',
    alignItems: 'center',
    letterSpacing: 5,
  },
  logo:{
    width: 350,
    height: 350,
    borderRadius: 50
  },
   textoo: {
      color: 'white',
      fontSize: 60,
      fontWeight: 'bold',
      letterSpacing: 2,
      gap: 50,
      textAlign: 'center',
    },
    subtexto: {
      color: '#e0a458',
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 5,
      gap: 50,
      textAlign: 'center',
    },
    textoDados: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 5,
    },
    contato: {
      color: 'white',
      fontSize: 35,
      fontWeight: 'bold',
      letterSpacing: 5,
    }

});