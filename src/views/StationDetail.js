import React from 'react';
import { Card, Button } from 'react-native-paper';
import MapView, { Marker, LatLng } from 'react-native-maps'
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import Header from "../components/Header";
import AppBack from '../components/AppBack';
import Background from '../components/Background';
import { connect } from 'react-redux';
import { fetchEstacion } from '../state/actions/Estacion'
class StationDetail extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchEstacion(1)
	}

	componentDidUpdate() {
		console.log('StationDetail')
	}

	render() {
		return !this.props.successEstacion ?
			(<Text>Sin datos</Text>)
			: (
				<Background>
					<AppBack title={`Detalle de la estacion ${this.props.estacion.id}`} backScreenName="Stations" />
					<Card mode="elevated" style={{ marginHorizontal: 10, backgorundColor: "#ffffffdd" }}>
						<MapView
							style={s.map}
							initialRegion={{
								latitude: this.props.estacion.latitud,
								longitude: this.props.estacion.longitud,
								latitudeDelta: 0.02,
								longitudeDelta: 0.02,
							}}
						>
							<Marker
								coordinate={{
									latitude: this.props.estacion.latitud,
									longitude: this.props.estacion.longitud
								}}
							>
								<Image
									source={require('../assets/icons8-charging-station-96.png')}
									style={{ width: 50, height: 50 }}
									resizeMode="contain"
								/>
							</Marker>
						</MapView>
						<Card.Content>

							<View style={{ margin: 10 }}>
								<Header>{this.props.estacion.estacion}</Header>
							</View>
							<View style={s.tableRow}>
								<View style={{ ...s.viewCell, flex: 1 }}><Text>Puntuación</Text></View>
								<View style={{ ...s.viewCell, flex: 2 }}>
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
								<View style={{ ...s.viewCell, flex: 1 }}><Text>Horario</Text></View>
								<View style={{ ...s.viewCell, flex: 2 }}>
									<Text>Lun-Dom, 06:00-02:00 </Text>
								</View>
							</View>
							<View style={s.tableRow} >
								<View style={{ ...s.viewCell, flex: 1 }}><Text>Teléfono</Text></View>
								<View style={{ ...s.viewCell, flex: 2 }}>
									<Text>+43 967 33 22 00</Text>
								</View>
							</View>
							<View style={s.tableRow} >
								<View style={{ ...s.viewCell, flex: 1 }}><Text>Ocupacion</Text></View>
								<View style={{ ...s.viewCell, flex: 2 }}><Text>{`${this.props.estacion.ocupation_now}/${this.props.estacion.ocupation_max}`}</Text></View>
							</View>
							<View style={s.tableRow}>
								<View style={{ ...s.viewCell, flex: 1 }}><Text>Dirección</Text></View>
								<View style={{ ...s.viewCell, flex: 2 }}>
									<Text>{this.props.estacion.direccion}</Text>
								</View>
							</View>
							<View style={{ flexDirection: "row-reverse", marginTop: 10 }}>
								<Button mode="contained" style={{ width: "50%" }}>
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
	map: {
		width: "100%",
		height: 300,
	},
	viewCell: {
		alignItems: "flex-start",
		padding: 5
	},
	tableRow: {
		flexDirection: "row",
		borderBottomColor: "lightgrey",
		borderBottomWidth: 1
	}
});

// Cargamos los datos que tenemos en el store.
const mapStateToProps = ({ Estacion }) => {
	const { estacion, successEstacion } = Estacion;
	return { estacion, successEstacion };
};

const mapDispatchToProps = dispatch => {
	return {
		fetchEstacion: id => dispatch(fetchEstacion(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StationDetail);