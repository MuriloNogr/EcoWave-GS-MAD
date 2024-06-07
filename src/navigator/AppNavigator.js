// src/navigator/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SpeciesList from '../components/SpeciesList';
import SpeciesForm from '../components/SpeciesForm';
import EditSpecies from '../screens/EditSpecies'; // Certifique-se de que este caminho está correto
import TrashForm from '../components/TrashForm';
import TrashList from '../components/TrashList';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SpeciesList">
      <Stack.Screen name="SpeciesList" component={SpeciesList} />
      <Stack.Screen name="SpeciesForm" component={SpeciesForm} />
      <Stack.Screen name="EditSpecies" component={EditSpecies} />
      <Stack.Screen name="TrashForm" component={TrashForm} />
      <Stack.Screen name="TrashList" component={TrashList} />
      <Stack.Screen name="UserForm" component={UserForm} />
      <Stack.Screen name="UserList" component={UserList} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
