import { Image, View, StyleSheet } from 'react-native'
import ElectrolineraCard from '../components/ElectrolineraCard'
import { connect } from 'react-redux';
import React from 'react';
import { Button, Paragraph, Dialog, Portal, Snackbar  } from 'react-native-paper';


class Stations extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            loading: false,
            snackBar: false,
        }
    }

    toggleDialog = () => {
        this.setState({visible: true})
    }

    load = () => {
        this.setState({loading: true})
        // Just a simulation. It would really be a API call.
        setTimeout(() => {
            this.setState({loading: false, visible: false, snackBar: true})
        }, 2000);
    }


    // Para pintar por pantalla.
    render(){
        return (
            <View style={{marginTop: '4rem'}}>
                {this.props.all_stations.map((item) => {
                    // Iteramos las estaciones que tenemos cargadas en el store.
                    return (
                        <View key={item.id}>
                            <ElectrolineraCard 
                                id={item.id}
                                name={item.name}
                                capacity={item.capacity}
                                curr_ocupation={item.curr_ocupation}
                                longitude={item.coordinates.longitude}
                                latitude={item.coordinates.latitude}
                                openModal={this.toggleDialog} />
                            <Portal>
                                <Dialog visible={this.state.visible} onDismiss={this.toggleDialog}>
                                    <Dialog.Title>Reserva</Dialog.Title>
                                    <Dialog.Content>
                                    <Paragraph>¿Hacer la reserva?</Paragraph>
                                    </Dialog.Content>
                                    <Dialog.Actions>
                                        <Button loading={this.state.loading} onPress={this.load}>Confirmar</Button>
                                        <Button color='red' onPress={this.toggleDialog}>Cancelar</Button>
                                    </Dialog.Actions>
                                </Dialog>
                            </Portal>

                        </View>
                    );
                })}
                <View style={styles.container}>
                    <Snackbar
                        visible={this.state.snackBar}
                        onDismiss={() => this.setState({snackBar: false})}>
                        Reserva hecha.
                    </Snackbar>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
  });
  

// Cargamos los datos que tenemos en el store.
const mapStateToProps = (state) => {
    const { all_stations } = state;
    return { all_stations };
};

export default connect(mapStateToProps)(Stations);
