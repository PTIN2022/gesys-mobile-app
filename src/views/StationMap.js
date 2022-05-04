import React, { Component } from 'react';
import {Card, Button} from 'react-native-paper';
import MapView, { Marker, LatLng } from 'react-native-maps'
import {ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import Header from "../components/Header";
import AppBack from '../components/AppBack';
import Background from '../components/Background';

export default function MainScreen(navigation) {

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
              <Marker coordinate={{latitude: 41.217606, longitude: 1.727072}} >
								<Image
									source={require('../assets/icons8-charging-station-96.png')}
									style={{width: 40, height: 40}}
									resizeMode="contain"
								/>
                </Marker>
                <Marker coordinate={{latitude: 41.221002, longitude: 1.730369}}>
								<Image
									source={require('../assets/icons8-charging-station-96.png')}
									style={{width: 40, height: 40}}
									resizeMode="contain"
								/>
                </Marker>
                <Marker coordinate={{latitude: 41.225431, longitude: 1.737627}}>
								<Image
									source={require('../assets/icons8-charging-station-96.png')}
									style={{width: 40, height: 40}}
									resizeMode="contain"
								/>
                </Marker>
                <Marker coordinate={{latitude: 41.227420, longitude: 1.728166}}>
								<Image
									source={require('../assets/icons8-charging-station-96.png')}
									style={{width: 40, height: 40}}
									resizeMode="contain"
								/>
                </Marker>
                <Marker coordinate={{latitude: 41.229674, longitude: 1.721478}}>
								<Image
									source={require('../assets/icons8-charging-station-96.png')}
									style={{width: 40, height: 40}}
									resizeMode="contain"
								/>
                </Marker>
                <Marker coordinate={{latitude: 41.222119, longitude: 1.718915}}>
								<Image
									source={require('../assets/icons8-charging-station-96.png')}
									style={{width: 40, height: 40}}
									resizeMode="contain"
								/>
                </Marker>
                <Marker coordinate={{latitude: 41.223434, longitude: 1.710113}}>
								<Image
									source={require('../assets/icons8-charging-station-96.png')}
									style={{width: 40, height: 40}}
									resizeMode="contain"
								/>
                </Marker>
                <Marker coordinate={{latitude: 41.217122, longitude: 1.709477}}>
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
