// src/screens/EditUserScreen.js
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditUserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/usuarios/${id}`);
        setNome(response.data.nome);
        setEmail(response.data.email);
      } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Não foi possível carregar os detalhes do usuário.");
      }
    };

    fetchUserDetails();
  }, [id]);

  const updateUser = async () => {
    try {
      await axios.put(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/usuarios/${id}`, {
        nome,
        email,
      });
      Alert.alert("Sucesso", "Detalhes do usuário atualizados com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível atualizar os detalhes do usuário.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
      />
      <Button title="Atualizar Usuário" onPress={updateUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    paddingLeft: 10,
    width: '100%',
  },
});

export default EditUserScreen;
