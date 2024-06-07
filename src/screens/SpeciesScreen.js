// src/screens/SpeciesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SpeciesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Species Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpeciesScreen;