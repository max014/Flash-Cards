import React from 'react';
import { ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';
import DeckListItem from '../components/DeckListItem';
import SearchBar from '../components/SearchBar';

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

export default function SearchScreen() {
  return (
    <ScrollView style={GlobalStyles.container}>
      <SearchBar/>
      <Text style={[GlobalStyles.h1, {padding: 10}]}>Popular Decks</Text>
      {decks.map(deck => (
        <TouchableWithoutFeedback
          key={deck.id}
          onPress={() => props.navigation.navigate('Deck', {deck: deck})}>
          <DeckListItem deck={deck}/>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
}

SearchScreen.navigationOptions = {
  title: 'Explore',
};
