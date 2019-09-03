import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';

export default function DeckDetailScreen(props) {
  return (
    <ScrollView
      style={GlobalStyles.container}>
      <Text>- Deck {props.navigation.getParam('id')}</Text>
    </ScrollView>
  );
}

DeckDetailScreen.navigationOptions = {
  title: 'Deck Details',
};
