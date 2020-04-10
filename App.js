import React, { Component } from 'react';
import { Platform, StatusBar, View, Text, Image, ImageBackground } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import {Style,ContextState} from './constants/Index'
import {Splash,HomeScreen} from "./screens/";


const styles = Style;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
                    loading: true,
                    loggedIn: false,
                    screen: true,
                    dialog:{
                              status:false,
                              title:"Título de la ventana",
                              message:"Prueba de mensaje",
                              callback:false
                    }
                  };
    this._setState = this._setState.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  _setState = (data)  =>  {
    this.setState(data)
  }

  SwitchScreem=()=>{
    if (!this.state.screen) {
      return Splash
    }else {
      return HomeScreen
    }
  }

  render() {
    return (
      <ContextState.Provider value={{setState:this._setState,state:this.state}}>
        <NativeRouter>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Route exact path="/" component={this.SwitchScreem()} />
        </NativeRouter>
      </ContextState.Provider>
    )
  }
}

export default App;
