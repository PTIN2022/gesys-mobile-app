import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'
import icon from '../assets/logo.png'
import { Feather } from '@expo/vector-icons';
import FormulariV from './FormulariV';
import { NavigationContainer, StackActions, createStackNavigator } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../core/theme'
import TextInput from '../components/TextInput'
import Header from '../components/Header'
import Button from '../components/Button'


export default function ListaVAUX({ item }) {

    const { Matricula, Model, Foto } = item
    return (

        <View style={styles.container}>

            <Image
                source={icon}
                style={styles.image}
            />
            <View style={styles.mini}>
                <Text style={styles.Models}>   {Model}</Text>
                <Text style={styles.Matricules}>     Matricula: {Matricula}</Text>

            </View>
            <View style={styles.icon}>
                <Feather name='edit' size={28} color={'#0e3bac'} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        padding: 20,
        flexDirection: 'row',
        borderRadius: 10,
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        //marginBottom: 10,
    },
    mini: {
        flexDirection: 'column',
    },
    Models: {
        fontSize: 22
    },
    image: { height: 60, width: 70, },

    Matricules: {
        fontSize: 13
    },
    but: { display: 'flex', justifyContent: 'flex-start', position: 'absolute' },

    icon: {
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
        right: -10,
    }
})

