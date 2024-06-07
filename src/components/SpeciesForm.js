// src/components/SpeciesForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const SpeciesForm = ({ navigation }) => {
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [habitat, setHabitat] = useState('');

  const addSpecies = async () => {
    console.log(commonName, scientificName, habitat); // Verifique os valores antes de enviar
    try {
        const response = await axios.post('https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/especies', {
            nomeComum: commonName,
            nomeCientifico: scientificName,
            habitat: habitat,
          });
      console.log(response.data); // Verifique a resposta da API
      setCommonName('');
      setScientificName('');
      setHabitat('');
      navigation.goBack(); // Volta para a tela de listagem após adicionar
    } catch (error) {
      console.error(error); // Verifique erros
    }
  };

  return (
    <View style={styles.container}>
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
      <Button title="Adicionar Espécie" onPress={addSpecies} />
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

export default SpeciesForm;