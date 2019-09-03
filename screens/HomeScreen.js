import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';
import { MonoText } from '../components/StyledText';
import DeckCover from '../components/DeckCover';

const decks = [
    {
      id: 0,
      title: 'Math',
      description: "do some numbers",
      author: "Max Oppor"
    },
    {
      id: 1,
      title: "Spanish",
      description: "speak some spanish",
      author: "Max Oppor"
    }
];

export default function HomeScreen(props) {
  return (
    <View
      style={GlobalStyles.container}>
      <Text>Saved Decks</Text>
      <ScrollView horizontal>
        {decks.map(deck => (
          <TouchableWithoutFeedback
            key={deck.id}
            onPress={() => props.navigation.navigate('Deck', {deck: deck})}>
            <View>
              <DeckCover deck={deck}/>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};
