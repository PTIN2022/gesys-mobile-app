import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { theme } from '../core/theme'
import TextInput from '../components/TextInput'
import Header from '../components/Header'
import Button from '../components/Button'
import Background from '../components/Background'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { useState } from 'react'


export default function FormulariV({ navigation }) {

    return (
        <Background>
            <View>
                <Text style={styles.text} >Model:</Text>
                <TextInput
                    label="Model"
                    returnKeyType="next"
                //Usamos el helper para validar
                />
                <Text style={styles.text}>Matricula</Text>
                <TextInput
                    label="Matricula:"
                    returnKeyType="next"
                />
                <Text style={styles.space}></Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texts}> Acceptar</Text>
                </TouchableOpacity>


            </View></Background>
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

