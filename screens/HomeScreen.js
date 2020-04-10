import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import {Style} from '../constants/Index'
import {Tabs} from '../components/Index'

const styles = Style;

const MainStack = createStackNavigator();
const Details   = createStackNavigator();
const RootStack = createStackNavigator();


function HomeTabs() {
  return (<Tabs/>)
}


function MainStackScreen() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Home"
                    component={ HomeTabs  }
                    options={{  headerTintColor: 'white',
                                headerStyle: { backgroundColor: "#333" },}}
      />
    </MainStack.Navigator>
  );
}

class App extends Component {

  constructor (args) {
    super(args)
    this.state = {};
  }

  componentWillUnmount(){

  }

  render(){
    return(<NavigationContainer>
              <RootStack.Navigator  mode="modal"    >
                <RootStack.Screen
                                  name="Main"
                                  component={MainStackScreen}
                                  options={{ headerShown: false }}
                />
              </RootStack.Navigator>
            </NavigationContainer>)
  }

}

export default App;
