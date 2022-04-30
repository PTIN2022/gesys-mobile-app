import { theme } from '../core/theme'
import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Button } from "react-native-paper"
import AppBack from '../components/AppBack';
import VehicleCard from '../components/VehicleCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addVehicle } from '../../Actions';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import Background from '../components/Background';

function VehiclesList(props) {

    const navigator = useNavigation()

    return (
        <Background>
            <AppBack title="Lista de vehiculos" backScreenName="Stations"/>
            <Button style={{margin: 5}} icon="pencil-plus" mode="contained" onPress={()=>navigator.navigate("VehicleForm")}>Nuevo vehiculo</Button>
            <ScrollView>
                {props.all_vehicles.map(vehicle=>{
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



