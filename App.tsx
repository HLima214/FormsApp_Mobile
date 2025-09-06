import * as React from 'react';
import { StatusBar, TextStyle } from 'react-native'; // Importa o componente StatusBar e TextStyle
 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';

//import Formulario from './Screens/Formulario';
import UserList from './Screens/UserList';
import Formulario from './Screens/Formulario';

//Context serve para compartilhar informações entre as telas
import {UsersProvider} from './Screens/UsersContext';


//Aqui estamos iniciando a stack navigation, ou seja, estamos definindo a pilha de telas
const Stack = createStackNavigator();

//Definimos personalização pré definidas para as telas que vão compor o Stack (Essas personalizações vamos passar na parte de screenOptions)
const screensOptions = {
  headerStyle:{
    backgroundColor: '#ed145b'
  },
  headerTintColor: '#fff',
  headerTitleStyle:{
    fontWeight: 'bold' as TextStyle['fontWeight']
  },
};

const UserStack = () => (
  <Stack.Navigator initialRouteName='UserList' screenOptions={screensOptions}>
    <Stack.Screen
      name='UserList'
      component={UserList}
      options={({ navigation }) => ({
        title: 'Lista de Usuários',
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('UserForm')}
            type='clear'
            icon={<Icon name='add' size={25} color='white' />}
          />
        ),
      })}
    />
    <Stack.Screen
      name="UserForm"
      component={Formulario}
      options={{title: 'Formulário de Usuários'}}
    />
  </Stack.Navigator>
);
export default function App() {
  return (
    <UsersProvider>
      <StatusBar barStyle='light-content' backgroundColor='#ed145b'/>
    <NavigationContainer>
      <UserStack/>
    </NavigationContainer>
    </UsersProvider>
  );
}