import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Header from './Header';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { Text } from "react-native";


// const TextElectrolinera = (props) => {
//     let occupationRatio = props.curr_ocupation / props.capacity * 100;
//     if(occupationRatio <= 100.0 && occupationRatio > 70.0){
//         return(
//             <View>
//                 <Text style={{color: 'red'}}>{props.curr_ocupation + "/" + props.capacity + ""}</Text>
//                 <Text>{props.firstSlot}</Text>
//             </View>
//         )
//     } else if(occupationRatio <= 70.0 && occupationRatio > 30.0){
//         return(
//             <View>
//                 <Text style={{color: 'orange'}}>{props.curr_ocupation + "/" + props.capacity + ""}</Text>
//                 <Text>{props.firstSlot}</Text>
//             </View>
//         )
//     } else {
//         return(
//             <View>
//                 <Text style={{color: 'green'}}>{props.curr_ocupation + "/" + props.capacity + ""}</Text>
//                 <Text>{props.firstSlot}</Text>
//             </View>
//         )
//     }
// }


export default function ElectrolineraCard (props){
    const [visible, setVisible] = React.useState(true);
    const hideDialog = () => setVisible(false);

    const getOcupationColor = () => {
        var ocupRatio = (props.ocupation_now/props.ocupation_max)*100
        return  (ocupRatio <= 100.0) && (ocupRatio > 70.0) ? "#ff000077" :   
                (ocupRatio <= 70.0) && (ocupRatio > 30.0) ? "#ffc20077" :
                (ocupRatio <= 30.0) ? "#00e39b77" : "grey"; 
    }

    return(
        <View>
            <Card mode="elevated" style={{marginHorizontal: 5, marginBottom: 5, backgroundColor: "#ffffffdd"}}>
            <Card.Content style={{}}>
                <View style={{flexDirection: "row"}}>
                    <View style={{justifyContent: "center", flex: 1, alignItems: "center"}}>
                        <Avatar.Icon {...props} icon="car-electric" />
                    </View>
                    <View style={{flex: 4, paddingLeft: 20}}>
                        <Header>{ props.estacion }</Header>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{fontWeight: "700", marginRight: 10}}>Dirección:</Text>
                            <Text>{props.direccion}</Text>
                        </View>
                        <View style={{flexDirection: "row", marginBottom: 12}}>
                            <Text style={{fontWeight: "700", marginRight: 10}}>Ocupacion:</Text>
                            <Text style={{backgroundColor: getOcupationColor(), color: "black", borderRadius: 10, paddingHorizontal: 10}}>{props.ocupation_now}/{props.ocupation_max}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: "row-reverse"}}>
                    <Button mode="contained"style={{marginLeft: 10}} onPress={() => props.openModal(props.id, props.name)}>Reservar</Button>
                </View>
            </Card.Content>
        </Card>
        </View>
    );
}
