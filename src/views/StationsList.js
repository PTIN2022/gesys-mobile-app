import { Image, View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import StationCard from '../components/StationCard'
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Button, Paragraph, Dialog, Portal, Snackbar, Divider, Card, TextInput, RadioButton } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { addStation } from '../state/actions';
import Background from '../components/Background';
import AppBack from '../components/AppBack';
import Header from '../components/Header'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {fetchEstaciones} from '../state/actions/Estaciones'
import { fetchReservas } from '../state/actions/Reservas'
import { addBooking } from '../state/actions/Reservas';
import * as Location from 'expo-location';
import { setLocation } from '../state/actions/Location'
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../core/theme';
import SelectDropdown from 'react-native-select-dropdown'
import {Slider} from '@miblanchard/react-native-slider';


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
                from: String(""),
                fromDT: null,
                upto: String(""),
                uptoDT: null,
                date: String(""),
                rate: 20.0,
                currentRate: 0,
                coupon: "",
                cuponValid: null,
            },
            showTimeFrom: false, // estados booleanos para mostrar o no el selector de hora
            showTimeUpto: false,
            showCalendar: false,
            data: null,
            myLocation: { // Ubicación
                longitude: null,
                latuitude: null,
            },
            checked: 1, // Filtro
            kmFilter: 0, // Para controlar el ratio de KM
            disableSlider: false,
            sliderColor: "#427fd4"
        }
    }
   
    async componentDidMount() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permiso denegado para acceder a la ubicación.');
        } else {
            let location = await Location.getCurrentPositionAsync({});
            this.props.setCurrentLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
            if(this.props.currentLocation.latitude !== null && this.props.currentLocation.longitude !== null){
                this.props.fetchEstaciones(this.props.currentLocation.latitude, this.props.currentLocation.longitude)
            }
        } 
    }

    // Función que setea el estado para mostrar el formulario de hacer la reserva
    toggleDialog = (id, name, price=20.0) => {
        this.setState(prev => ({
            visible: true,
            selected: {
                ...prev.selected,
                station: id,
                stationName: name,
                selectedStationRate: price,
            }}))
    }

    book = (idStation, nameStation) => {
        this.setState({ loading: true })

        // Just a simulation. It would really be a API call.
        setTimeout(() => {
            this.setState({ loading: false, visible: false, bookingSuccess: true })
        }, 2000);

        if(this.state.selected.from !== null && this.state.selected.upto !== null){
            this.props.addBooking({
                id_estacion: this.state.selected.station,
                fecha_inicio: String(this.state.selected.date + " " + this.state.selected.from),
                fecha_final: String(this.state.selected.date + " " + this.state.selected.upto),
                id_vehiculo: "-",
                id_cliente: "xx",
            })
        }
    }

    // Establecemos la hora de reserva "desde"
    setTimeFrom = (e, d) => {
        console.log(d)
        if (d !== undefined) {
            this.setState(prev => ({
                showTimeFrom: false,
                selected: {
                    ...prev.selected,
                    from: String(d.getHours() + ":" + d.getMinutes()),
                    fromDT: d,
                }
            }))
            if(this.state.selected.uptoDT){
                // Procesamos la cantidad estimada.
                let precioPorMinutoEstacion = this.state.selected.rate / 60;
                // Get difference in minutes for selected period.
                let minutesOfBooking = Math.abs(this.state.selected.fromDT - this.state.selected.uptoDT);
                let mins = Math.floor((minutesOfBooking/1000)/60);
                this.setState(prev => ({
                    showTimeUpto: false,
                    selected: {
                        ...prev.selected,
                        currentRate: precioPorMinutoEstacion * mins
                    }
                }))
            }
        }

    }

    // Establecemos la hora de reserva "hasta"
    setTimeUpto = (e, d) => {
        if (d !== undefined) {
            this.setState(prev => ({
                showTimeUpto: false,
                selected: {
                    ...prev.selected,
                    upto: String(d.getHours() + ":" + d.getMinutes()),
                    uptoDT: d,
                }
            }))
            if(this.state.selected.fromDT){
                // Procesamos la cantidad estimada.
                let precioPorMinutoEstacion = this.state.selected.rate / 60;
                // Get difference in minutes for selected period.
                let minutesOfBooking = Math.abs(this.state.selected.fromDT - this.state.selected.uptoDT);
                let mins = Math.floor((minutesOfBooking/1000)/60);
                this.setState(prev => ({
                    showTimeUpto: false,
                    selected: {
                        ...prev.selected,
                        currentRate: precioPorMinutoEstacion * mins
                    }
                }))
            }
        }
    }

    // Establecemos el dia de la reserva
    setDate = (e, d) => {
        if (d !== undefined) {
            this.setState(prev => ({
                showCalendar: false,
                selected: {
                    ...prev.selected,
                    date: String(d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear())
                }
            }))
        }
    }

    swtich = (val) => {
        this.setState({checked: val})
        if(this.state.checked === 1){
            // Ahora se quiere filtrar por ubicación.
            if(this.props.currentLocation.latitude !== null && this.props.currentLocation.longitude !== null){
                this.props.fetchEstaciones(this.props.currentLocation.latitude, this.props.currentLocation.longitude)
            }    
        } else if(this.state.checked === 2) {
            this.setDate({disableSlider: true})
            this.props.fetchEstaciones(1, 1)
            // PROMOCIONES
        }
    }

    changeCupon = (text) => {
        this.setState(prev => ({
            showCalendar: false,
            selected: {
                ...prev.selected,
                coupon: text,
            }
        }))
    }

    checkCupon = () => {
        // Fetch and check if cupon exists for this user?
    }

    filterByRatio = (value) => {
        this.setState({
            kmFilter: value,
            disableSlider: true,
            sliderColor: "#DCDCDC"
        })
        // Fetch by ratio kilometer.
        setTimeout(() => {
            this.setState({disableSlider: false, sliderColor: "#427fd4"})
        }, 1000)
    }

    // Para pintar por pantalla.
    render() {
        return !this.props.successEstaciones 
            ? (
                <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
                    <Header>Cargando localización</Header>
                    <ActivityIndicator style={{margin:10}} size="large" color={theme.colors.primary} />
                </View>
            )
            : (
                <Background>
                    <AppBack title="Lista de estaciones" backScreenName="Stations" />
                    {this.props.currentLocation.latitude !== null && this.props.currentLocation.longitude !== null ? 
                        // <Text>Tus coordenadas: {this.props.currentLocation.longitude}, {this.props.currentLocation.latitude}</Text>
                        null
                        :
                        null
                    }
                    <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row'}}>
                        <View style={{width: 155, marginLeft: 10}}>
                            <Text style={{fontWeight: 'bold', marginVertical: 9}}>Filtro por promociones</Text>
                            <Text style={{fontWeight: 'bold', marginVertical: 7}}>Filtro por ubicación</Text>
                        </View>
                        <View>
                            <RadioButton
                                value="Promociones"
                                status={ this.state.checked === 2 ? 'checked' : 'unchecked' }
                                onPress={() => this.swtich(2)}
                                color="#427fd4"
                                disabled={true}
                            />
                            <RadioButton
                                value="Ubicación"
                                status={ this.state.checked === 1 ? 'checked' : 'unchecked' }
                                onPress={() => this.swtich(1)}
                                color="#427fd4"
                                />
                        </View>
                    </View>
                    <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row'}}>
                        <View style={{width: 155, marginLeft: 10}}>
                            <Text style={{fontWeight: 'bold', marginVertical: 9}}>Filtro por ratio</Text>
                        </View>
                        <View style={{width: 163, marginLeft: 10}}>
                            <Slider
                                value={this.state.kmFilter}
                                onSlidingComplete={value => this.filterByRatio(value)}
                                style={{backgroundColor: 'red'}}
                                maximumValue={5}
                                minimumValue={0}
                                step={1}
                                disabled={this.state.disableSlider}
                                thumbTintColor={this.state.sliderColor}
                            />
                        </View>
                        <View>
                            <Text style={{fontWeight: 'bold', marginVertical: 9, marginLeft: 3}}>{this.state.kmFilter} KM</Text>
                        </View>
                    </View>
                
                    <ScrollView>
                        {this.props.estaciones.Estaciones.map((item) => {
                            // Iteramos las estaciones que tenemos cargadas en el store.
                            return (
                                <View key={item.id_estacion}>
                                    <StationCard
                                        id={item.id_estacion}
                                        estacion={item.nombre_est}
                                        ocupation_max={item.capacidad}
                                        ocupation_now={item.ocupation_actual}
                                        longitude={item.longitud}
                                        latitude={item.latitud}
                                        direccion={item.direccion}
                                        key={item.id}
                                        openModal={this.toggleDialog}
                                        disabledBtn={!this.props.Login.logged}
                                    />
                                </View>
                            );
                        })}
                    </ScrollView>
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

                                    {this.state.showTimeFrom && <RNDateTimePicker mode="time" value={new Date()} onChange={this.setTimeFrom} />}
                                    {this.state.showTimeUpto && <RNDateTimePicker mode="time" value={new Date()} onChange={this.setTimeUpto} />}
                                    {this.state.showCalendar && <RNDateTimePicker mode="date" value={new Date()} onChange={this.setDate} />}

                                    <TextInput
                                        mode="outlined"
                                        style={{ marginBottom: 10 }}
                                        label="Desde"
                                        returnKeyType="next"
                                        value={this.state.selected.from === "" ? "" : this.state.selected.from}
                                        editable={true}
                                        onPressIn={() => this.setState({ showTimeFrom: true })}
                                    />
                                    <TextInput
                                        mode="outlined"
                                        style={{ marginBottom: 10 }}
                                        label="Hasta"
                                        returnKeyType="next"
                                        value={this.state.selected.upto === "" ? "" : this.state.selected.upto}
                                        editable={true}
                                        onPressIn={() => this.setState({ showTimeUpto: true })}
                                    />
                                    <TextInput
                                        mode="outlined"
                                        style={{ marginBottom: 10 }}
                                        label="Fecha"
                                        returnKeyType="next"
                                        value={this.state.selected.date === "" ? "" : this.state.selected.date}
                                        editable={true}
                                        onPressIn={() => this.setState({ showCalendar: true })}
                                    />
                                </View>
                                <View>
                                    <Text>¿Dispones de alguno código para canjear?</Text>
                                    <TextInput
                                        mode="outlined"
                                        style={{ marginBottom: 10 }}
                                        label="Cupón"
                                        value={this.state.selected.coupon === "" ? "" : this.state.selected.coupon}
                                        editable={true}
                                        onChange={text => {this.changeCupon(text)}}
                                    />
                                    {this.state.selected.cuponValid === true ? (
                                        <Text style={{color: 'green'}} >Cupón inválido.</Text>
                                    ) : ( 
                                        this.state.selected.cuponValid === false ? (
                                            <Text style={{color: 'green'}}>Cupón válido.</Text>
                                        ) : (
                                            null
                                        )
                                    )}
                                    
                                    <Button mode='contained' onPress={this.checkCupon}>Validar cupón</Button>
                                </View>
                                <Text style={{marginTop: 30}}>
                                    Precio estimado: {this.state.selected.currentRate}€
                                </Text>
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
const mapStateToProps = ({ Estaciones, Locations, Login }) => {
    const { estaciones, successEstaciones } = Estaciones;
    const { currentLocation } = Locations;
    return { estaciones, successEstaciones, currentLocation, Login };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEstaciones: (long, lat) => dispatch(fetchEstaciones(long, lat)),
        addBooking: (data) => dispatch(addBooking(data)),
        setCurrentLocation: (data) => dispatch(setLocation(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsList);
