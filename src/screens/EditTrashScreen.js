// src/screens/EditTrashScreen.js
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditTrashScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const [tipo, setTipo] = useState('');
  const [quantidade, setQuantidade] = useState('');

  useEffect(() => {
    const fetchTrashDetails = async () => {
      try {
        const response = await axios.get(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/lixo/${id}`);
        setTipo(response.data.tipo);
        setQuantidade(response.data.quantidade.toString());
      } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Não foi possível carregar os detalhes do lixo.");
      }
    };

    fetchTrashDetails();
  }, [id]);

  const updateTrash = async () => {
    try {
      await axios.put(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/lixo/${id}`, {
        tipo,
        quantidade: parseInt(quantidade, 10),
      });
      Alert.alert("Sucesso", "Detalhes do lixo atualizados com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível atualizar os detalhes do lixo.");
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
      <Button title="Atualizar Lixo" onPress={updateTrash} />
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

export default EditTrashScreen;
