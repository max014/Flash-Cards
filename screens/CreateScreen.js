import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';

export default function CreateScreen() {
  return (
    <ScrollView style={GlobalStyles.container}>
      <Text>- Create Deck</Text>
    </ScrollView>
  );
}

CreateScreen.navigationOptions = {
  title: 'Create',
};