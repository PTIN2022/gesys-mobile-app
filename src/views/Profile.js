import React, { Component } from 'react';
import {Card, Button, Avatar} from 'react-native-paper';
import {ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import AppBack from '../components/AppBack';
import Background from '../components/Background';
import { theme } from '../core/theme'


export default function ModifyProfile({ navigation }) {

	return (
		<Background>
			<AppBack title="Perfil del usuario"/>
			<ScrollView>
				<Card mode="elevated" style={{marginHorizontal: 10, backgorundColor: "#ffffffdd", borderRadius: 20}}>
					
					<Card.Content>
						<View style={s.avatarContainer}>
							<Avatar.Image size={140} source={require('../assets/avatar.png')} />
						</View>

						<View style={{flexDirection: "row", justifyContent: "center"}}>
							<Button onPress={() => navigation.navigate('ModifyProfile')} style={{width: "auto", }} mode="contained">Editar perfil</Button>
						</View>

						<View style={s.InfoContainer}>
							<Text style={s.header}>Nombre</Text>
							<Text style={s.Data}>  Mercedes</Text>
						</View>
						<View style={s.Separator}/>

						<View style={s.InfoContainer}>
							<Text style={s.header}>Apellidos</Text>
							<Text style={s.Data}>  Carrilo Moreno</Text>
						</View>
						<View style={s.Separator}/>

						<View style={s.InfoContainer}>
							<Text style={s.header}>DNI</Text>
							<Text style={s.Data}>  49275981H</Text>
						</View>
						<View style={s.Separator}/>

						<View style={s.InfoContainer}>
							<Text style={s.header}>Teléfono</Text>
							<Text style={s.Data}>  +34 658 823 081</Text>
						</View>
						<View style={s.Separator}/>

						<View style={s.InfoContainer}>
							<Text style={s.header}>Correo electrónico</Text>
							<Text style={s.Data}>  mcarrillo@gmail.com</Text>
						</View>
						<View style={s.Separator}/>

						<View style={{flexDirection: "row", justifyContent: "center", marginTop: 30, marginBottom:20}}>
							<Button onPress={() => navigation.navigate('Password')} style={{width: "auto", }} mode="contained">Cambiar contraseña</Button>
						</View>
					</Card.Content>
				</Card>
			</ScrollView>
		</Background>
	)
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
		fontWeight: 'bold'
	  },
	Data: {
		fontSize: 18,
		color: theme.colors.text,
		fontWeight: 'bold',
		marginBottom:10,
		marginTop:10,
	},
});
	

