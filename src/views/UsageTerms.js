import React, { Component, useState  } from 'react';
import {Card, Button, Avatar} from 'react-native-paper';
import {ScrollView,TouchableHighlight, StyleSheet, Image, Text, View } from 'react-native';
import AppBack from '../components/AppBack';
import Background from '../components/Background';
import { theme } from '../core/theme'
import * as ImagePicker from 'expo-image-picker';
import TextInput from '../components/TextInput';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function UsageTerms({ navigation }) {

	return (
		<Background>
			<AppBack title="Términos de uso"/>
			<ScrollView>
				<Card mode="elevated" style={{marginHorizontal: 10, backgorundColor: "#ffffffdd", borderRadius: 20}}>
					
					<Card.Content>
						<View>
							<View style={s.InfoContainer}>
								<Text style={s.header1}>Términos y Condiciones de Uso</Text>
							</View>
						</View>

						<View>
							<View style={s.InfoContainer}>
								<Text style={s.header2}>INFORMACIÓN RELEVANTE</Text>
								<Text style={s.Text}>Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los productos  que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña.</Text>
								<Text style={s.Text}>El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros productos. www.gesys.com no asume la responsabilidad en caso de que entregue dicha clave a terceros.</Text>
								<Text style={s.Text}>Todas las compras y transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un proceso de confirmación y verificación, el cual podría incluir la verificación del stock y disponibilidad de producto, validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.</Text>
								<Text style={s.Text}>Los precios de los productos ofrecidos en esta Tienda Online es válido solamente en las compras realizadas en este sitio web.</Text>
							</View>
						</View>

						<View>
							<View style={s.InfoContainer}>
								<Text style={s.header2}>LICENCIA</Text>
								<Text style={s.Text}>GeSys  a través de su sitio web concede una licencia para que los usuarios utilicen  los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.</Text>
							</View>
						</View>
					
						<View>
							<View style={s.InfoContainer}>
								<Text style={s.header2}>USO NO AUTORIZADO</Text>
								<Text style={s.Text}>En caso de que aplique (para venta de software, templetes, u otro producto de diseño y programación) usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, sitio web o ningún otro medio y ofrecerlos para la redistribución o la reventa de ningún tipo.</Text>
							</View>
						</View>

						<View>
							<View style={s.InfoContainer}>
								<Text style={s.header2}>PROPIEDAD</Text>
								<Text style={s.Text}>Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los productos son propiedad  de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan  sin ningún tipo de garantía, expresa o implícita. En ningún esta compañía será  responsables de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos.</Text>
							</View>
						</View>

						<View>
							<View style={s.InfoContainer}>
								<Text style={s.header2}>POLÍTICA DE REEMBOLSO Y GARANTÍA</Text>
								<Text style={s.Text}>En el caso de productos que sean  mercancías irrevocables no-tangibles, no realizamos reembolsos después de que se envíe el producto, usted tiene la responsabilidad de entender antes de comprarlo.  Le pedimos que lea cuidadosamente antes de comprarlo. Hacemos solamente excepciones con esta regla cuando la descripción no se ajusta al producto. Hay algunos productos que pudieran tener garantía y posibilidad de reembolso pero este será especificado al comprar el producto. En tales casos la garantía solo cubrirá fallas de fábrica y sólo se hará efectiva cuando el producto se haya usado correctamente. La garantía no cubre averías o daños ocasionados por uso indebido. Los términos de la garantía están asociados a fallas de fabricación y funcionamiento en condiciones normales de los productos y sólo se harán efectivos estos términos si el equipo ha sido usado correctamente. Esto incluye:</Text>
								<Text style={s.Text}>  - De acuerdo a las especificaciones técnicas indicadas para cada producto.</Text>
								<Text style={s.Text}>  - En condiciones ambientales acorde con las especificaciones indicadas por el fabricante.</Text>
								<Text style={s.Text}>  - En uso específico para la función con que fue diseñado de fábrica.</Text>
								<Text style={s.Text}>  - En condiciones de operación eléctricas acorde con las especificaciones y tolerancias indicadas.</Text>
							</View>
						</View>

						<View>
							<View style={s.InfoContainer}>
								<Text style={s.header2}>COMPROBACIÓN ANTIFRAUDE</Text>
								<Text style={s.Text}>La compra del cliente puede ser aplazada para la comprobación antifraude. También puede ser suspendida por más tiempo para una investigación más rigurosa, para evitar transacciones fraudulentas.</Text>
							</View>
						</View>

						<View>
							<View style={s.InfoContainer}>
								<Text style={s.header2}>PRIVACIDAD</Text>
								<Text style={s.Text}>www.gesys.com garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Los datos ingresados por usuario o en el caso de requerir una validación de los pedidos no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales.</Text>
								<Text style={s.Text}>La suscripción a boletines de correos electrónicos publicitarios es voluntaria y podría ser seleccionada al momento de crear su cuenta.</Text>
								<Text style={s.Text}>GeSys reserva los derechos de cambiar o de modificar estos términos sin previo aviso.</Text>
							</View>
						</View>

					</Card.Content>
				</Card>
			</ScrollView>
		</Background>
	)
}

const s = StyleSheet.create({
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
		marginBottom:25,
	  },

	  header2: {
		fontSize: 19,
		color: theme.colors.primary,
		fontWeight: 'bold',
		marginBottom:20
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
		marginBottom:10, 
		textAlign: 'justify',
		lineHeight: 20,
	}
});
	

