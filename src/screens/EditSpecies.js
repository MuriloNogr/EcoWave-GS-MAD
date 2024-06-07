// src/screens/EditSpecies.js
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const EditSpecies = () => {
  const [id, setId] = useState('');
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [habitat, setHabitat] = useState('');

  const fetchSpeciesDetails = async () => {
    if (!id) {
      Alert.alert("ID não encontrado", "Por favor, insira um ID válido.");
      return;
    }
    try {
        const response = await axios.get(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/especies/${id}`);
      setCommonName(response.data.nomeComum);
      setScientificName(response.data.nomeCientifico);
      setHabitat(response.data.habitat);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível carregar os detalhes da espécie.");
    }
  };

  const updateSpecies = async () => {
    if (!id) {
      Alert.alert("ID não encontrado", "Por favor, insira um ID válido.");
      return;
    }
    try {
        await axios.put(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/especies/${id}`, {
            nomeComum: commonName,
            nomeCientifico: scientificName,
            habitat: habitat,
          });
      Alert.alert("Sucesso", "Detalhes da espécie atualizados com sucesso!");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível atualizar os detalhes da espécie.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={id}
        onChangeText={setId}
        placeholder="Insira o ID da Espécie"
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Buscar Detalhes" onPress={fetchSpeciesDetails} />
      <TextInput
        value={commonName}
        onChangeText={setCommonName}
        placeholder="Nome Comum"
        style={styles.input}
      />
      <TextInput
        value={scientificName}
        onChangeText={setScientificName}
        placeholder="Nome Científico"
        style={styles.input}
      />
      <TextInput
        value={habitat}
        onChangeText={setHabitat}
        placeholder="Habitat"
        style={styles.input}
      />
      <Button title="Atualizar Espécie" onPress={updateSpecies} />
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

export default EditSpecies;
