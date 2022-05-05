import React, { Component } from 'react';
import {Card, Button} from 'react-native-paper';
import MapView, { Marker, LatLng } from 'react-native-maps'
import {ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import Header from "../components/Header";
import AppBack from '../components/AppBack';
import Background from '../components/Background';

export default function MainScreen(props) {

  return (
    <View>
      <MapView 
							style={s.map}
							initialRegion={{
								latitude: 41.2239200,
								longitude: 1.7251100,
								latitudeDelta: 0.020,
								longitudeDelta: 0.020,
							}}
						>
              {this.props.all_stations.map((item) => {
                    // Iteramos las estaciones que tenemos cargadas en el store.
                    return (
                        <View key={item.id}>
                            <Marker
                                id={item.id}
                                name={item.name}
                                capacity={item.capacity}
                                curr_ocupation={item.curr_ocupation}
                                markerlongitude={item.coordinates.longitude}
                                markerlatitude={item.coordinates.latitude}
                                coordinate={{markerlatitude,markerlongitude}}
                                openModal={this.toggleDialog}
                                firstSlot={item.slots[0]}
                            />
                        </View>
                    );
                })}
              /*<Marker coordinate={{latitude: 41.217606, longitude: 1.727072}} >
								<Image
									source={require('../assets/icons8-charging-station-96.png')}
									style={{width: 40, height: 40}}
									resizeMode="contain"
								/>
                </Marker>
            </MapView>
    </View>
  )
}

const s = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  }
})
