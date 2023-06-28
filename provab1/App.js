import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import GameCard from './gamecard';

const App = () => {
  const gameItems = [
    {
      image: require('./images/item1.png'),
      name: 'Barbaro Feral',
      description: 'Um poderoso barbaro com força sobre-humana.',
    },
    {
      image: require('./images/item2.png'),
      name: 'Principe do Inferno',
      description: 'Um anjo caido enviado para atormentar todos aqueles que são contra sua vontade.',
    },
    {
      image: require('./images/item3.png'),
      name: 'Campeão da Fera',
      description: 'Um poderoso guerreiro capaz de controlar todas as feras do reino.',
    },
  ];

  return (
    <View style={styles.container}>
      {gameItems.map((item, index) => (
        <GameCard key={index} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 16,
  },
});

export default App;
