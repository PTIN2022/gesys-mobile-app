import { Text, Image, View, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import React from 'react';
import { Button, Dialog, Portal, Snackbar, Divider } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { addBooking } from '../state/actions';
import ReservaCard from '../components/ReservaCard';
import { Avatar } from "react-native-paper";
import AppBack from '../components/AppBack';
import Background from "../components/Background"
import { fetchReservas } from '../state/actions/Reservas'
const API = "http://craaxkvm.epsevg.upc.es:23601/api";

class BookingList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            loading: false,
            snackBar: false,
            bookingSuccess: false,
            bookingError: false,
        }
    }

    componentDidMount(){
        this.props.fetchReservas()
    }
    
    componentDidUpdate() {
    }

    toggleDialog = () => {
        this.setState({ visible: true })
    }

    book = (idBook, nameBook) => {
        this.setState({ loading: true })
        // Just a simulation. It would really be a API call.
        setTimeout(() => {
            this.setState({ loading: false, visible: false, bookingSuccess: true })
        }, 2000);

        this.props.delBooking({
            id: idBook,
            name: nameBook,
            date: Date(),
            status: 'Cancelada',
        })
    }

    render(){    //para pintar por pantalla
        console.log(this.props.reservas)
        //alert(this.props.successReservas)
        return !this.props.successReservas ?
            (<Text>Sin datos</Text>)
        : (
            <Background>
                <AppBack title="Lista de reservas" backScreenName="Stations" />
                <ScrollView>
                    {this.props.reservas.map((item) => {
                        console.log(Date.parse(item.fecha_entrada))
                        return (
                            <ReservaCard
                                key={item.id_reserva}
                                id={item.id_reserva}
                                // name={item.name}
                                from={item.fecha_entrada}
                                upto={item.fecha_salida}
                                charger={item.id_cargador}
                                car={item.id_vehiculo}
                                status={1 == 1 ? "Activa" : "Terminada"}
                                import_due={item.import_due}
                                amount_paid={item.amount_paid}
                                time={item.time}
                                openModal={this.toggleDialog}
                            />
                        )
                        {/* <Portal> 
                                <Dialog visible={this.state.visible} onDismiss={this.toggleDialog}>
                                    <Dialog.Title>Cancelar</Dialog.Title>
                                    <Dialog.Content>
                                        <Text>¿Seguro que quieres cancelar la reserva en {item.name} de la fecha {item.date}?</Text>
                                    </Dialog.Content>
                                    <Dialog.Actions>
                                        <Button color='red' onPress={() => this.setState({visible: false})}>Cerrar</Button>
                                        <Button  loading={this.state.loading} onPress={() => (item.id, item.name)}>
                                            {this.state.loading === false ? "Cancelar" : null}
                                        </Button>
                                    </Dialog.Actions>
                                </Dialog>
                                <Dialog visible={this.state.visible} dismissable onDismiss={this.toggleDialog}>
                                    <Dialog.Title>
                                        <Text>Detalles Reserva:</Text>
                                    </Dialog.Title>
                                    <Dialog.Content>
                                        <Text>Numero de reserva:{item.id}</Text>
                                        <Text>Estacion: {item.name}</Text>
                                        <Text>Vehículo:</Text>
                                        <Text>Fecha expedicion:</Text>
                                        <Text>Fecha de reserva:{item.date}</Text>
                                        <Text>Tiempo reservado:{item.time}</Text>
                                        <Text>{item.import_due} € </Text>
                                        <Text>Importe pagado:{item.amount_paid} €</Text>
                                        <Text>Estado de la reserva:{item.status}</Text>
                                    </Dialog.Content>
                                    <Dialog.Actions>
                                        <Button color='red' onPress={() => this.setState({visible: false})}>Cerrar</Button>
                                        <Button backgroundColor="blue" onPress={() => this.setState({visible: false})}>Imprimir factura</Button>
                                    </Dialog.Actions>
                                </Dialog>
                            </Portal> */}

                    })}
                </ScrollView>
            </Background>
        )
    }
}

// Cargamos los datos que tenemos en el store.
const mapStateToProps = ({Reservas}) => {
    const { reservas, successReservas } = Reservas;
    return { reservas, successReservas };
};

/*const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addBooking,
    }, dispatch)
);*/

const mapDispatchToProps = dispatch => {
    return {
        fetchReservas: () => dispatch(fetchReservas())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingList);
