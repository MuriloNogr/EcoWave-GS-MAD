// src/components/TrashForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const TrashForm = ({ navigation }) => {
  const [tipo, setTipo] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const addTrash = async () => {
    console.log(tipo, quantidade); // Verifique os valores antes de enviar
    try {
      const response = await axios.post('https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/lixo', {
        tipo,
        quantidade: parseInt(quantidade, 10),
      });
      console.log(response.data); // Verifique a resposta da API
      setTipo('');
      setQuantidade('');
      navigation.goBack(); // Volta para a tela de listagem após adicionar
    } catch (error) {
      console.error(error); // Verifique erros
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={tipo}
        onChangeText={setTipo}
        placeholder="Tipo"
        style={styles.input}
      />
      <TextInput
        value={quantidade}
        onChangeText={setQuantidade}
        placeholder="Quantidade"
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Adicionar Lixo" onPress={addTrash} />
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

export default TrashForm;
