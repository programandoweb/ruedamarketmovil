import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import {Style,ContextState} from '../constants/Index'
import { Button } from 'react-native-elements';
import { Link } from "react-router-native";


const styles = Style;

class App extends Component {

  static contextType  = ContextState

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageBackground source={require('../assets/images/splash.jpg')} style={styles.backgroundImage}>
        <View style={styles.viewScreenTop}>
          <Image source={require('../assets/images/logow.png')} />
        </View>
        <View style={styles.viewScreenTop}>
          <Button onPress={ () => this.context.setState({screen:true})} title="Bienvenidos"/>
        </View>
      </ImageBackground>
    )
  }
}

export default App;
