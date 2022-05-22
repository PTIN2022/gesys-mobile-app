import * as React from 'react';
import { Avatar, Card, Button } from 'react-native-paper';
import {View} from 'react-native';
import Header from "./Header"
import { Text } from "react-native";

function TemplateCard (props) {

    return(
      <Card mode="elevated" style={{marginHorizontal: 5, marginBottom: 5, backgroundColor: "#ffffffdd"}}>
        <Card.Content style={{}}>
          <View style={{flexDirection: "row"}}>
            <View style={{justifyContent: "center", flex: 1, alignItems: "center"}}>
              <Avatar.Icon {...props} icon="iconname" />
            </View>
            <View style={{flex: 4, paddingLeft: 20}}>
              <Header>{ props.title }</Header>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Field1:</Text>     
                <Text> {props.plate} </Text>
              </View>
              <View style={{flexDirection: "row", marginBottom: 15}}>
                <Text style={{fontWeight: "700", marginRight: 10}}>Field2:</Text>
                <Text>{props.model}</Text>
              </View>
            </View>
            </View>
          <View style={{flexDirection: "row-reverse"}}>
                <Button mode="contained"style={{marginLeft: 10}} >Favorito</Button>
          </View>
        </Card.Content>
      </Card>
    )
}

export default TemplateCard