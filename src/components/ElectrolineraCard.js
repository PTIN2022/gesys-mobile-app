import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { Text } from "react-native";


const TextElectrolinera = (props) => {
    let occupationRatio = props.curr_ocupation / props.capacity * 100;
    console.log(occupationRatio);
    if(occupationRatio <= 100.0 && occupationRatio > 70.0){
        return(
            <View>
                <Text style={{color: 'red'}}>{props.curr_ocupation + "/" + props.capacity + ""}</Text>
                <Text>{props.firstSlot}</Text>
            </View>
        )
    } else if(occupationRatio <= 70.0 && occupationRatio > 30.0){
        return(
            <View>
                <Text style={{color: 'orange'}}>{props.curr_ocupation + "/" + props.capacity + ""}</Text>
                <Text>{props.firstSlot}</Text>
            </View>
        )
    } else {
        return(
            <View>
                <Text style={{color: 'green'}}>{props.curr_ocupation + "/" + props.capacity + ""}</Text>
                <Text>{props.firstSlot}</Text>
            </View>
        )
    }
}


export default function ElectrolineraCard (props){
    const [visible, setVisible] = React.useState(true);
    const showDialog = () => props.openModal();
    const hideDialog = () => setVisible(false);

    return(
        <View>
            <Card.Title
                title={props.name}
                subtitle={<TextElectrolinera {...props} />}
                left={(props) => <Avatar.Icon {...props} icon="car-electric" />}
                right={(props) => <IconButton {...props} icon="arrow-right" onPress={() => {showDialog()}} />}
            />
        </View>
    );
}
