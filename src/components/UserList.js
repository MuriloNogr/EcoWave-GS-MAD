// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const UserList = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/usuarios');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.nome}>Nome: {item.nome}</Text>
            <Text style={styles.email}>Email: {item.email}</Text>
            <Button
              title="Editar"
              onPress={() => navigation.navigate('EditUser', { id: item.id })}
            />
          </View>
        )}
      />
      <Button
        title="Adicionar Usuário"
        onPress={() => navigation.navigate('UserForm')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});

export default UserList;
