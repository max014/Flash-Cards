import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';

export default function DeckCover(props) {
  return (
    <View style={styles.item}>
      <Text style={GlobalStyles.h2}>{props.deck.title}</Text>
      <Text>{props.deck.description}</Text>
      <Text>Created By {props.deck.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderBottomColor: '#000',
    borderBottomWidth: .5,
    padding: 10
  }
});