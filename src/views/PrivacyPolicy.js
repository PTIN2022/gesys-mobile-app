import React, { Component, useState } from 'react';
import { Card, Button, Avatar } from 'react-native-paper';
import { ScrollView, TouchableHighlight, StyleSheet, Image, Text, View } from 'react-native';
import AppBack from '../components/AppBack';
import Background from '../components/Background';
import { theme } from '../core/theme'
import * as ImagePicker from 'expo-image-picker';
import TextInput from '../components/TextInput';
import Icon from 'react-native-vector-icons/FontAwesome';


class PrivacyPolicy extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
	}
	componentDidUpdate() {
	}

	render() {
		return (
			<Background>
				<AppBack title="Política de privacidad" backScreenName="About" />
				<ScrollView>
					<Card mode="elevated" style={{ marginHorizontal: 10, backgorundColor: "#ffffffdd", borderRadius: 20 }}>

						<Card.Content>
							<View>
								<View style={s.InfoContainer}>
									<Text style={s.header1}>POLÍTICA DE PRIVACIDAD</Text>
									<Text style={s.Text}>El presente Política de Privacidad establece los términos en que GeSys usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</Text>
								</View>
							</View>

							<View>
								<View style={s.InfoContainer}>
									<Text style={s.header2}>Información que es recogida</Text>
									<Text style={s.Text}>Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,  información de contacto como  su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.</Text>
								</View>
							</View>

							<View>
								<View style={s.InfoContainer}>
									<Text style={s.header2}>Uso de la información recogida</Text>
									<Text style={s.Text}>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.  Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.</Text>
									<Text style={s.Text}>GeSys está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.</Text>
								</View>
							</View>

							<View>
								<View style={s.InfoContainer}>
									<Text style={s.header2}>Cookies</Text>
									<Text style={s.Text}>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.</Text>
									<Text style={s.Text}>Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente . Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.</Text>
								</View>
							</View>

							<View>
								<View style={s.InfoContainer}>
									<Text style={s.header2}>Enlaces a terceros</Text>
									<Text style={s.Text}>Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.</Text>
								</View>
							</View>

							<View>
								<View style={s.InfoContainer}>
									<Text style={s.header2}>Control de su información personal</Text>
									<Text style={s.Text}>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.  Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico.  En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.</Text>
									<Text style={s.Text}>Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</Text>
									<Text style={s.Text}>GeSys Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.</Text>

								</View>
							</View>

						</Card.Content>
					</Card>
				</ScrollView>
			</Background>

		);
	}
}

export default PrivacyPolicy;




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
		marginBottom: 5,
	},
	Separator: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		opacity: 0.2,
	},
	header1: {
		fontSize: 22,
		color: theme.colors.primary,
		fontWeight: 'bold',
		marginBottom: 25,
	},

	header2: {
		fontSize: 19,
		color: theme.colors.primary,
		fontWeight: 'bold',
		marginBottom: 20
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
	Text: {
		fontSize: 16,
		color: theme.colors.text,
		marginBottom: 10,
		textAlign: 'justify',
		lineHeight: 20,
	}
});


