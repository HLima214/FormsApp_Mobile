import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário de Usuário</Text>
      <TextInput style={styles.input}
      placeholder='Nome'
      placeholderTextColor='#999999'      
      />
      <TextInput style={styles.input}
      placeholder='Email'
      placeholderTextColor='#999999'      
      />
      <TextInput style={styles.input}
      placeholder='URL do Avatar'
      placeholderTextColor='#999999'      
      />
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    backgroundColor: '#ed145b',
    width: 350,
    padding: 10,
    alignSelf: 'center',
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },

  input: {
    borderWidth: 2,
    borderColor: '#696969',
    padding: 10,
    marginBottom: 20,
    alignSelf: 'center',
    width: 350,
  },

  botao: {
    backgroundColor: '#ed145b',
    padding: 10,
    borderRadius: 5,
    width: 350,
    alignItems: 'center',
    alignSelf: 'center'
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
