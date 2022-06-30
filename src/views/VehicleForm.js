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
import Error from '../components/Error'
import Success from '../components/Success'

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
		if(this.props.Authlogged === false){
			this.props.navigation.navigate('LogIn');
		}
    }

    componentDidUpdate() {

    }

    addVehicle = () => {
        // if(this.state.nombre === "") this.setState({nombreError: true})
        // if(this.state.marca === "") this.setState({marcaError: true})
        if(this.state.modelo === "") this.setState({modeloError: true})
        if(this.state.matricula === "") this.setState({matriculaError: true})
        if(this.state.modelo !== "" && this.state.matricula !== "") {

            // this.setState({disable: true})
            let data = {
                modelo: this.state.modelo,
                matricula: this.state.matricula,
                //client_id: this.props.Authclient_id
                porcentaje_bat: 100,
            }
            this.props.addVehicle(data, this.props.Authtoken, (success) => {
                if(success) this.setState({success: true, modelo: "", matricula: "", nombre: "", marca: ""})
                else this.setState({error: true})
            });
            this.setState({disable: false})
        }

    }

    render() {
        return (
            <Background>
                <AppBack title="Nuevo vehiculo" backScreenName="VehiclesList" />
                {this.state.success ? <Success text={"Vehículo añadido."} /> : null}
                {this.state.error ?  <Error text={"Error al añadir el vehículo."} /> : null}

                <Card style={{ marginHorizontal: 5, padding: 20, backgroundColor: "#ffffffdd" }}>
                    <Header>Ingrese los datos del nuevo vehiculo:</Header>
                    <View style={{ flexDirection: "column", marginVertical: 15 }}>
                        <TextInput
                            mode="outlined"
                            style={{ marginBottom: 10 }}
                            label="Nombre"
                            returnKeyType="next"
                            onChangeText={text => this.setState({nombre: text, nombreError: false})}
                            value={this.state.nombre}
                            error={this.state.nombreError}
                        />
                        <TextInput
                            mode="outlined"
                            style={{ marginBottom: 10 }}
                            label="Marca"
                            returnKeyType="next"
                            onChangeText={text => this.setState({marca: text, marcaError: false})}
                            value={this.state.marca}
                            error={this.state.marcaError}
                        />
                        <TextInput
                            mode="outlined"
                            style={{ marginBottom: 10 }}
                            label="Modelo"
                            returnKeyType="next"
                            onChangeText={text => this.setState({modelo: text, modeloError: false})}
                            value={this.state.modelo}
                            error={this.state.modeloError}
                        />
                        <TextInput
                            mode="outlined"
                            label="Matricula"
                            returnKeyType="next"
                            onChangeText={text => this.setState({matricula: text, matriculaError: false})}
                            value={this.state.matricula}
                            error={this.state.matriculaError}
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
    const { Auth, Vehiculos } = data;
    return { Auth, Vehiculos };
};


const mapDispatchToProps = dispatch => {
    return {
        addVehicle: (data, token, fn) => dispatch(addVehicle(data, token, fn)),
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

