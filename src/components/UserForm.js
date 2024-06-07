// src/components/UserForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const UserForm = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const addUser = async () => {
    console.log(nome, email, senha); // Verifique os valores antes de enviar
    try {
      const response = await axios.post('https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/usuarios', {
        nome,
        email,
        senha,
      });
      console.log(response.data); // Verifique a resposta da API
      setNome('');
      setEmail('');
      setSenha('');
      navigation.goBack(); // Volta para a tela de listagem após adicionar
    } catch (error) {
      console.error(error); // Verifique erros
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
      <TextInput
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />
      <Button title="Adicionar Usuário" onPress={addUser} />
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

export default UserForm;
