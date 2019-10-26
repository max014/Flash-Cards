import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import DeckListItem from '../components/DeckListItem';
import {connect} from 'react-redux';


class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        {this.props.yourDecks.map(deck => (
          <TouchableWithoutFeedback
            key={deck.id}
            onPress={() => this.props.navigation.navigate('Deck', {deck: deck})}>
            <View>
              <DeckListItem deck={deck}/>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Your decks',
};

mapStateToProps = state => {
  return {
    yourDecks: state.yourDecks
  }
}

export default connect(mapStateToProps)(HomeScreen);
