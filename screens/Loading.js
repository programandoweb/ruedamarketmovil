import React, { Component } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import {Style} from '../constants/Index'

const styles = Style;

class App extends Component {
  render() {
    return (
      <View style={styles.viewScreenTop}>
        <ActivityIndicator size="large" color="#2f8ec2" />
        <Text>Cargando</Text>
      </View>
    )
  }
}

export default App;
