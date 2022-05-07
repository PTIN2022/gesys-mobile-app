import React, { Component, useState } from 'react';
import {Card, IconButton} from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Image, Text, View, Clipboard } from 'react-native';
import { connect } from 'react-redux';


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
      <Card style={{position: "absolute", top: 5, right:5, backgroundColor: "#0009"}} onPress={()=> Clipboard.setString(`${region.latitude}, ${region.longitude}`)}>
        <View style={{flexDirection: "row", alignItems: "center", padding: 5}}>
          <IconButton icon="content-copy" color='white' size={18}></IconButton>
          <Text style={{color: "white", fontSize: 16}}>{region.latitude}, {region.longitude}</Text>
        </View>
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
