// src/screens/HomeScreen.js
import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    
        <Text style={styles.text}>EcoWave</Text>
      <Button
        title="Ir para Espécies"
        onPress={() => navigation.navigate('Species')}
      />
      <Button
        title="Ir para Lixo"
        onPress={() => navigation.navigate('Trash')}
      />
      <Button
        title="Ir para Usuários"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 50,
    marginBottom: 20,
  },
});

export default HomeScreen;
