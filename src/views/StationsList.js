import { Image, View, StyleSheet, Text } from 'react-native'
import StationCard from '../components/StationCard'
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Button, Paragraph, Dialog, Portal, Snackbar, Divider, Card, TextInput } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { addBooking, addStation } from '../state/actions';
import Background from '../components/Background';
import AppBack from '../components/AppBack';
import Header from '../components/Header'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {fetchEstaciones} from '../state/actions/Estaciones'
import { fetchReservas } from '../state/actions/Reservas'


const API = "http://craaxkvm.epsevg.upc.es:23601/api";

class StationsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false, // Estado
            loading: false, // Estad0
            snackBar: false, // Mostrar o no el snackbar?
            bookingSuccess: false, // En caso de éxito para el snackbar
            bookingError: false, // En caso de error para el snackbar
            selected: { // Guardamos un objeto con lo que enviaremos a la API
                station: null,
                stationName: '',
                from: new Date(),
                upto: new Date(),
                date: new Date(),
            },
            showTimeFrom: false, // estados booleanos para mostrar o no el selector de hora
            showTimeUpto: false,
            showCalendar: false,
            data: null,
            myLocation: {
                longitude: null,
                latuitude: null,
            },
        }

    }
   
    componentDidMount() {
        this.props.fetchEstaciones()
    }
 


    //Per Completar
    componentDidUpdate() {
    }

    // Función que setea el estado para mostrar el formulario de hacer la reserva
    toggleDialog = (id, name) => {
        this.setState(prev => ({
            visible: true,
            selected: {
                ...prev.selected,
                station: id,
                stationName: name,
            }}))
    }

    book = (idStation, nameStation) => {
        this.setState({ loading: true })

        // Just a simulation. It would really be a API call.
        setTimeout(() => {
            this.setState({ loading: false, visible: false, bookingSuccess: true })
        }, 2000);

        //this.props.addBooking({id: idStation, name: nameStation});
        // this.props.addBooking({
        //     id: idStation,
        //     name: nameStation,
        //     date: Date(),
        //     status: 'Activa',
        // })
    }

    // Establecemos la hora de reserva "desde"
    setTimeFrom = (e, d) => {
        if (d !== undefined) {
            this.setState(prev => ({
                showTimeFrom: false,
                selected: {
                    ...prev.selected,
                    from: String(d.getHours() + ":" + d.getMinutes())
                }
            }))
        }
    }

    // Establecemos la hora de reserva "hasta"
    setTimeUpto = (e, d) => {
        if (d !== undefined) {
            this.setState(prev => ({
                showTimeUpto: false,
                selected: {
                    ...prev.selected,
                    upto: String(d.getHours() + ":" + d.getMinutes())
                }
            }))
        }
    }

    // Establecemos el dia de la reserva
    setDate = (e, d) => {
        if (d !== undefined) {
            this.setState(prev => ({
                showCalendar: false,
                selected: {
                    ...prev.selected,
                    date: String(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear())
                }
            }))
        }
    }

    // Para pintar por pantalla.
    render() {
        return !this.props.successEstaciones ?
            (<Text>Sin datos</Text>)
            : (
                <Background>
                    <AppBack title="Lista de estaciones" backScreenName="Stations" />
                    {this.props.currentLocation.latitude !== null && this.props.currentLocation.longitude !== null ? 
                        <Text>Tus coordenadas: {this.props.currentLocation.longitude}, {this.props.currentLocation.latitude}</Text>
                        :
                        null
                    }
                    {this.props.estaciones.map((item) => {
                        // Iteramos las estaciones que tenemos cargadas en el store.
                        return (
                            <View key={item.id_estacion}>
                                <StationCard
                                    id={item.id}
                                    estacion={item.nombre_est}
                                    ocupation_max={item.ocupation_max}
                                    ocupation_now={item.ocupation_now}
                                    longitude={item.longitud}
                                    latitude={item.latitud}
                                    direccion={item.direccion}
                                    key={item.id}
                                    openModal={this.toggleDialog}
                                />
                            </View>
                        );
                    })}
                    <Portal>
                        <Dialog visible={this.state.visible} onDismiss={this.toggleDialog}>
                            <Card style={{ marginHorizontal: 5, padding: 20, backgroundColor: "#ffffffdd" }}>
                                <Header>Reserva</Header>
                                <View style={{ flexDirection: "column", marginVertical: 15 }}>
                                    <TextInput
                                        mode="outlined"
                                        style={{ marginBottom: 10 }}
                                        label="Nombre"
                                        returnKeyType="next"
                                        value={this.state.selected.stationName}
                                        editable={false}
                                    />

                                    {this.state.showTimeFrom && <RNDateTimePicker mode="time" value={new Date()} onChange={(e, d) => this.setTimeFrom(e, d)} />}
                                    {this.state.showTimeUpto && <RNDateTimePicker mode="time" value={new Date()} onChange={(e, d) => this.setTimeUpto(e, d)} />}
                                    {this.state.showCalendar && <RNDateTimePicker mode="date" value={new Date()} onChange={(e, d) => this.setDate(e, d)} />}

                                    <TextInput
                                        mode="outlined"
                                        style={{ marginBottom: 10 }}
                                        label="Desde"
                                        returnKeyType="next"
                                        value={this.state.selected.from}
                                        editable={true}
                                        onPressIn={() => this.setState({ showTimeFrom: true })}
                                    />
                                    <TextInput
                                        mode="outlined"
                                        style={{ marginBottom: 10 }}
                                        label="Hasta"
                                        returnKeyType="next"
                                        value={this.state.selected.upto}
                                        editable={true}
                                        onPressIn={() => this.setState({ showTimeUpto: true })}
                                    />
                                    <TextInput
                                        mode="outlined"
                                        style={{ marginBottom: 10 }}
                                        label="Fecha"
                                        returnKeyType="next"
                                        value={this.state.selected.date}
                                        editable={true}
                                        onPressIn={() => this.setState({ showCalendar: true })}
                                    />
                                </View>
                            </Card>
                            <Dialog.Actions>
                                <Button loading={this.state.loading} onPress={() => this.book()}>
                                    {this.state.loading === false ? "Confirmar" : null}
                                </Button>
                                <Button color='red' onPress={() => this.setState({ visible: false, selected: { from: null, upto: null } })}>Cancelar</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                    {/* <View style={styles.container}>
                    <Snackbar
                        style={{backgroundColor: 'green', color:'white'}}
                        visible={this.state.bookingSuccess}
                        onDismiss={() => this.setState({bookingSuccess: false})}>
                        Reserva hecha.
                    </Snackbar>
                    <Snackbar
                        style={{backgroundColor: 'red', color: 'white'}}
                        visible={this.state.bookingError}
                        onDismiss={() => this.setState({bookingError: false})}>
                        Ha habido un error al hacer la reserva.
                    </Snackbar>
                </View> */}
                </Background>
            )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: '50',
    },
});


// Cargamos los datos que tenemos en el store.
const mapStateToProps = ({ Estaciones, Locations }) => {
    const { estaciones, successEstaciones } = Estaciones;
    const { currentLocation } = Locations;
    return { estaciones, successEstaciones, currentLocation };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEstaciones: () => dispatch(fetchEstaciones())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsList);
