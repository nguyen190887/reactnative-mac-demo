import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onTextInput = (text) => {
    this.setState({value: text});
  }

  reset = () => {
    this.setState({value: ''});
  }

  showAlert = (e) => {
    this.setState({ value: 'OK' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>========================================</Text>
        <Text>OMG !!! I created a React Native App !!!</Text>
        <Text>Value: {this.state.value || 'n/a'}</Text>
        <TextInput style={styles.textInput} onChangeText={this.onTextInput} value={this.state.value} placeholder="Input here"></TextInput>
        <Button title="Click Me" onPress={this.showAlert}>Click Me</Button>
        <Button title="Reset" onPress={this.reset}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray'
  }
});
