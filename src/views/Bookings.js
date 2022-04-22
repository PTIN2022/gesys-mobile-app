import { View } from 'react-native'
import { connect } from 'react-redux';
import React from 'react';
import { bindActionCreators } from 'redux';
// import { addBooking } from '../../Actions';

class Booking extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    // Para pintar por pantalla.
    render(){
        return (
            <View>
                {this.props.all_bookings.map((item) => {
                    // Iteramos las estaciones que tenemos cargadas en el store.
                    return (null);
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

//export default connect(mapStateToProps, mapDispatchToProps)(Booking);
export default connect(mapStateToProps)(Booking);
