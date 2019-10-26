import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';
import Card from '../components/Card';

export default function DeckDetailScreen(props) {
  const deck = props.navigation.getParam('deck');
  return (
    <ScrollView
      style={GlobalStyles.container}>
      <Text style={GlobalStyles.h1}>{deck.title}</Text>
      <Text>{deck.cards.length} Cards</Text>
      <Text>{deck.description}</Text>
      <Text>Created By {deck.author}</Text>
      <Button title='Start' />
      {deck.cards.map(card => (
        <Card key={card.id} card={card}/>
      ))}
    </ScrollView>
  );
}

DeckDetailScreen.navigationOptions = {
  title: 'Deck Details',
};
