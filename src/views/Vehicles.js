import { View } from 'react-native'
import { connect } from 'react-redux';
import React from 'react';
import { bindActionCreators } from 'redux';
// import { addVehicle } from '../../Actions';

class Vehicle extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    // Para pintar por pantalla.
    render(){
        return (
            <View>
                {this.props.all_vehicles.map((item) => {
                    // Iteramos las estaciones que tenemos cargadas en el store.
                    return (null);
                })}
            </View>
        )
    }
}


// Cargamos los datos que tenemos en el store.
const mapStateToProps = (state) => {
    const { all_vehicles } = state;
    return { all_vehicles };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addVehicle,
    }, dispatch)
);

//export default connect(mapStateToProps, mapDispatchToProps)(Booking);
export default connect(mapStateToProps)(Vehicle);
