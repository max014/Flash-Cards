import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';

export default function DeckCover(props) {
  return (
    <View style={styles.card}>
      <Text style={GlobalStyles.whiteText}>{props.deck.title}</Text>
      <Text style={GlobalStyles.whiteText}>{props.deck.description}</Text>
      <Text style={GlobalStyles.whiteText}>Created By {props.deck.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#a882dd',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  }
});