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

    book = (idStation, nameStation) => {
        this.setState({loading: true})
        // Just a simulation. It would really be a API call.
        setTimeout(() => {
            this.setState({loading: false, visible: false, bookingSuccess: true})
        }, 2000);
        
        this.props.addBooking({
            id: idStation, 
            name: nameStation, 
            date: Date(), 
            status: 'Activa',
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
                                openModal2={this.toggleDialog}
                            />
                            <Divider />
                        </View>
                    );
                })}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
    }
});
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