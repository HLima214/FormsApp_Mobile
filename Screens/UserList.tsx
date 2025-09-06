import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native'; // Importa o componente StatusBar
import { UsersContext, User } from './UsersContext';


const UserList = () => {
  const { users } = useContext(UsersContext)!;
  return (
    <View>
  {users.map((user: User, idx: number) => (
        <View key={idx} style={styles.userContainer}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{user.nome}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    color: '#888',
    fontSize: 14,
  },
})

export default UserList;