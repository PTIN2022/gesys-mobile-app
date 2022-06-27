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
import {Slider} from '@miblanchard/react-native-slider';
import SelectDropdown from 'react-native-select-dropdown'
import { fetchVehicles } from '../state/actions/Vehicles'
import Error from '../components/Error'
import { updateSaldo } from '../state/actions/Login'


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
                coupon: String(""),
                cuponValid: false,
                cuponInvalid: false,
                vehicle_place: "",
            },
            discount: {
                percentage: 0,
                applied: false,
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
            kmFilter: 1, // Para controlar el ratio de KM
            disableSlider: false,
            sliderColor: "#427fd4",
            selectedVehicle: "",
            insufficientBlanace: false,
            cuponInvalid: false,
            cuponUsed: false,
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
                this.props.fetchEstaciones(this.props.currentLocation.latitude, this.props.currentLocation.longitude, this.state.kmFilter)
            }
        } 
    }

    // Función que setea el estado para mostrar el formulario de hacer la reserva
    toggleDialog = (id, name) => {
        if(this.props.Vehiculos.length <= 0){
            alert("Añade un vehículo primero.")
            return
        }
        this.setState(prev => ({
            visible: true,
            selected: {
                ...prev.selected,
                station: id,
                stationName: name,
            }})
        )
    }

    invalidateCupon = () =>{
        if(this.state.cuponUsed) {
            fetch(`http://craaxkvm.epsevg.upc.es:23701/api/cupones/${this.state.selected.coupon}`, {
                method: 'PUT',
                headers: {
                    'x-access-tokens': this.props.Login.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({estado: "No usable"}),
            })
            .then(res => {
                if(res.status === 404){
                    this.setState(prev => ({
                        ...prev,
                        selected: {
                            ...prev.selected,
                            cuponInvalid: true,
                        }
                    }))
                } else {
                    res.json()
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(data => {
                console.log(data)
            })    
        } else {
            console.log("Didn't use any coupon.")
        }
    }

    decrementBalance = () => {
        let data = {
            saldo: parseFloat(this.state.selected.currentRate),
            type: "minus"
        }
        fetch("http://craaxkvm.epsevg.upc.es:23701/api/saldo", {
            method: 'PUT',
            headers: {
                'x-access-tokens': this.props.Login.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.props.updateSaldo(data.saldo);
        })  
    }

    book = (idStation, nameStation) => {
        // TODO: Si el usuario ha usado el cupon, poner éste como inválido
        this.invalidateCupon()

        // TODO: Llamada a la API para restar el saldo.
        this.decrementBalance()
        return

        this.setState({ loading: true })
        
        if(this.state.selected.from !== null && this.state.selected.upto !== null){
            this.setState({ loading: false, visible: false})
            this.props.addBooking({
                id_estacion: this.state.selected.station,
                fecha_inicio: String(this.state.selected.date + " " + this.state.selected.from),
                fecha_final: String(this.state.selected.date + " " + this.state.selected.upto),
                id_vehiculo: this.state.vehicle_place,
                // id_cliente: this.props.Login.cliente.id_usuari, // this.props.Login.client_id
                tarifa: this.state.selected.currentRate,
                asistida: true, 
            })
        }


    }

    // Establecemos la hora de reserva "desde"
    setTimeFrom = (e, d) => {

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
                let minutesOfBooking = Math.abs(this.state.selected.fromDT - this.state.selected.uptoDT) / 3600000; // hours
                let amount = 0.28*minutesOfBooking+0.05+0.10;
                amount = parseFloat(amount.toFixed(2))

                this.setState(prev => ({
                    showTimeUpto: false,
                    selected: {
                        ...prev.selected,
                        currentRate: amount,
                    }
                }))
                // Controlamos el saldo.
                if(amount > this.props.Login.cliente.saldo) {
                    this.setState({
                        insufficientBlanace: true,
                    })
                }
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
                let minutesOfBooking = Math.abs(this.state.selected.fromDT - this.state.selected.uptoDT) / 3600000; // hours
                let amount = 0.28*minutesOfBooking+0.05+0.10;
                amount = parseFloat(amount.toFixed(2))

                this.setState(prev => ({
                    showTimeUpto: false,
                    selected: {
                        ...prev.selected,
                        currentRate: amount,
                    }
                }))
                // Controlamos el saldo.
                if(amount > this.props.Login.cliente.saldo) {
                    this.setState({
                        insufficientBlanace: true,
                    })
                }
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
        if(val === this.state.checked) return;

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
        fetch(`http://craaxkvm.epsevg.upc.es:23701/api/cupones/${this.state.selected.coupon}`, {
            method: 'GET',
            headers: {
                'x-access-tokens': this.props.Login.token
            },
        })
        .then(res => {
            if(res.status === 404){
                this.setState(prev => ({
                    ...prev,
                    selected: {
                        ...prev.selected,
                        cuponInvalid: true,
                    }
                }))
            } else {
                return res.json()
            }
        })
        .then(res => {
            if(res.estado !== "usable") {
                this.setState(prev => ({
                    ...prev,
                    selected: {
                        ...prev.selected,
                        cuponInvalid: true,
                    }
                }))
            } else {
                let amount = this.state.selected.currentRate-(this.state.selected.currentRate*res.descuento/100);
                amount = parseFloat(amount.toFixed(2))
                this.setState(prev => ({
                    ...prev,
                    selected: {
                        ...prev.selected,
                        cuponValid: true,
                        currentRate: amount
                    },
                    discount: {
                        ...prev.discount,
                        percentage: res.descuento,
                        applied: true,
                    },
                    cuponUsed: true,
                }))
            }
        })
        .catch(data => {
            console.log(data)
        })

    }

    filterByRatio = (value) => {
        this.setState({
            kmFilter: value,
            disableSlider: true,
            sliderColor: "#DCDCDC"
        })
        // Fetch by ratio kilometer.
        if(this.state.checked === 1 && this.props.currentLocation.latitude !== null && this.props.currentLocation.longitude !== null){
            this.props.fetchEstaciones(this.props.currentLocation.latitude, this.props.currentLocation.longitude, this.state.kmFilter)
            this.setState({disableSlider: false, sliderColor: "#427fd4"})
        } 
    }

    // Para pintar por pantalla.
    render() {
        const data = [];
        if(this.props.Vehiculos !== undefined) {
            this.props.Vehiculos.vehicles.map(i => {
                data.push(i.matricula)
            })
        }

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
                                maximumValue={100}
                                minimumValue={1}
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
                            <Card style={{ marginHorizontal: 5, padding: 20 }}>
                                <Header>Reserva</Header>
                                <View style={{ flexDirection: "column", marginVertical: 15 }}>
                                    {this.state.insufficientBlanace ? 
                                    <Error text={"Saldo insuficiente."} />
                                    :
                                    null}
                                    <SelectDropdown
                                        data={data}
                                        defaultValue={data[0]}
                                        onSelect={(selectedItem, index) => {
                                            this.setState(previousState => ({
                                                ...previousState,
                                                selected:{
                                                    ...previousState.selected,
                                                    vehicle_place: selectedItem
                                                }
                                            }))                                           
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            // text represented after item is selected
                                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            // text represented for each item in dropdown
                                            // if data array is an array of objects then return item.property to represent item in dropdown
                                            return item
                                        }}
                                    />
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
                                        value={this.state.selected.coupon}
                                        editable={true}
                                        onChangeText={text => {this.changeCupon(text)}}
                                    />
                                    {this.state.selected.cuponValid === true ?
                                        <Text style={{color: 'green'}}>Cupón válido.</Text>
                                        : 
                                        null
                                    }
                                    {this.state.selected.cuponInvalid === true ? 
                                        (<Text style={{color: 'red'}} >Cupón inválido.</Text>) 
                                        :
                                        null
                                    }                                    
                                    <Button mode='contained' onPress={this.checkCupon}>Validar cupón</Button>
                                </View>
                                <Text style={{marginTop: 30}}>
                                    Precio final: {this.state.selected.currentRate}€
                                </Text>
                                {this.state.discount.applied ? 
                                    <Text>
                                        Aplicado descuento del {this.state.discount.percentage}%
                                    </Text>
                                :
                                    null
                                }
                            </Card>
                            <Dialog.Actions>
                                <Button loading={this.state.loading} disabled={this.state.insufficientBlanace} onPress={() => this.book()}>
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
const mapStateToProps = ({ Estaciones, Locations, Login, Vehiculos }) => {
    const { estaciones, successEstaciones } = Estaciones;
    const { currentLocation } = Locations;
    return { estaciones, successEstaciones, currentLocation, Login, Vehiculos };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEstaciones: (long, lat, ratio) => dispatch(fetchEstaciones(long, lat, ratio)),
        addBooking: (data) => dispatch(addBooking(data)),
        setCurrentLocation: (data) => dispatch(setLocation(data)),
        fetchVehicles: (token, client) => dispatch(fetchVehicles(token, client)),
        updateSaldo: (data) => dispatch(updateSaldo(data)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsList);
