import React, {Component} from 'react';
import { View, TextInput, Text, Button } from 'react-native';

class NewCard extends Component{
    state = {
        front: null,
        back: null
    }

    saveCard = () => {
        this.props.saveCard({...this.state});
        this.setState({front: null, back: null});
    }

    render(){
        return (
            <View>
                <TextInput
                    placeholder="Front"
                    value={this.state.front}
                    onChangeText={(text) => this.setState({front: text})}/>
                <TextInput
                    placeholder="Back"
                    value={this.state.back}
                    onChangeText={(text) => this.setState({back: text})}/>
                <Button title="Save Card" onPress={this.saveCard}/>
            </View>
        )
    }
}

export default NewCard;