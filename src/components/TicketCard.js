import * as React from 'react';
import { Avatar, Card, Button } from 'react-native-paper';
import {View} from 'react-native';
import Header from "./Header"
import { Text } from "react-native";

function TicketCard (props) {

    return(
      <Card mode="elevated" style={{marginHorizontal: 5, marginBottom: 5, backgroundColor: "#ffffffdd"}}>
        <Card.Content style={{}}>
          <View style={{flexDirection: "row"}}>
            <View style={{justifyContent: "center", flex: 1, alignItems: "center"}}>
              <Avatar.Icon {...props} icon="email" />
            </View>
            <View style={{flex: 4, paddingLeft: 20}}>
              <Header>{props.title}</Header>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Asunto:</Text>     
                <Text> {props.asunto} </Text>
              </View>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Fecha:</Text>     
                <Text> {props.fecha} </Text>
              </View>
              <View style={{marginBottom: 15}}>
                <Text style={{fontWeight: "700"}}>Ultimo mensaje:</Text>
                <Text style={{borderWidth: 1, flex:1, marginLeft: 10, marginTop: 5, padding: 10, borderRadius: 5}}>{props.mensaje}</Text>
              </View>
            </View>
            </View>
          <View style={{flexDirection: "row-reverse"}}>
                <Button mode="contained"style={{marginLeft: 10}}>Detalle</Button>
          </View>
        </Card.Content>
      </Card>
    )
}

export default TicketCard