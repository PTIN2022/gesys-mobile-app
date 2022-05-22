import React, { Component, useState } from 'react';
import { Card, IconButton } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Image, Text, View, Clipboard, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchEstaciones } from '../state/actions/Estaciones'
import { setLocation } from '../state/actions/Location'
import * as Location from 'expo-location';
import Header from '../components/Header';
import { theme } from '../core/theme';
        

class StationsMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: null,
      currentLocation: null,
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

  getRegionForCoordinates(points) {
    // points should be an array of { latitude: X, longitude: Y }
    let minX, maxX, minY, maxY;
  
    // init first point
    ((point) => {
      minX = point.latitude;
      maxX = point.latitude;
      minY = point.longitude;
      maxY = point.longitude;
    })(points[0]);
  
    // calculate rect
    points.map((point) => {
      minX = Math.min(minX, point.latitude);
      maxX = Math.max(maxX, point.latitude);
      minY = Math.min(minY, point.longitude);
      maxY = Math.max(maxY, point.longitude);
    });
  
    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = (maxX - minX);
    const deltaY = (maxY - minY);
  
    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY
    };
  }

  async componentDidMount() {
    this.props.fetchEstaciones()
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permiso denegado para acceder a la ubicación.');
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        currentLocation: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        },
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.020,
          longitudeDelta: 0.020
        }
      })
    } 
  }


  render() {
    return !this.props.successEstaciones  || this.state.region==null && this.state.currentLocation==null 
      ? (<View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Header>Sigo?</Header>
            <ActivityIndicator style={{margin:5}} size="large" color={theme.colors.primary} />
          </View>
        )
      : (
        <View>
          <MapView
            style={s.map}
            initialRegion={this.state.region}
            onRegionChange={newRegion => this.setState({ region: newRegion })}
          >
            {this.state.currentLocation.longitude != null && this.state.currentLocation.latitude!= null 
              ?
                <Marker
                  coordinate={this.state.currentLocation}
                >
                  <Image
                    source={require('../assets/icons8-place-marker.gif')}
                    style={{ width: 75, height: 75 }}
                    resizeMode="contain"
                  />
                </Marker>
              :
              null
          }
            {this.state.fake_estaciones.map(item => {

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
    fetchEstaciones: () => dispatch(fetchEstaciones()),
    setCurrentLocation: (data) => dispatch(setLocation(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsMap);
