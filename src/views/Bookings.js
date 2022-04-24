import { Image, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import React from 'react';
import { Button, Paragraph, Dialog, Portal, Snackbar, Divider } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { addBooking } from '../../Actions';
import ReservaCard from '../components/ReservaCard';
import { Avatar } from "react-native-paper";

class Bookings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            loading: false,
            snackBar: false,
            bookingSuccess: false,
            bookingError: false,
        }
    }
    toggleDialog = () => {
        this.setState({visible: true})
    }

    book = (idBook, nameBook) => {
        this.setState({loading: true})
        // Just a simulation. It would really be a API call.
        setTimeout(() => {
            this.setState({loading: false, visible: false, bookingSuccess: true})
        }, 2000);
        
        this.props.delBooking({
            id: idBook, 
            name: nameBook, 
            date: Date(), 
            status: 'Cancelada',
        })
    }

    render(){       //para pintar por pantalla
        return(
            <View>
                {this.props.all_bookings.map((item) => {
                    return(
                        <View key={item.id}>
                            <Divider />
                            <ReservaCard
                                id={item.id}
                                name={item.name}
                                date={item.date}
                                status={item.status}
                                import_due={item.import_due}
                                amount_paid={item.amount_paid}
                                time={item.time}
                                openModal={this.toggleDialog}
                            />
                             
                            
                            <Portal> 
                                <Dialog visible={this.state.visible} onDismiss={this.toggleDialog}>
                                    <Dialog.Title>Cancelar</Dialog.Title>
                
                                    <Dialog.Content>
                                        <Paragraph>¿Seguro que quieres cancelar la reserva en {item.name} de la fecha {item.date}?</Paragraph>
                                    </Dialog.Content>

                                    <Dialog.Actions>
                                        <Button color='red' onPress={() => this.setState({visible: false})}>Cerrar</Button>
                                        <Button  loading={this.state.loading} onPress={() => (item.id, item.name)}>
                                            {this.state.loading === false ? "Cancelar" : null}
                                        </Button>
                                    </Dialog.Actions>
                                </Dialog>

                                <Dialog visible={this.state.visible} onDismiss={this.toggleDialog}>
                                    <Dialog.Title>
                                        Detalles Reserva: {"\n"}
                                        <Avatar.Icon size={100} icon="map" />
                                    </Dialog.Title>

                                    <Dialog.Content>
                                        <Paragraph> 
                                            Numero de reserva: 
                                            <Paragraph>
                                                {item.id}
                                            </Paragraph>
                                        </Paragraph>
                                        <Paragraph> 
                                            Estacion: 
                                            <Paragraph>
                                                {item.name}
                                            </Paragraph>
                                        </Paragraph>
                                        <Paragraph> Vehículo:</Paragraph>
                                        <Paragraph> Fecha expedicion:</Paragraph>
                                        <Paragraph> 
                                            Fecha de reserva: 
                                            <Paragraph >
                                                {item.date}
                                            </Paragraph>
                                        </Paragraph>
                                        <Paragraph>
                                            Tiempo reservado:
                                            <Paragraph>
                                                {item.time}
                                            </Paragraph>
                                        </Paragraph>
                                        <Paragraph> 
                                            Importe adeudado:
                                            <Paragraph>
                                                {item.import_due} € 
                                            </Paragraph>
                                        </Paragraph>
                                        <Paragraph> 
                                            Importe pagado:
                                            <Paragraph >
                                                {item.amount_paid} € 
                                            </Paragraph>
                                        </Paragraph>
                                        <Paragraph> 
                                            Estado de la reserva:
                                            <Paragraph>
                                                {item.status}
                                            </Paragraph>
                                        </Paragraph>
                                    </Dialog.Content>

                                    <Dialog.Actions>
                                        <Button color='red' onPress={() => this.setState({visible: false})}>Cerrar</Button>
                                        <Button backgroundColor="blue" onPress={() => this.setState({visible: false})}>Imprimir factura</Button>
                                    </Dialog.Actions>
                                </Dialog>
                                
                            </Portal>

                            <Divider />
                        </View>
                    );
                })}

            </View>
        )
    }
}

// Cargamos los datos que tenemos en el store.
const mapStateToProps = (state) => {
    const { all_bookings } = state;
    return { all_bookings };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addBooking,
    }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Bookings);