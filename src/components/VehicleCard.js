import * as React from 'react';
import { Avatar, Card, Badge, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import {View} from 'react-native';
import { Dialog, Portal, Provider } from 'react-native-paper';
import Header from "../components/Header"
import { Text } from "react-native";
import { NavigationHelpersContext } from '@react-navigation/native';
import { theme } from '../core/theme'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function TextReserva (props) {

  const [visible, setVisible] = React.useState(true);
  const showDialog = () => props.openModal();
  const hideDialog = () => setVisible(false);

    return(
      <Card style={{marginHorizontal: 5, marginBottom: 5, backgroundColor: "#ffffffdd"}}>
        <Card.Content style={{}}>
          <View style={{flexDirection: "row"}}>
            <View style={{justifyContent: "center", flex: 1, alignItems: "center"}}>
              <Avatar.Icon {...props} icon="car-side" />
            </View>
            <View style={{flex: 4, paddingLeft: 20}}>
              <Header>{ props.name }</Header>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Matricula:</Text>     
                <Text> {props.plate} </Text>
              </View>
              <View style={{flexDirection: "row", marginBottom: 15}}>
                <Text style={{fontWeight: "700", marginRight: 10}}>Modelo:</Text>
                <Text>{props.model}</Text>
              </View>
            </View>
            </View>
          <View style={{flexDirection: "row-reverse"}}>
                <Button mode="contained"style={{marginLeft: 10}} >Favorito</Button>
                <Button mode="outlined" color='red'>Eliminar</Button>
          </View>
        </Card.Content>
      </Card>
    )
}

export default TextReserva