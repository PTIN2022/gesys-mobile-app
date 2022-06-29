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
import { addTickets } from '../state/actions/Tickets'
import { connect } from 'react-redux';


class TicketForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asunto: '',
            descripcion: '',
            disable: false,
            error: false,
            success: false
        };
    }

    componentDidMount() {
        if (this.props.Login.logged === false) {
            this.props.navigation.navigate('LogIn');
        }
    }

    componentDidUpdate() {

    }

    book = () => {
        // this.setState({disable: true})
        let data = {
            asunto: this.state.asunto,
            descripcion: this.state.descripcion,
        }
        console.log("aqui")
        console.log(this.props.Login.token)
        this.props.addTickets(data, this.props.Login.token);
        this.setState({ disable: false })
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'TicketsList' }],
        })
    }

    render() {
        return (
            <Background>
                <AppBack title="Nuevo ticket" backScreenName="TicketsList" />
                {this.props.Tickets.errorAddTicket === false ? <Text>Ticket enviado con éxito.</Text> : null}
                {this.props.Tickets.errorAddTicket ? <Text>Error al añadir el nuevo ticket.</Text> : null}

                <Card style={{ marginHorizontal: 5, padding: 20, backgroundColor: "#ffffffdd" }}>
                    <Header>Ingrese la infromación del ticket:</Header>
                    <View style={{ flexDirection: "column", marginVertical: 15 }}>
                        <TextInput
                            mode="outlined"
                            style={{ marginBottom: 10 }}
                            label="Asunto"
                            returnKeyType="next"
                            onChangeText={text => this.setState({ asunto: text })}
                            value={this.state.asunto}
                        />
                        <TextInput
                            mode="outlined"
                            style={{ marginBottom: 10, height: 130 }}
                            label="Descripcion"
                            returnKeyType="next"
                            onChangeText={text => this.setState({ descripcion: text })}
                            value={this.state.descripcion}
                        />
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Button style={{ width: "auto", }} mode="contained" onPress={() => this.book()} disabled={this.state.disable}>Enviar</Button>
                    </View>
                </Card>
            </Background>
        );
    }
}

const mapStateToProps = (data) => {
    const { Login, Tickets } = data;
    return { Login, Tickets };
};


const mapDispatchToProps = dispatch => {
    return {
        addTickets: (data, token) => dispatch(addTickets(data, token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);

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




