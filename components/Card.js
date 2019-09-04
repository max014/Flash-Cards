import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';


export default class Card extends React.Component {
  state = {
    turned: new Animated.Value(0)
  };
  
  turn = () => {
    Animated.timing(this.state.turned, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  spin = this.state.turned.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.turn}>

        <View style={styles.card}>
          <Animated.View style={
              {transform: [{rotateY: this.spin}]}
            }>
            <View style={styles.flipCardInner}>
              <View style={[styles.flipCardFront,]}>
                <Text style={styles.text}>{this.props.card.q}</Text>
              </View>
              <View style={[styles.flipCardBack,]}>
                <Text style={styles.text}>{this.props.card.a}</Text>
              </View>
            </View>
          </Animated.View>
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
  flipCardFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#eee"
  },
  flipCardBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#eee",
    transform: [{perspective: 1000},{rotateY: "180deg"}],
  },
  flip: {
    transform: [{rotateY: "180deg"}]
  }
});
