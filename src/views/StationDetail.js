import React, { Component } from 'react';
import {Card, Button} from 'react-native-paper';
import MapView, { Marker, LatLng } from 'react-native-maps'
import {ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import Header from "../components/Header";
import AppBack from '../components/AppBack';
import Background from '../components/Background';
export default class StationDetail extends Component {

	constructor(props){
		super(props)
	}

  render() {
		return (
			<Background>
				<AppBack title="Detalle de estacion" backScreenName="Stations"/>
					<Card mode="elevated" style={{marginHorizontal: 10, backgorundColor: "#ffffffdd"}}>
						
						<Card.Content>
						<MapView 
							style={s.map}
							initialRegion={{
								latitude: 41.221472,
								longitude: 1.730100,
								latitudeDelta: 0.003,
								longitudeDelta: 0.003,
							}}
						>
							<Marker coordinate={{latitude: 41.221472, longitude: 1.730100}}>
								<Image
									source={require('../assets/icons8-charging-station-96.png')}
									style={{width: 40, height: 40}}
									resizeMode="contain"
								/>
							</Marker>
						</MapView>
							<View style={{margin: 10}}>
								<Header>EPEVG Charging Station</Header>
							</View>
							<View style={s.tableRow}>
								<View style={{...s.viewCell, flex: 1}}><Text>Puntuación</Text></View>
								<View style={{...s.viewCell, flex: 2}}>
									<StarRating
										disabled={false}
										maxStars={5}
										rating={4}
										fullStarColor={"#00e39b"}
										emptyStarColor={"#00e39b"}
										starSize={25}
									/>
								</View>
							</View>
							<View style={s.tableRow} >
								<View style={{...s.viewCell, flex: 1}}><Text>Horario</Text></View>
								<View style={{...s.viewCell, flex: 2}}>
									<Text>Lun-Dom, 06:00-02:00 </Text>
								</View>
							</View>
							<View style={s.tableRow} >
								<View style={{...s.viewCell, flex: 1}}><Text>Teléfono</Text></View>
								<View style={{...s.viewCell, flex: 2}}>
									<Text>+43 967 33 22 00</Text>
								</View>
							</View>
							<View style={s.tableRow} >
								<View style={{...s.viewCell, flex: 1}}><Text>Ocupacion</Text></View>
								<View style={{...s.viewCell, flex: 2}}><Text>20/35</Text></View>
							</View>
							<View style={s.tableRow}>
								<View style={{...s.viewCell, flex: 1}}><Text>Dirección</Text></View>
								<View style={{...s.viewCell, flex: 2}}>
									<Text>Avinguda d'Eduard Toldrà, 22A, 08800 Vilanova i la Geltrú, Barcelona</Text>
								</View>
							</View>
							<View style={{flexDirection: "row-reverse", marginTop:10}}>
								<Button mode="contained" style={{width: "50%"}}>
									Reservar
								</Button>
							</View>
						</Card.Content>
					</Card>
			</Background>
		);
	}
}

const s = StyleSheet.create({
	map:{
		width: "100%",
		height: 300,
	},
	viewCell:{ 
		alignItems: "flex-start",
		padding: 5
	},
	tableRow:{
		flexDirection: "row", 
		borderBottomColor: "lightgrey", 
		borderBottomWidth: 1
	}
});
	

