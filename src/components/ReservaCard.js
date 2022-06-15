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
              <Avatar.Icon {...props} icon="book" />
            </View>
            <View style={{flex: 4, paddingLeft: 20}}>
              <Header>{ props.name }</Header>
              <View style={{flexDirection: "row"}}> 
                <Text style={{fontWeight: "700", marginRight: 10}}>Estado de la reserva:</Text>     
                { props.status=='Activa' && 
                  (<Text style={{backgroundColor: '#00e39b88', color: "black", borderRadius: 10, paddingHorizontal: 10}}> {props.status} </Text>)
                }
                { props.status=='Terminada' && 
                  (<Text style={{backgroundColor: 'lightgrey', color: "black", borderRadius: 10, paddingHorizontal: 10}}> {props.status} </Text>)
                }
              </View>
              <View style={{flexDirection: "row", marginBottom: 10}}>
                <Text style={{fontWeight: "700", marginRight: 10}}>Fecha de reserva: </Text>
                <Text>{props.from} - {props.upto}</Text>
              </View>
              <View style={{flexDirection: "row", marginBottom: 10}}>
                <Text style={{fontWeight: "700", marginRight: 10}}>Cargador: </Text>
                <Text>{props.charger}</Text>
              </View>
              <View style={{flexDirection: "row", marginBottom: 10}}>
                <Text style={{fontWeight: "700", marginRight: 10}}>Vehículo: </Text>
                <Text>{props.car}</Text>
              </View>
              <View style={{flexDirection: "row", marginBottom: 10}}>
                <Text style={{fontWeight: "700", marginRight: 10}}>Precio: </Text>
                <Text>10</Text>
              </View>
            </View>
            </View>
          <View style={{flexDirection: "row-reverse"}}>
                <Button style={{marginLeft: 10}} mode="contained" onPress={() => { showDialog() }}>Detalle</Button>
                { props.status=='Activa' && 
                  (<Button mode="outlined" color='red' onPress={() => { showDialog() }}>Cancelar</Button>)
                }
          </View>
        </Card.Content>
      </Card>
    )
}

export default TextReserva