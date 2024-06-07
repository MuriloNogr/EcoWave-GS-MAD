// src/navigator/TrashNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TrashList from '../components/TrashList';
import TrashForm from '../components/TrashForm';
import TrashDetail from '../components/TrashDetail';
import EditTrashScreen from '../screens/EditTrashScreen';

const Stack = createStackNavigator();

const TrashNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TrashList">
      <Stack.Screen name="TrashList" component={TrashList} />
      <Stack.Screen name="TrashForm" component={TrashForm} />
      <Stack.Screen name="TrashDetail" component={TrashDetail} />
      <Stack.Screen name="EditTrash" component={EditTrashScreen} />
    </Stack.Navigator>
  );
};

export default TrashNavigator;
