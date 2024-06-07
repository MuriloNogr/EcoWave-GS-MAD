// src/components/SpeciesDetail.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SpeciesDetail = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const [species, setSpecies] = useState({});

  useEffect(() => {
    const fetchSpeciesById = async () => {
      try {
        const response = await axios.get(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/especies/${id}`);
        setSpecies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSpeciesById();
  }, [id]);

  const deleteSpecies = async () => {
    try {
      await axios.delete(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/especies/${id}`);
      navigation.goBack(); // Retorna à tela anterior após a deleção
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>{species.nomeComum}</Text>
      <Text>{species.nomeCientifico}</Text>
      <Text>{species.habitat}</Text>
      <Button title="Deletar" onPress={deleteSpecies} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SpeciesDetail;
