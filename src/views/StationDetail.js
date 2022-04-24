import React, { Component } from 'react';
import {Card, DataTable} from 'react-native-paper';
import MapView, { Marker, LatLng } from 'react-native-maps'
import {ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import Button from "../components/Button";
import Header from "../components/Header";
export default class StationDetail extends Component {

	constructor(props){
		super(props)
		this.state={

		}
	}

  render() {
		return (
			<View>
				<View style={s.mapContainer}>
					<MapView 
						style={s.map}
						initialRegion={{
							latitude: 41.221472,
							longitude: 1.730100,
							latitudeDelta: 0.003,
							longitudeDelta: 0.003,
						  }}
					>
						<Marker
							coordinate={{
								latitude: 41.221472,
								longitude: 1.730100
							}}
						>
							<Image
								source={require('../assets/charging-station.png')}
								style={{width: 46, height: 46}}
								resizeMode="contain"
							/>
						</Marker>
					</MapView>
				</View>
				<View style={{paddingLeft: 15}}><Header>EPEVG Charging Station</Header></View>
				<ScrollView style={{height: "40%"}}>
					<DataTable.Row style={{marginVertical: 10}}>
						<DataTable.Cell>Puntuación</DataTable.Cell>
						<View style={s.viewCell}>
							<StarRating
								disabled={false}
								maxStars={5}
								rating={4}
								fullStarColor={"#00e39b"}
								emptyStarColor={"#00e39b"}
								starSize={25}
							/>
						</View>
					</DataTable.Row>
					<DataTable.Row>
						<DataTable.Cell>Dirección</DataTable.Cell>
						<View style={s.viewCell}>
							<Text>Avinguda d'Eduard Toldrà, 22A, 08800 Vilanova i la Geltrú, Barcelona</Text>
						</View>
					</DataTable.Row>
					<DataTable.Row>
						<DataTable.Cell>Horario</DataTable.Cell>
						<View style={s.viewCell}>
							<Text>Lun-Dom, 06:00-02:00 </Text>
						</View>
					</DataTable.Row>
					<DataTable.Row>
						<DataTable.Cell>Teléfono</DataTable.Cell>
						<View style={s.viewCell}>
							<Text>+43 967 33 22 00</Text>
						</View>
					</DataTable.Row>
					<DataTable.Row>
						<DataTable.Cell>Ocupacion</DataTable.Cell>
						<View style={s.viewCell}>
							<Text>20/35</Text>
						</View>
					</DataTable.Row>
				</ScrollView>
				<View style={{marginRight: 5, alignItems: "flex-end"}}>
					<Button mode="contained" style={{width:"50%"}}>
						Reservar
					</Button>
				</View>
			</View>
		);
	}
}

const s = StyleSheet.create({
	map:{
		width: "100%",
		height: 280
	},
	viewCell:{
		justifyContent: "center", 
		alignItems: "flex-end",
		width: "40%",
	}
});
	

