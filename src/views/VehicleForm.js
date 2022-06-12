import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Card, Button, TextInput } from "react-native-paper"
import { theme } from '../core/theme'
import AppBack from '../components/AppBack'
import Header from '../components/Header'
import Background from '../components/Background'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { useState } from 'react'
import { addVehicle } from '../state/actions/Vehicles'
import { connect } from 'react-redux';


class VehicleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            marca: "",
            modelo: "",
            matricula: "",
            disable: false,
            error: false,
            success: false
        };
    }

    componentDidMount() {
		if(this.props.Login.logged === false){
			this.props.navigation.navigate('LogIn');
		}
    }

    componentDidUpdate() {

    }

    addVehicle = () => {
        // this.setState({disable: true})
        let data = {
            nombre: this.state.nombre,
            marca: this.state.marca,
            modelo: this.state.modelo,
            matricula: this.state.matricula,
        }
        this.props.addVehicle(data);
        this.setState({disable: false})
    }

    render() {
        return (
            <Background>
                <AppBack title="Nuevo vehiculo" backScreenName="VehiclesList" />
                {this.props.Vehiculos.errorAddVehicle === false ? <Text>Vehículo añadido con éxito.</Text> : null}
                {this.props.Vehiculos.errorAddVehicle ? <Text>Error al añadir el vehículo.</Text> : null}
                
                <Card style={{ marginHorizontal: 5, padding: 20, backgroundColor: "#ffffffdd" }}>
                    <Header>Ingrese los datos del nuevo vehiculo:</Header>
                    <View style={{ flexDirection: "column", marginVertical: 15 }}>
                        <TextInput
                            mode="outlined"
                            style={{ marginBottom: 10 }}
                            label="Nombre"
                            returnKeyType="next"
                            onChangeText={text => this.setState({nombre: text})}
                            value={this.state.nombre}
                        />
                        <TextInput
                            mode="outlined"
                            style={{ marginBottom: 10 }}
                            label="Marca"
                            returnKeyType="next"
                            onChangeText={text => this.setState({marca: text})}
                            value={this.state.marca}
                        />
                        <TextInput
                            mode="outlined"
                            style={{ marginBottom: 10 }}
                            label="Modelo"
                            returnKeyType="next"
                            onChangeText={text => this.setState({modelo: text})}
                            value={this.state.modelo}
                        />
                        <TextInput
                            mode="outlined"
                            label="Matricula"
                            returnKeyType="next"
                            onChangeText={text => this.setState({matricula: text})}
                            value={this.state.matricula}
                        />
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Button style={{ width: "auto", }} mode="contained" onPress={() => this.addVehicle()} disabled={this.state.disable}>Crear vehiculo</Button>
                    </View>
                </Card>
            </Background>
        );
    }
}

const mapStateToProps = (data) => {
    const { Login, Vehiculos } = data;
    return { Login, Vehiculos };
};


const mapDispatchToProps = dispatch => {
    return {
        addVehicle: (data) => dispatch(addVehicle(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleForm);

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

