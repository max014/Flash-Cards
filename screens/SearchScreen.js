import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';

export default function SearchScreen() {
  return (
    <ScrollView style={GlobalStyles.container}>
      <Text>- Search Decks</Text>
    </ScrollView>
  );
}

SearchScreen.navigationOptions = {
  title: 'Search',
};
