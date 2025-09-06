import React from 'react';
import { StatusBar } from 'react-native'; // Importa o componente StatusBar
 
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {Button, Icon} from 'react-native-elements';
 
// Agora, eu importo as duas telas principais do aplicativo, a lista de usuários (UserList) e o formulário (UserForm).
//import UserList from './Screens/UserList';
//import UserForm from './Screens/Forms';
 
// Também importo o contexto de usuários (UsersProvider) para compartilhar o estado global entre as telas.
//import {UsersProvider} from './src/context/UsersContext';
 
// Aqui estou importando a tipagem TextStyle do 'react-native' para definir os estilos de texto de forma mais segura.
import { TextStyle } from 'react-native';
 
// Crio uma constante Stack que vai representar o stack navigator, ou seja, a pilha de telas que serão navegadas.
const Stack = createStackNavigator();
 
// Defino as opções padrão de estilo para o cabeçalho de todas as telas do Stack.
// headerStyle define a cor de fundo do cabeçalho.
// headerTintColor define a cor do texto e dos ícones no cabeçalho.
// headerTitleStyle define que o título do cabeçalho terá fonte em negrito.
const screenOptions = {
  headerStyle: {
    backgroundColor: '#ed145b', //cor da fiap ;-) 
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold' as TextStyle['fontWeight']
  },
};
 
// Crio a função UserStack que define a navegação entre as telas.
// Uso o Stack.Navigator para criar a pilha de navegação, onde 'initialRouteName' define a primeira tela exibida, no caso, "UserList".
// As 'screenOptions' aplicam o estilo que definimos previamente ao cabeçalho de todas as telas.
const UserStack = () => (
<Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
<Stack.Screen
      name="UserList"
      //component={UserList}
      options={({navigation}) => ({
        title: 'Lista de Usuários',
        headerRight: () => (
<Button
            onPress={() => navigation.navigate('UserForm')}
            type="clear"
            icon={<Icon name="add" size={25} color="white" />}
          />
        ),
      })}
    />
<Stack.Screen
      name="UserForm"
      component={UserForm}
      options={{title: 'Formulário de Usuários'}}
    />
</Stack.Navigator>
);
 
// Aqui, defino o componente principal da aplicação.
// O 'UsersProvider' envolve todo o app para que o estado dos usuários seja compartilhado entre as telas.
// 'NavigationContainer' envolve o 'UserStack' para gerenciar a navegação do app.
export default function App() {
  return (
<UsersProvider>
<StatusBar barStyle="light-content" backgroundColor="#ed145b" />
<NavigationContainer>
<UserStack />
</NavigationContainer>
</UsersProvider>
  );
}