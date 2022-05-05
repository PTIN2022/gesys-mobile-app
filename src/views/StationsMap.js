import React, { Component, useState } from 'react';
import {Card, Button} from 'react-native-paper';
import MapView, { Marker, LatLng } from 'react-native-maps'
import {ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';
import Header from "../components/Header";
import AppBack from '../components/AppBack';
import Background from '../components/Background';

function StationsMap(props) {

  const [region, setRegion] = useState({
    latitude: 41.2239200,
    longitude: 1.7251100,
    latitudeDelta: 0.020,
    longitudeDelta: 0.020,
  })

  return (
    <View>
      <MapView 
        style={s.map}
        initialRegion={region}
        onRegionChange={newRegion=>setRegion(newRegion)}
      >
        {props.all_stations.map(item => {

              // Iteramos las estaciones que tenemos cargadas en el store.
              return (
                  <Marker
                      onPress={()=>props.navigation.navigate("StationDetail", {
                        station: item
                      })}
                      key={item.id}
                      coordinate={{
                        latitude: item.coordinates.latitude,
                        longitude: item.coordinates.longitude
                      }}
                  >
                    <Image
                      source={require('../assets/icons8-charging-station-96.png')}
                      style={{width: 50, height: 50}}
                      resizeMode="contain"
                    />
                  </Marker>
              );
        })}
      </MapView>
      {/* ESTA CARD MUESTRA EN REAL TIME LAT Y LONG DE EL MAPA */}
      <Card style={{position: "absolute", bottom: 5, right:5, backgroundColor: "#000a", padding: 5}}>
        <Text style={{color: "white", fontSize: 20}}>{region.latitude}, {region.longitude}</Text>
      </Card>
    </View>
  )
}

const s = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  }
})


// Cargamos los datos que tenemos en el store.
const mapStateToProps = (state) => {
  const { all_stations } = state;
  return { all_stations };
};


export default connect(mapStateToProps)(StationsMap);
