import React, { Component, useState , useEffect } from 'react';
import { View, Text, Image, ImageBackground,ScrollView } from 'react-native';
import {Style,ContextState} from '../constants/Index'
import {Functions} from '../helpers/Index'
import { Button } from 'react-native-elements';
import Items from "../screens/vehiculos/Items";
import ItemsEmpty from "../screens/vehiculos/ItemsEmpty";
import Loading from "../screens/Loading";

const styles = Style;

const Vehiculos = () =>{

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tipoVehiculo, setTipoVehiculo] = useState("Usado");

  function handleSelectType(type){
    setTipoVehiculo(type)
    setLoading(true)
    GetCars(type);
  }

  function GetCars(_var){
    setLoading(true)
    let tipo  = (_var==undefined)?tipoVehiculo:_var;
    Functions.Get("Vender","getVehiculos",{marca_id:"",estado_id:"",nuevo_usado:tipo},setCars,setLoading)
  }

  function _loading(){
    return (loading)?<Loading />:<ItemsEmpty />
  }

  function _loadingItems(){
    return (loading)?<Loading />:cars.map((v,k)=>{return <Items v={v}  key={k} />})
  }

  useEffect(() => {
    GetCars();
  },[]);

  return  <View style={styles.container}>
            <ImageBackground source={require('../assets/images/gradient.jpg')} style={styles.backgroundGradient}>
              <View style={styles.viewScreenTop}>
                <View style={styles.row}>
                  <View style={styles.col4}>
                    <Text style={styles.textButtom} onPress={()=>handleSelectType("Usado")}>
                      Usados
                    </Text>
                  </View>
                  <View style={styles.col4}>
                    <Text style={styles.textButtom} onPress={()=>handleSelectType("Nuevo")}>
                      Nuevos
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <ScrollView>
              <View style={styles.containerScrollView}>
                <Text style={styles.h1}>
                  Vehículos {tipoVehiculo}
                </Text>
                <View style={styles.row}>
                  {
                    (cars.length>0)?_loadingItems():_loading()
                  }
                </View>
              </View>
            </ScrollView>
          </View>
}

export default Vehiculos;
