import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';


export default function Card(props) {
  return (
    <View style={styles.card}>
      <Text>{props.card.q}</Text>
      <Text>{props.card.a}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 420,
    backgroundColor: '#eee',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  }
});