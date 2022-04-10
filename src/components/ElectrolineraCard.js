import * as React from 'react';
import react from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';

export default class ElectrolineraCard extends react.Component{
    constructor(props){
        super(props);
        this.id = this.props.id; // Guardamos el ID de la estación
        this.coordinates = [this.props.latitude, this.props.longitude];
        this.capacity = this.props.capacity;
        this.curr_ocupation = this.props.curr_ocupation;
    }

    render(){
        return(
            <Card.Title
                style={{marginTop: '4rem'}}
                title={this.props.nombre}
                subtitle={this.props.capacity}
                left={(props) => <Avatar.Icon {...props} icon="car-electric" />}
                right={(props) => <IconButton {...props} icon="arrow-right" onPress={() => {}} />}
            />
        );
    };
}
