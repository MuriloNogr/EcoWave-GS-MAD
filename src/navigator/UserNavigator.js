// src/navigator/UserNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import UserDetail from '../components/UserDetail';
import EditUserScreen from '../screens/EditUserScreen';

const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="UserForm" component={UserForm} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
      <Stack.Screen name="EditUser" component={EditUserScreen} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
