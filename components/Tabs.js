import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar } from 'react-native-elements';
const Tab       = createBottomTabNavigator();
import Vehiculos from './Vehiculos';

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let BgColor;
          let IcoColor;
          if (route.name === 'Vehiculos') {
            iconName = focused ? 'car' : 'car';
            BgColor = "#fff"
          } else if (route.name === 'Chat') {
            iconName = focused ? 'wechat' : 'wechat';
            BgColor = "#fff"
          } else if (route.name === 'Cuenta') {
            iconName = focused ? 'user' : 'user';
            BgColor = "#fff"
          } else if (route.name === 'Favoritos') {
            iconName = focused ? 'heart-o' : 'heart-o';
            BgColor = "#fff"
          }
          // You can return any component that you like here!
          return <Avatar
            rounded
            size="small"
            icon={{color: "#333",name: iconName, type: 'font-awesome'}}
            overlayContainerStyle={{backgroundColor:BgColor , borderWidth: 1, borderColor: IcoColor,}}
            activeOpacity={0.7}
          />
        },
      })}
      tabBarOptions={{
        activeTintColor: "#333",
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 14,
          marginBottom:10,
        },
        style: {
          height:75,
          paddingTop:5,
        },
      }}
      >
      <Tab.Screen name="Vehiculos" component={Vehiculos} />
      <Tab.Screen name="Favoritos" component={Vehiculos} />
      <Tab.Screen name="Chat" component={Vehiculos} />
      <Tab.Screen name="Mi Cuenta" component={Vehiculos} />
    </Tab.Navigator>
  );
}

export default Tabs;
