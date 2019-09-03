import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';

export default function DeckDetailScreen(props) {
  const deck = props.navigation.getParam('deck');
  return (
    <ScrollView
      style={GlobalStyles.container}>
      <Text>- Deck {deck.id}</Text>
      <Text>- {deck.title}</Text>
      <Text>- {deck.description}</Text>
      <Text>- Created By {deck.author}</Text>
      <Button title='Start' />
    </ScrollView>
  );
}

DeckDetailScreen.navigationOptions = {
  title: 'Deck Details',
};
