// src/components/TrashList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const TrashList = ({ navigation }) => {
  const [trash, setTrash] = useState([]);

  useEffect(() => {
    fetchTrash();
  }, []);

  const fetchTrash = async () => {
    try {
      const response = await axios.get('https://rocky-depths-88705-d697bab49e8f.herokuapp.com/api/lixo');
      setTrash(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <FlatList
        data={trash}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.trashCard}>
            <Text style={styles.tipo}>Tipo: {item.tipo}</Text>
            <Text style={styles.quantidade}>Quantidade: {item.quantidade}</Text>
            <Button
              title="Editar"
              onPress={() => navigation.navigate('EditTrash', { id: item.id })}
            />
          </View>
        )}
      />
      <Button
        title="Adicionar Lixo"
        onPress={() => navigation.navigate('TrashForm')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  trashCard: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  tipo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantidade: {
    fontSize: 14,
    color: 'gray',
  },
});

export default TrashList;
