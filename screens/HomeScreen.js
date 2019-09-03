import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';
import { MonoText } from '../components/StyledText';

const info = {
  decks: [
    {id: 0},
    {id: 1}
  ],
  groups: [
    {id: 0},
    {id: 1}
  ]
}

export default function HomeScreen(props) {
  return (
    <ScrollView
      style={GlobalStyles.container}>
      <Text>- Your Decks</Text>
      {info.decks.map(deck => (
        <Button
          key={deck.id}
          title="Deck"
          onPress={() => props.navigation.navigate('Deck', {id: deck.id})}
        />
      ))}
      <Text>- Your Groups</Text>
      {info.groups.map(group => (
        <Button
          key={group.id}
          title="Group"
          onPress={() => props.navigation.navigate('Group', {id: group.id})}
        />
      ))}
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};
