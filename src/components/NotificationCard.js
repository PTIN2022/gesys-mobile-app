import * as React from 'react';
import { Avatar, Card, Button } from 'react-native-paper';
import {View} from 'react-native';
import Header from "./Header"
import { Text } from "react-native";

function NotificationCard (props) {

    return(
      <Card mode="elevated" style={{marginHorizontal: 5, marginBottom: 5, backgroundColor: "#ffffffdd"}}>
        <Card.Content style={{}}>
          <View style={{flexDirection: "row"}}>
            <View style={{justifyContent: "center", flex: 1, alignItems: "center"}}>
              <Avatar.Icon icon="bell-alert" />
            </View>
            <View style={{flex: 4, paddingLeft: 20}}>
              <Header>{ props.tipo }</Header>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Reserva:</Text>     
                <Text> {props.reserva} </Text>
              </View>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Estacion:</Text>     
                <Text> {props.estacion} </Text>
              </View>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Hora:</Text>     
                <Text>{props.hora} </Text>
              </View>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Vehiculo:</Text>     
                <Text>{props.vehiculo}%</Text>
              </View>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Texto:</Text>     
                <Text>{props.texto}%</Text>
              </View>
            </View>
            </View>
          
        </Card.Content>
      </Card>
    )
}

export default NotificationCard