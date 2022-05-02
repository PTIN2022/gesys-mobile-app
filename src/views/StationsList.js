import { Image, View, StyleSheet } from 'react-native'
import StationCard from '../components/StationCard'
import { connect } from 'react-redux';
import React from 'react';
import { Button, Paragraph, Dialog, Portal, Snackbar, Divider } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { addBooking } from '../../Actions';
import Background from '../components/Background';
import AppBack from '../components/AppBack';

class StationsList extends React.Component{
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

    book = (idStation, nameStation) => {
        this.setState({loading: true})
        // Just a simulation. It would really be a API call.
        setTimeout(() => {
            this.setState({loading: false, visible: false, bookingSuccess: true})
        }, 2000);
        //this.props.addBooking({id: idStation, name: nameStation});
        this.props.addBooking({
            id: idStation, 
            name: nameStation, 
            date: Date(), 
            status: 'Activa',
        })
    }


    // Para pintar por pantalla.
    render(){
        return (
            <Background>
                <AppBack title="Lista de estaciones"/>
                {this.props.all_stations.map((item) => {
                    // Iteramos las estaciones que tenemos cargadas en el store.
                    return (
                        <View key={item.id}>
                            <StationCard 
                                id={item.id}
                                name={item.name}
                                capacity={item.capacity}
                                curr_ocupation={item.curr_ocupation}
                                longitude={item.coordinates.longitude}
                                latitude={item.coordinates.latitude}
                                openModal={this.toggleDialog}
                                firstSlot={item.slots[0]}
                            />
                            <Portal>
                                <Dialog visible={this.state.visible} onDismiss={this.toggleDialog}>
                                    <Dialog.Title>Reserva</Dialog.Title>
                                    <Dialog.Content>
                                    <Paragraph>¿Hacer la reserva para la estación {item.name} a las {item.slots[0]}?</Paragraph>
                                    </Dialog.Content>
                                    <Dialog.Actions>
                                        <Button loading={this.state.loading} onPress={() => this.book(item.id, item.name)}>
                                            {this.state.loading === false ? "Confirmar" : null}
                                        </Button>
                                        <Button color='red' onPress={() => this.setState({visible: false})}>Cancelar</Button>
                                    </Dialog.Actions>
                                </Dialog>
                            </Portal>
                        </View>
                    );
                })}
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
const mapStateToProps = (state) => {
    const { all_stations } = state;
    return { all_stations };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addBooking,
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(StationsList);
