import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {GlobalStyles} from '../constants/GlobalStyles';

export default function GroupDetailScreen(props) {
  return (
    <ScrollView
      style={GlobalStyles.container}>
      <Text>- Group {props.navigation.getParam('id')}</Text>
    </ScrollView>
  );
}

GroupDetailScreen.navigationOptions = {
  title: 'Group Details',
};
