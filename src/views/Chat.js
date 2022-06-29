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
import { addChat } from '../state/actions/Chat'
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import MensajeCard from '../components/MensajeCard'
import { fetchChat, fetchChatApi, setChatState } from '../state/actions/Chat'





class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensaje: []
        };
    }

    async componentDidMount() {
        const res = await fetchChatApi(this.props.Login.token, this.props.Login.cliente.id_usuari, this.props.route.params.id);
        setChatState(res)
        console.log("MENSAJES")
        this.setState({ mensaje: res.Mensajes });
        console.log(this.state.mensaje)
    }

    componentDidUpdate() {
        if (this.props.Login.logged === false) {
            this.props.navigation.navigate('LogIn');
        }
    }



    book = (id) => {
        // this.setState({disable: true})
        let data = {
            mensaje: this.state.mensaj,
        }
        this.props.addChat(this.props.route.params.id, data, this.props.Login.token,);
        this.setState({ disable: false })
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'TicketsList' }],
        })
    }

    render() {
        return (
            <Background>
                <AppBack title="Chat" backScreenName="TicketsList" />
                <ScrollView style={{ flex: 1, marginRight: 10, marginLeft: 10 }}>
                    {this.state.mensaje && this.state.mensaje.map((item) => (
                        // Iteramos las estaciones que tenemos cargadas en el store.
                        //AQUI TETE AQUI
                        <View key={item.id_mensaje}>
                            <MensajeCard
                                contenido={item.contenido}
                                date={item.date}
                                id_usuari={item.id_usuari}
                                id_client={this.props.Login.cliente.id_usuari}

                            />
                        </View>
                    ))}
                </ScrollView>

                <View style={{ flexDirection: "row", marginVertical: 15, flex: 0.2, marginBottom: 5, alignItems: 'flex-end' }}>
                    <TextInput
                        mode="outlined"
                        style={{ marginBottom: 10, flex: 1, marginLeft: 10 }}
                        returnKeyType="next"
                        onChangeText={text => this.setState({ mensaj: text })}
                        value={this.state.descripcion}
                    />
                    <Button style={{ width: "auto", flex: 0.05, height: 35, borderRadius: 20, marginBottom: 20, marginRight: 10, marginLeft: 5, width: 20, fontSize: 3 }} mode="contained" onPress={() => this.book(this.props.route.params.id)}>Send</Button>

                </View>

                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                </View>
            </Background>
        );
    }
}

const mapStateToProps = (data, Mensajes) => {
    const { mensajes, errorChat } = Mensajes;
    const { Login } = data;
    return { mensajes, Login, errorChat };
};


const mapDispatchToProps = dispatch => {
    return {
        fetchChat: (token, client, id_ticket) => dispatch(fetchChat(token, client, id_ticket)),
        setChatState: (mensajes) => dispatch(setChatState(mensajes)),

        addChat: (id_ticket, data, token) => dispatch(addChat(id_ticket, data, token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

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




