import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';


export default class Card extends React.Component {
  state = {
    turned: false,
    front: new Animated.Value(0),
    back: new Animated.Value(0)
  };
  
  turn = () => {
    Animated.sequence([
      Animated.timing(this.state.front, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(this.state.back, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();
    this.setState({turned: true});
  };

  unturn = () => {
    Animated.sequence([
      Animated.timing(this.state.back, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(this.state.front, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();
    this.setState({turned: false});
  };

  front = this.state.front.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  back = this.state.back.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.state.turned ? this.unturn : this.turn}>

        <View style={styles.card}>
            <View style={styles.flipCardInner}>

              <Animated.View style={[
                styles.flipCardFace,
                {transform: [{scaleX: this.front}]}
              ]}>
                <Text style={styles.text}>{this.props.card.q}</Text>
              </Animated.View>

              <Animated.View style={[
                styles.flipCardFace,
                {transform: [{scaleX: this.back}]}
              ]}>
                <Text style={styles.text}>{this.props.card.a}</Text>
              </Animated.View>

          </View>
        </View>

      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  },
  card: {
    height: 420,
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
    transform: [{perspective: 1000}]
  },
  flipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center"
  },
  flipCardFace: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#eee",
    transform: [{perspective: 1000}],
  }
});
