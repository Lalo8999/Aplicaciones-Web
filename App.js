import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from './screens/InicioScreen';
import HomeScreen from './screens/HomeScreen';
import RegistroScreen from './screens/RegistroScreen';
import SafariScreen from './screens/SafariScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="SafariScreen" component={SafariScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
