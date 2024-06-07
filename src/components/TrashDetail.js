// src/components/TrashDetail.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const TrashDetail = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const [trashItem, setTrashItem] = useState({});

  useEffect(() => {
    const fetchTrashItemById = async () => {
      try {
        const response = await axios.get(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/lixo/${id}`);
        setTrashItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrashItemById();
  }, [id]);

  const deleteTrash = async () => {
    try {
      await axios.delete(`https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/lixo/${id}`);
      navigation.goBack(); // Retorna à tela anterior após a deleção
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Tipo: {trashItem.tipo}</Text>
      <Text>Quantidade: {trashItem.quantidade}</Text>
      <Button title="Deletar" onPress={deleteTrash} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TrashDetail;
