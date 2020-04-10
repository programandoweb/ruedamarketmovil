import React, { Component, useState , useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import {Style,ContextState} from '../../constants/Index';

const styles = Style;

const ItemsEmpty = (props) =>{
  return(<View style={styles.card}>
            <View style={styles.contentImage}>
              <ImageBackground
                style={styles.backgroundImage}
                source={{
                  uri:"https://ruedamarket.com/images/uploads/galerias/a2566e79604f49cad37b52af11ab561e/es/file_302_JORGE_17964abe62d999b654b640e0e524f8e5.webp",
                }}
              />
            </View>
            <View style={styles.contentDescription}>
              <Text style={styles.h4}>
                No existen datos a mostrar
              </Text>
            </View>
          </View>)
}

export default ItemsEmpty
