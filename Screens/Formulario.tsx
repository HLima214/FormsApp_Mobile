import React, { useContext, useState } from 'react';
import { StatusBar } from 'react-native'; // Importa o componente StatusBar
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';


import { User, UsersContext } from './UsersContext';
const Formulario = ({ navigation }: { navigation: any }) => {
  const { addUser } = useContext(UsersContext)!;
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');

  const handleSave = () => {
    if (!nome || !email || !avatar) {
      Alert.alert('Ops!', 'Todos os campos devem ser preenchidos');
      return;
    }
    addUser({nome, email, avatar});
    navigation.goBack();
  };


    return(
    <View style={styles.container}>  
      <TextInput style={styles.input}
      placeholder='Nome'
      value={nome}
      onChangeText={setNome}
      placeholderTextColor='#999999'      
      />
      <TextInput style={styles.input}
      placeholder='Email'
      value={email}
      onChangeText={setEmail}
      placeholderTextColor='#999999'      
      />
      <TextInput style={styles.input}
      placeholder='URL do Avatar'
      value={avatar}
      onChangeText={setAvatar}
      placeholderTextColor='#999999'      
      />
      <TouchableOpacity style={styles.botao} onPress={handleSave}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
    </View>
    );
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 40,
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


export default Formulario;