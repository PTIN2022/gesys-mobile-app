import React, { Component } from 'react';
import { Card, Button, Avatar } from 'react-native-paper';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import AppBack from '../components/AppBack';
import Background from '../components/Background';
import { theme } from '../core/theme'





class Error extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log('Error')
	}
	componentDidUpdate() {
		console.log('Error')
	}

	render() {
		return (
			<Background>
				<AppBack title="Error" backScreenName="Stations" />
				<Card mode="elevated" style={{ marginHorizontal: 10, backgorundColor: "#ffffffdd", borderRadius: 20, marginTop: 130}}>

					<Card.Content>
						<View style={s.avatarContainer}>
							<Image source={require('../assets/Error.png')} style={StyleSheet.image} />
						</View>

						<View style={s.InfoContainer}>
								<Text style={s.header}>¡UPS! ¡Parece que este no es el cargador que estabas buscando!</Text>
						</View>

					</Card.Content>
				</Card>
			</Background>

		);
	}
}

export default Error;



const s = StyleSheet.create({
	avatarContainer: {
        alignItems:'center',
        justifyContent:'center',
		marginTop: 15,
		marginBottom: 15,
		
	},
	InfoContainer: {
		alignItems: "center",
		marginTop: 25,
		marginBottom: 15,
	},
	header: {
		fontSize: 20,
		alignItems: "center",
		justifyContent: "center",
		color: theme.colors.primary,
		fontWeight: 'bold',
		textAlign: 'justify',
	},
});


