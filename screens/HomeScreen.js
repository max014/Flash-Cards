import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';
import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <ScrollView
      style={GlobalStyles.container}>
      <Text>- Your Decks</Text>
      <Text>- Your Groups</Text>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};
