import { theme } from '../core/theme'
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from "react-native-paper"
import AppBack from '../components/AppBack';
import VehicleCard from '../components/VehicleCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addVehicle } from '../state/actions';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import Background from '../components/Background';



class VehiclesList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
		if(this.props.Login.logged === false){
			this.props.navigation.navigate('LogIn');
		}
    }
    componentDidUpdate() {

    }



    render() {
        return (
            <Background>
                <AppBack title="Lista de vehiculos" backScreenName="Stations" />
                <Button style={{ margin: 5 }} icon="pencil-plus" mode="contained" onPress={() => this.props.navigation.navigate("VehicleForm")}>Nuevo vehiculo</Button>
                <ScrollView>
                    {this.props.vehiculos.map(vehicle => {
                        return (
                            <VehicleCard
                                key={vehicle.id}
                                name={vehicle.name}
                                plate={vehicle.plate}
                                model={vehicle.model}
                            />
                        )
                    })}
                </ScrollView>
            </Background>

        );
    }
}



const mapStateToProps = ({ Vehiculos, Login }) => {
    const { vehiculos } = Vehiculos;
    return { vehiculos, Login };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addVehicle,
    }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(VehiclesList);


const styles = StyleSheet.create({
    head: {
        fontSize: 21,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 0,
        left: 0,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: 300,
        marginBottom: 5,
    },
    cont: {
        right: 100,
        left: 125,
        position: 'absolute',
        bottom: 50,
    }
})



