// src/components/SpeciesList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const SpeciesList = ({ navigation }) => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    fetchSpecies();
  }, []);

  const fetchSpecies = async () => {
    try {
        const response = await axios.get('https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/especies');
      setSpecies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <FlatList
        data={species}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.speciesCard}>
            <Text style={styles.name}>{item.nomeComum}</Text>
            <Text style={styles.scientificName}>Nome Científico: {item.nomeCientifico}</Text>
            <Text style={styles.habitat}>Habitat: {item.habitat}</Text>
          </View>
        )}
      />
      <Button
        title="Adicionar Espécie"
        onPress={() => navigation.navigate('SpeciesForm')}
      />
      <Button
        title="Editar"
        onPress={() => navigation.navigate('EditSpecies')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  speciesCard: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scientificName: {
    fontSize: 14,
    color: 'gray',
  },
  habitat: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SpeciesList;
