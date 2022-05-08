import React, { Component, useState } from 'react';
import { Card, Button, Avatar } from 'react-native-paper';
import { ScrollView, TouchableHighlight, StyleSheet, Image, Text, View } from 'react-native';
import AppBack from '../components/AppBack';
import Background from '../components/Background';
import { theme } from '../core/theme'
import * as ImagePicker from 'expo-image-picker';
import TextInput from '../components/TextInput'





class ModifyProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: null,
			setImage: null,

		};
	}

	componentDidMount() {
		console.log('ModifyProfile')
	}
	componentDidUpdate() {
		console.log('ModifyProfile')
	}

	render() {

		const chooseImg = async () => {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				aspect: [1, 1],
				quality: 1,
				allowsEditing: true,
			});

			console.log(result);

			if (!result.cancelled) {
				setImage(result.uri);
				console.log(result.uri);
			}
		};


		const goback = () => {
			this.props.navigation.navigate('Profile');
		};






		return (
			<Background>
				<AppBack title="Perfil del usuario" backScreenName="Profile" />
				<ScrollView>
					<Card mode="elevated" style={{ marginHorizontal: 10, backgorundColor: "#ffffffdd", borderRadius: 20 }}>

						<Card.Content>
							<View style={s.avatarContainer}>
								<TouchableHighlight style={{ borderRadius: 75 }} onPress={chooseImg}>
									<Avatar.Image size={140} onPress={chooseImg} style={{ borderRadius: 75 }} source={this.state.image ? { uri: this.state.image } : require('../assets/avatar.png')} />
								</TouchableHighlight>
							</View>

							<View style={s.InfoContainer}>
								<Text style={s.header}>Nombre</Text>
								<TextInput
									label="Nombre"
									returnKeyType="next"
									value="test name"
									autoCapitalize="none"
								//onChangeText={(text) => setEmail({ value: text, error: '' })}
								//error={!!email.error}
								//errorText={email.error}
								/>
							</View>
							<View style={s.Separator} />

							<View style={s.InfoContainer}>
								<Text style={s.header}>Apellidos</Text>
								<TextInput
									label="Apellidos"
									returnKeyType="next"
									value="test apellidos"
									autoCapitalize="none"
								//onChangeText={(text) => setEmail({ value: text, error: '' })}
								//error={!!email.error}
								//errorText={email.error}
								/>
							</View>
							<View style={s.Separator} />

							<View style={s.InfoContainer}>
								<Text style={s.header}>DNI</Text>
								<Text style={s.Data}>  49275981H</Text>
							</View>
							<View style={s.Separator} />

							<View style={s.InfoContainer}>
								<Text style={s.header}>Teléfono</Text>
								<TextInput
									label="Teléfono"
									returnKeyType="next"
									value="test teléfono"
									//onChangeText={(text) => setEmail({ value: text, error: '' })}
									//error={!!email.error}
									//errorText={email.error}
									autoCapitalize="none"
									autoCompleteType="email"
									keyboardType="phone-pad"
								/>
							</View>
							<View style={s.Separator} />

							<View style={s.InfoContainer}>
								<Text style={s.header}>Correo electrónico</Text>
								<TextInput
									label="Email"
									returnKeyType="next"
									value="test email"
									//onChangeText={(text) => setEmail({ value: text, error: '' })}
									//error={!!email.error}
									//errorText={email.error}
									autoCapitalize="none"
									autoCompleteType="email"
									textContentType="emailAddress"
									keyboardType="email-address"
								/>
							</View>
							<View style={s.Separator} />

							<View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30, marginBottom: 20 }}>
								<Button onPress={chooseImg} style={{ width: "auto", backgroundColor: "red", marginright: 20 }} mode="contained">Cancelar</Button>
								<Button onPress={goback} style={{ width: "auto", backgroundColor: "green", marginLeft: 20 }} mode="contained">Aceptar</Button>
							</View>
						</Card.Content>
					</Card>
				</ScrollView>
			</Background>
		);
	}
}

export default ModifyProfile;


/*

export default function ModifyProfile({ navigation }) {

	const [image, setImage] = useState(null);

	const chooseImg = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			aspect: [1, 1],
			quality: 1,
			allowsEditing: true,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
			console.log(result.uri);
		}
	};

	return (
		<Background>
			<AppBack title="Perfil del usuario" />
			<ScrollView>
				<Card mode="elevated" style={{ marginHorizontal: 10, backgorundColor: "#ffffffdd", borderRadius: 20 }}>

					<Card.Content>
						<View style={s.avatarContainer}>
							<TouchableHighlight style={{ borderRadius: 75 }} onPress={chooseImg}>
								<Avatar.Image size={140} onPress={chooseImg} style={{ borderRadius: 75 }} source={image ? { uri: image } : require('../assets/avatar.png')} />
							</TouchableHighlight>
						</View>

						<View style={s.InfoContainer}>
							<Text style={s.header}>Nombre</Text>
							<TextInput
								label="Nombre"
								returnKeyType="next"
								value="test name"
								autoCapitalize="none"
							//onChangeText={(text) => setEmail({ value: text, error: '' })}
							//error={!!email.error}
							//errorText={email.error}
							/>
						</View>
						<View style={s.Separator} />

						<View style={s.InfoContainer}>
							<Text style={s.header}>Apellidos</Text>
							<TextInput
								label="Apellidos"
								returnKeyType="next"
								value="test apellidos"
								autoCapitalize="none"
							//onChangeText={(text) => setEmail({ value: text, error: '' })}
							//error={!!email.error}
							//errorText={email.error}
							/>
						</View>
						<View style={s.Separator} />

						<View style={s.InfoContainer}>
							<Text style={s.header}>DNI</Text>
							<Text style={s.Data}>  49275981H</Text>
						</View>
						<View style={s.Separator} />

						<View style={s.InfoContainer}>
							<Text style={s.header}>Teléfono</Text>
							<TextInput
								label="Teléfono"
								returnKeyType="next"
								value="test teléfono"
								//onChangeText={(text) => setEmail({ value: text, error: '' })}
								//error={!!email.error}
								//errorText={email.error}
								autoCapitalize="none"
								autoCompleteType="email"
								keyboardType="phone-pad"
							/>
						</View>
						<View style={s.Separator} />

						<View style={s.InfoContainer}>
							<Text style={s.header}>Correo electrónico</Text>
							<TextInput
								label="Email"
								returnKeyType="next"
								value="test email"
								//onChangeText={(text) => setEmail({ value: text, error: '' })}
								//error={!!email.error}
								//errorText={email.error}
								autoCapitalize="none"
								autoCompleteType="email"
								textContentType="emailAddress"
								keyboardType="email-address"
							/>
						</View>
						<View style={s.Separator} />

						<View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30, marginBottom: 20 }}>
							<Button onPress={chooseImg} style={{ width: "auto", backgroundColor: "red", marginright: 20 }} mode="contained">Cancelar</Button>
							<Button onPress={chooseImg} style={{ width: "auto", backgroundColor: "green", marginLeft: 20 }} mode="contained">Aceptar</Button>
						</View>
					</Card.Content>
				</Card>
			</ScrollView>
		</Background>
	)
}
*/
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
		marginBottom: 10,
		marginTop: 10,
	},
});


