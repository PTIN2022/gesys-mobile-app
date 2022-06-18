import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Success (props) {
    //El header es parte del layout de la app.
    //Esta compuesto por dos botones (control de sidebar y notificaciones) y un output
    //del usuario autenticado.
    return (
        <View style={s.header}>
            <Text style={s.headerText}>{props.text}</Text>
        </View>            
    );
    
}


const s = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        alignItems: "center",
        backgroundColor: "green",
        width: "100%",
        justifyContent: 'center',
        height: 30,
    },
    headerText: {
		fontSize: 15,
		color: "#ffffff",
		fontWeight: 'bold',
        justifyContent: 'center',
        color: 'white',
	},

});
