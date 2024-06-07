// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AppNavigator from './src/navigator/AppNavigator';
import TrashNavigator from './src/navigator/TrashNavigator';
import UserNavigator from './src/navigator/UserNavigator';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Species" component={AppNavigator} />
        <Stack.Screen name="Trash" component={TrashNavigator} />
        <Stack.Screen name="User" component={UserNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
