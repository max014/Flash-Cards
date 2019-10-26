import React, {Component} from 'react';
import { ScrollView, View, TextInput, Text, Button } from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';
import NewCard from '../components/NewCard';
import {connect} from 'react-redux';

class CreateScreen extends Component {
  state = {
    title: '',
    description: '',
    cards: [],
  }

  saveCard = (newCard) => {
    if(!newCard.front || !newCard.back){
      return;
    }
    const cards = this.state.cards;
    cards.push({front: newCard.front, back: newCard.back, id: cards.length});
    this.setState({cards: cards});
  }

  saveDeck = () => {
    this.props.saveDeck({...this.state, id: 4, author: this.props.user});
    this.setState({title: '', description: '', cards: []});
  }

  render(){
    return (
      <ScrollView style={GlobalStyles.container}>
        <TextInput 
          placeholder="Title"
          value={this.state.title}
          onChangeText={(text) => this.setState({title: text})}/>
        <TextInput
          placeholder="Description"
          value={this.state.description}
          onChangeText={(text) => this.setState({description: text})}/>
        <Text>{this.state.cards.length} cards</Text>
        <View>
          <Text>Add Card +</Text>
          <NewCard saveCard={this.saveCard} />
        </View>
        <Button onPress={this.saveDeck} title='Save Deck'/>
      </ScrollView>
    );
  }
}

CreateScreen.navigationOptions = {
  title: 'Create',
};

mapStateToProps = state => {
  return {
    user: state.user
  }
}

mapDispatchToProps = dispatch => {
  return {
    saveDeck: (deck) => dispatch({type: 'SAVE_DECK', deck: deck}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);