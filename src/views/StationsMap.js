import React, { Component, useState } from 'react';
import { Card, IconButton, Button } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Image, Text, View, Clipboard, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchEstaciones } from '../state/actions/Estaciones'
import { setLocation } from '../state/actions/Location'
import * as Location from 'expo-location';
import Header from '../components/Header';
import { theme } from '../core/theme';
import { NavigationHelpersContext } from '@react-navigation/native';
        

class StationsMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: null,
      region: null,
      selectedStation: null,
      fake_estaciones: [
        {
          id_estacion: 1,
          estacion: "Estacion numero 1",
          direccion: "Av ballentines",
          latitud: 41.22353710912193,
          longitud: 1.7204303853213787,
          ocupation_max: 10,
          ocupation_now: 5
        },
        {
          id_estacion: 2,
          estacion: "Estacion numero 2",
          direccion: "Av bacardi",
          latitud: 41.22301989408491,
          longitud: 1.7290154658257961,
          ocupation_max: 20,
          ocupation_now: 18
        },
        {
          id_estacion: 3,
          estacion: "Estacion numero 3",
          direccion: "Av brugal",
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
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permiso denegado para acceder a la ubicación.');
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.props.fetchEstaciones(location.coords.latitude, location.coords.longitude)
      this.setState({
        currentLocation: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        },
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1
        }
      })
      
    } 
   
  }

  selectStation(item){
    this.setState({
      selectedStation: item
    })
  }


  render() {
    return !this.props.successEstaciones || this.state.region==null && this.state.currentLocation==null 
      ? (<View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Header>Cargando localización</Header>
            <ActivityIndicator style={{margin:10}} size="large" color={theme.colors.primary} />
          </View>
        )
      : (
        <View>
          <MapView
            style={s.map}
            initialRegion={this.state.region}
            onRegionChange={newRegion => this.setState({ region: newRegion })}
            onTouchStart={() => this.setState({selectedStation: null}) }
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
            {this.props.estaciones.Estaciones.map((item) => {
              // Iteramos las estaciones que tenemos cargadas en el store.
              return (
                <Marker
                  key={item.id_estacion}
                  onPress={() => this.selectStation(item)}
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
          
          {/*Pop Up de seleccion de estacion*/}
          
          {this.state.selectedStation && (
              <View style={{position: "absolute", width: "100%", padding: 5}}>
                <Card style={{backgroundColor: '#fffe'}}>
                  <Card.Content style={{flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                      <Header>{this.state.selectedStation.nombre_est}</Header>
                      <View style={{flexDirection: "row", marginRight: 10}}>
                          <Text>{this.state.selectedStation.direccion}</Text>
                      </View>
                    </View>
                    <View style={{flexDirection: "row-reverse", marginTop: 10}}>
                        <Button 
                          mode="contained" 
                          style={{marginLeft: 10}}
                          onPress={() => this.props.navigation.navigate('StationDetail', {id: this.state.selectedStation.id_estacion})}
                        >
                          Detalle
                        </Button>
                    </View>
                  </Card.Content>
                </Card>
              </View>
          )}


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
const mapStateToProps = ({ Estaciones, Locations, Login }) => {

  const { estaciones, successEstaciones } = Estaciones;
  const { currentLocation } = Locations;
  return { estaciones, successEstaciones, currentLocation };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEstaciones: (long, lat, token) => dispatch(fetchEstaciones(long, lat, token)),
    setCurrentLocation: (data) => dispatch(setLocation(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsMap);
