import React, { Component, useState } from 'react';
import { Card, Button, Avatar } from 'react-native-paper';
import { ScrollView, TouchableHighlight, StyleSheet, Image, Text, View } from 'react-native';
import AppBack from '../components/AppBack';
import Background from '../components/Background';
import { theme } from '../core/theme'
import * as ImagePicker from 'expo-image-picker';
import TextInput from '../components/TextInput';
import Icon from 'react-native-vector-icons/FontAwesome';


class About extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log('About')
	}
	componentDidUpdate() {
		console.log('About')
	}

	render() {
		return (

			<Background>
				<AppBack title="Información" backScreenName="Stations" />
				<ScrollView>
					<Card mode="elevated" style={{ marginHorizontal: 10, backgorundColor: "#ffffffdd", borderRadius: 20 }}>

						<Card.Content>

							<View>
								<View style={s.InfoContainer}>
									<Text style={s.header}>Versión</Text>
									<Text style={s.Data}>   0.1.9</Text>
								</View>
								<View style={s.Separator} />
							</View>

							<TouchableHighlight underlayColor={"grey"} style={{ borderRadius: 10 }} onPress={() => this.props.navigation.navigate('PrivacyPolicy')}>
								<View>
									<View style={s.InfoContainer}>
										<View style={s.row}>
											<Text style={s.header}>Política de privacidad</Text>
											<Text style={s.Symbol}>                        ❯</Text>
										</View>
									</View>
									<View style={s.Separator} />
								</View>
							</TouchableHighlight>

							<TouchableHighlight underlayColor={"grey"} style={{ borderRadius: 10 }} onPress={() => this.props.navigation.navigate('UsageTerms')}>
								<View>
									<View style={s.InfoContainer}>
										<View style={s.row}>
											<Text style={s.header}>Terminos de uso</Text>
											<Text style={s.Symbol}>                                 ❯</Text>
										</View>
									</View>
									<View style={s.Separator} />
								</View>
							</TouchableHighlight>

						</Card.Content>
					</Card>
				</ScrollView>
			</Background>
		);
	}
}

export default About;




const s = StyleSheet.create({
	viewCell: {
		alignItems: "flex-start",
		padding: 5
	},
	tableRow: {
		flexDirection: "row",
		borderBottomColor: "lightgrey",
		borderBottomWidth: 1
	},
	avatarContainer: {
		alignItems: "center",
		marginTop: 15,
		marginBottom: 15,
	},
	InfoContainer: {
		alignItems: "flex-start",
		marginTop: 25,
		marginBottom: 15,
	},
	Separator: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		opacity: 0.2,
	},
	header: {
		fontSize: 20,
		color: theme.colors.primary,
		fontWeight: 'bold',
		marginBottom: 10
	},
	row: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	Symbol: {
		fontSize: 20,
		color: theme.colors.primary,
		fontWeight: 'bold',
	},
	Data: {
		fontSize: 18,
		color: theme.colors.text,
		fontWeight: 'bold',
		marginBottom: 10,
	}
});


