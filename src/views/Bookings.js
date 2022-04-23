import { Image, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import React from 'react';
import { Button, Paragraph, Dialog, Portal, Snackbar, Divider } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { addBooking } from '../../Actions';
import ReservaCard from '../components/ReservaCard';

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
                                openModal={this.toggleDialog}
                            />
                             
                            
                            <Portal> 
                                <Dialog visible={this.state.visible} onDismiss={this.toggleDialog}>
                                    <Dialog.Title>Cancelar</Dialog.Title>
                
                                    <Dialog.Content>
                                        <Paragraph>¿Seguro que quieres cancelar la reserva en {item.name} de la fecha {item.date}?</Paragraph>
                                    </Dialog.Content>

                                    <Dialog.Actions>
                                        <Button  onPress={() => this.setState({visible: false})}>No quiero cancelar</Button>
                                        <Button color='red' loading={this.state.loading} onPress={() => (item.id, item.name)}>
                                            {this.state.loading === false ? "Cancelar" : null}
                                        </Button>
                                    </Dialog.Actions>

                                    <Dialog visible={this.state.visible} onDismiss={this.toggleDialog}>
                                    <Dialog.Title>
                                        Detalles Reserva: {"\n"}
                                        <Dialog.Title style={{fontWeight: 'bold'}}> 
                                            {item.name} 
                                        </Dialog.Title>
                                    </Dialog.Title>

                                    <Dialog.Content>
                                        <Paragraph> Identificador Reserva: {item.id}</Paragraph>
                                        <Paragraph> Dia Reserva: {item.date}</Paragraph>
                                        <Paragraph> Estado: {item.status}</Paragraph>
                                    </Dialog.Content>

                                    <Dialog.Actions>
                                        <Button  onPress={() => this.setState({visible: false})}>Cancelar</Button>
                                        
                                    </Dialog.Actions>

                                </Dialog>

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