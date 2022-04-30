import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Button, TextInput} from "react-native-paper"
import { theme } from '../core/theme'
import AppBack from '../components/AppBack'
import Header from '../components/Header'
import Background from '../components/Background'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { useState } from 'react'



export default function FormulariV({ navigation }) {

    return (
        
            <Background>
                <AppBack title="Nuevo vehiculo" backScreenName="VehiclesList"/>
                
                <Card style={{marginHorizontal:5 , padding: 20, backgroundColor: "#ffffffdd"}}>
                    <Header>Ingrese los datos del nuevo vehiculo:</Header>
                    <View style={{flexDirection: "column", marginVertical: 15}}>
                        <TextInput
                            mode="outlined"
                            style={{marginBottom:10}}
                            label="Nombre"
                            returnKeyType="next"
                        />
                        <TextInput
                            mode="outlined"
                            style={{marginBottom:10}}
                            label="Marca"
                            returnKeyType="next"
                        />
                        <TextInput
                            mode="outlined"
                            style={{marginBottom:10}}
                            label="Modelo"
                            returnKeyType="next"
                        />
                        <TextInput
                            mode="outlined"
                            label="Matricula"
                            returnKeyType="next"
                        />
                    </View>
                    
                    <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                        <Button style={{width: "auto", }} mode="contained">Crear vehiculo</Button>
                    </View>
                </Card>
            </Background>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        width: 200,
        marginHorizontal: 20,
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: 10,
        marginTop: 20

    },
    but: {
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: '50%',
        backgroundColor: '#0e3bac',
    },
    space: {
        marginBottom: 30
    },
    texts: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 26,
        alignSelf: 'center',
        color: '#ffff'
    },
})

