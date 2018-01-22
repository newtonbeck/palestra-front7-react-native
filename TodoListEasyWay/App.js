import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: ['Codar meu projeto', 'Estudar RN'],
      task: ''
    }
  }

  _addTask() {
    this.setState({
      tasks: this.state.tasks.concat(this.state.task)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Type your task here' onChangeText={(text) => this.setState({task: text})} />
        <Button title='Add' onPress={this._addTask.bind(this)} />
        <FlatList
        data={this.state.tasks}
        renderItem={({item}) => <Text>{item}</Text>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
