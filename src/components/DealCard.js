import * as React from 'react';
import { Avatar, Card, Button } from 'react-native-paper';
import {View} from 'react-native';
import Header from "./Header"
import { Text } from "react-native";

function DealCard (props) {

    return(
      <Card mode="elevated" style={{marginHorizontal: 5, marginBottom: 5, backgroundColor: "#ffffffdd"}}>
        <Card.Content style={{}}>
          <View style={{flexDirection: "row"}}>
            <View style={{justifyContent: "center", flex: 1, alignItems: "center"}}>
              <Avatar.Icon icon="ticket-percent" />
            </View>
            <View style={{flex: 4, paddingLeft: 20}}>
              <Header>{ props.title }</Header>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Estacion:</Text>     
                <Text> {props.estacion} </Text>
              </View>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Periodo:</Text>     
                <Text>Del {props.fecha_inicio} al {props.fecha_fin}</Text>
              </View>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Descuento:</Text>     
                <Text>{props.descuento}%</Text>
              </View>
            </View>
            </View>
          <View style={{flexDirection: "row-reverse"}}>
                {props.estado 
                  ? <Button mode="contained"style={{marginLeft: 10}} >Canjealo</Button>
                  : <Button mode="outlined" color={"grey"} style={{marginLeft: 10}} >No disponible</Button>
                }
          </View>
        </Card.Content>
      </Card>
    )
}

export default DealCard