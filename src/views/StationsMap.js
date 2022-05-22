import React, { Component, useState } from 'react';
import { Card, IconButton } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Image, Text, View, Clipboard } from 'react-native';
import { connect } from 'react-redux';
import { fetchEstaciones } from '../state/actions/Estaciones'
import { setLocation } from '../state/actions/Location'
import * as Location from 'expo-location';


class StationsMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 41.2239200,
        longitude: 1.7251100,
        latitudeDelta: 0.020,
        longitudeDelta: 0.020
      },
      fake_estaciones: [
        {
          id: 1,
          estacion: "hola",
          latitud: 41.22353710912193,
          longitud: 1.7204303853213787,
          ocupation_max: 10,
          ocupation_now: 5
        },
        {
          id: 2,
          estacion: "hola",
          latitud: 41.22301989408491,
          longitud: 1.7290154658257961,
          ocupation_max: 20,
          ocupation_now: 18
        },
        {
          id: 3,
          estacion: "hola",
          latitud: 41.21592322008729,
          longitud: 1.7236034385859966,
          ocupation_max: 25,
          ocupation_now: 1
        },
      ]
    };
  }

  async componentDidMount() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permiso denegado para acceder a la ubicación.');
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.props.setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
      
    } 

    if(this.props.currentLocation.latitude !== null && this.props.currentLocation.longitude !== null){
      this.props.fetchEstaciones(this.props.currentLocation.latitude, this.props.currentLocation.longitude)
    }
  }
  
  
  componentDidUpdate() {
  }


  render() {
    return !this.props.successEstaciones ?
      (<Text>
        {this.props.currentLocation.latitude !== null && this.props.currentLocation.longitude !== null ? 
          <Text>Tus coordenadas: {this.props.currentLocation.longitude}, {this.props.currentLocation.latitude}</Text>
          :
          null
        }
    </Text>)
      : (
        <View>
          {this.props.currentLocation.longitude != null && this.props.currentLocation.latitude!= null ?
            <Text>Tu ubicación {this.props.currentLocation.longitude}, {this.props.currentLocation.latitude}</Text>
            :
            null
          }
          <MapView
            style={s.map}
            initialRegion={this.state.region}
            onRegionChange={newRegion => this.setState({ region: newRegion })}
          >
            {this.props.estaciones.Estaciones.map(item => {

              // Iteramos las estaciones que tenemos cargadas en el store.
              return (
                <Marker
                  onPress={() => this.props.navigation.navigate("StationDetail")}
                  key={item.id}
                  coordinate={{
                    latitude: item.latitud,
                    longitude: item.longitud
                  }}
                >
                  <Image
                    source={require('../assets/icons8-charging-station-96.png')}
                    style={{ width: 50, height: 50 }}
                    resizeMode="contain"
                  />
                </Marker>
              );
            })}
          </MapView>
              {/* ESTA CARD MUESTRA EN REAL TIME LAT Y LONG DE EL MAPA */}
              {/* <Card style={{position: "absolute", top: 5, right:5, backgroundColor: "#0009"}} onPress={()=> Clipboard.setString(`${region.latitude}, ${region.longitude}`)}>
                    <View style={{flexDirection: "row", alignItems: "center", padding: 5}}>
                      <IconButton icon="content-copy" color='white' size={18}></IconButton>
                      <Text style={{color: "white", fontSize: 16}}>{this.state.region.latitude}, {this.state.region.longitude}</Text>
                    </View>
                  </Card> */}
        </View>
      )
  }
}

const s = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  }
})


// Cargamos los datos que tenemos en el store.
const mapStateToProps = ({ Estaciones, Locations }) => {
  const { estaciones, successEstaciones } = Estaciones;
  const { currentLocation } = Locations;
  return { estaciones, successEstaciones, currentLocation };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEstaciones: (long, lat) => dispatch(fetchEstaciones(long, lat)),
    setCurrentLocation: (data) => dispatch(setLocation(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsMap);
