import * as React from 'react';
import { Avatar, Card, Button } from 'react-native-paper';
import { View, SafeAreaView } from 'react-native';
import Header from "./Header"
import { Text } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';


function DealCard(props) {

  return (

    <Card mode="elevated" style={{ marginHorizontal: 5, marginBottom: 5, backgroundColor: "#ffffffdd" }}>
      <Card.Content style={{}}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
            <Avatar.Icon icon="ticket-percent" />
          </View>
          <View style={{ flex: 4, paddingLeft: 20 }}>
            <Header>{props.title}</Header>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "700", marginRight: 10 }}>Periodo:</Text>
              <Text style={{ fontSize: 12 }}>Del {props.fecha_inicio.slice(0, 10)} al {props.fecha_fin.slice(0, 10)}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "700", marginRight: 10 }}>Descuento:</Text>
              <Text>{props.descuento}%</Text>
            </View>
            <ScrollView>
              <View style={{ flexDirection: "row", height: 100, width: 150 }}>
                <Text style={{ fontWeight: "700", marginRight: 10 }}>Descripcion:</Text>
                <Text style={{ fontSize: 9 }}>{props.descripcion}</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Card.Content>
    </Card>
  )
}

export default DealCard