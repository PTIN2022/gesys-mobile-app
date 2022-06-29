import * as React from 'react';
import { Avatar, Card, Button } from 'react-native-paper';
import { View } from 'react-native';
import Header from "./Header"
import { Text } from "react-native";
import { addBooking } from '../state/actions';
import { TicketForm } from '../views/TicketForm'
import { useNavigation } from '@react-navigation/native';


function aux(props) {
    console.log(props.id_client, props.id_usuari)
    if (props.id_client == props.id_usuari) {
        return (
            <Card mode="elevated" style={{ marginHorizontal: 5, marginLeft: 90, marginBottom: 5, backgroundColor: "#0e3bac", flex: 0.1, borderColor: 'black', borderWidth: 0.5 }}>

                <Card.Content style={{}}>
                    <View style={{ flexDirection: "row", alignContent: 'flex-end' }}>
                        <View style={{ flex: 1, paddingLeft: 5, marginTop: 1 }}>
                            <Text style={{ color: 'white' }}>{props.contenido}</Text>
                            <Text style={{ fontSize: 7, marginLeft: 158, color: 'grey' }}>{props.date.slice(11,)}</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>

        )
    }
    else {
        return (
            <Card mode="elevated" style={{ marginHorizontal: 5, marginRight: 90, marginBottom: 5, backgroundColor: "#ccddfe", height: 50, borderColor: 'black', borderWidth: 0.5 }}>

                <Card.Content style={{}}>
                    <View style={{ flexDirection: "row", }}>
                        <View style={{ flex: 1, paddingLeft: 5, }}>
                            <Text style={{ color: 'white' }}>{props.contenido}</Text>
                            <Text style={{ fontSize: 7, marginRight: 160, color: 'grey' }}>{props.date.slice(11,)}</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        )

    }


}



function MensajeCard(props) {
    const navigation = useNavigation();



    console.log("ARRIBOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", props.contenido)
    return (

        <View style={{ flex: 1, paddingLeft: 20, }}>
            {aux(props)}
        </View>
    )
}

export default MensajeCard