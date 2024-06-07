// src/components/UserDetail.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const UserDetail = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await axios.get(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/usuarios/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserById();
  }, [id]);

  const deleteUser = async () => {
    try {
      await axios.delete(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/usuarios/${id}`);
      navigation.goBack(); // Retorna à tela anterior após a deleção
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Nome: {user.nome}</Text>
      <Text>Email: {user.email}</Text>
      <Button title="Deletar" onPress={deleteUser} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default UserDetail;
