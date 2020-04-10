import React, { Component, useState , useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import {Style,ContextState} from '../../constants/Index';

const styles = Style;

const Items = (props) =>{

  return( <TouchableOpacity style={styles.itemList}>
            <View style={styles.card}>
              <View style={styles.contentImage}>
                <ImageBackground
                  style={styles.backgroundImage}
                  source={{
                    uri:props.v.fotos[0],
                  }}
                />
              </View>
              <View style={styles.contentDescription}>
                <Text style={styles.h4}>
                  {props.v.titulo}
                </Text>
                <View style={styles.rowItem}>
                  <View style={styles.colPrecio}>
                    <Text style={styles.kilometraje}>
                      {props.v.kilometros} Kms
                    </Text>
                  </View>
                  <View style={styles.colPrecio}>
                    <Text style={styles.precio}>
                      ${props.v.precio}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
  )
}

export default Items
