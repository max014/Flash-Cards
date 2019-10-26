import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default SearchBar = props => {
    const [text, setText] = useState('');
    const search = () => {
        console.log(text);
    }
    return (
        <View style={styles.SearchBar}>
            <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={(text) => setText(text)}/>
            <Ionicons
                onPress={search}
                name={'ios-search'}
                size={26}
                color={'#ccc'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBar: {
        display: "flex",
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: .5,
        margin: 10,
    },
    input: {
        flex: 1
    }
});