import { Image, View, StyleSheet } from 'react-native'
import ElectrolineraCard from '../components/ElectrolineraCard'
import { connect } from 'react-redux';
import React from 'react';


class Stations extends React.Component{
    constructor(props){
        super(props);
    }

    // Para pintar por pantalla.
    render(){
        return (
          <View style={{marginTop: '4rem'}}>
                {this.props.all_stations.map((item) => {
                    // Iteramos las estaciones que tenemos cargadas en el store.
                    return (<ElectrolineraCard 
                             name={item.name}
                             capacity={item.capacity}
                             curr_ocupation={item.curr_ocupation}
                             longitude={item.coordinates.longitude}
                             latitude={item.coordinates.latitude}
                             key={item.id} />);
                })}
          </View>
        )
    }
}

// Cargamos los datos que tenemos en el store.
const mapStateToProps = (state) => {
    const { all_stations } = state;
    return { all_stations };
};

export default connect(mapStateToProps)(Stations);
