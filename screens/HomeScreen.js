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
      author: "Max Oppor",
      cards: [
        {
          id: 0,
          q: "2 + 2",
          a: "4"
        },
        {
          id: 1,
          q: "3 + 5",
          a: "8"
        },
        {
          id: 2,
          q: "1 + 2",
          a: "3"
        },
      ]
    },
    {
      id: 1,
      title: "Spanish",
      description: "speak some spanish",
      author: "Max Oppor",
      cards: [
        {
          id: 0,
          q: "que",
          a: "what"
        },
        {
          id: 1,
          q: "tu",
          a: "you"
        },
        {
          id: 2,
          q: "soy",
          a: "I am"
        },
      ]
    }
];

export default function HomeScreen(props) {
  return (
    <View style={GlobalStyles.container}>
      <Text style={styles.title}>Saved Decks</Text>
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

const styles = StyleSheet.create({
  title: {
    marginLeft: 10
  }
});
