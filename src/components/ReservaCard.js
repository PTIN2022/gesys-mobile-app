import * as React from 'react';
import { Avatar, Card, IconButton, Button } from 'react-native-paper';
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
      <Card style={{marginHorizontal: 5, marginTop: 5}}>
        <Card.Content>
          <View style={{flexDirection: "row"}}>
            <View style={{justifyContent: "center", flex: 1, alignItems: "center"}}>
              <Avatar.Icon {...props} icon="map" />
            </View>
            <View style={{flex: 4, paddingLeft: 20}}>
              <Header>{props.name}</Header>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Estado de la reserva:</Text>     
                {props.status=='Activa' && 
                  (<Text style={{backgroundColor: '#00e39b', color: "white", borderRadius: 10, paddingHorizontal: 5}}> {props.status} </Text>)}
                {props.status=='Terminada' && 
                  (<Text style={{backgroundColor: 'grey', color: "white", borderRadius: 10, paddingHorizontal: 5}}> {props.status} </Text>)}
              </View>
              <View style={{flexDirection: "row", marginBottom: 15}}>
                <Text style={{fontWeight: "700", marginRight: 10}}>Fecha de reserva: </Text>
                <Text>{props.date}</Text>
              </View>
            </View>
            </View>
          <View style={{flexDirection: "row-reverse"}}>
                <Button style={{marginLeft: 10}} mode="contained" onPress={() => { showDialog() }}>Detalle</Button>
                {props.status=='Activa' && (<Button mode="outlined" color='red' onPress={() => { showDialog() }}>Cancelar</Button>)}
          </View>
        </Card.Content>
      </Card>
    )
}

export default TextReserva