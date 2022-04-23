import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { Text } from "react-native";
import { NavigationHelpersContext } from '@react-navigation/native';
import { theme } from '../core/theme'

const TextReserva = (props) => {
  const [visible, setVisible] = React.useState(true);
  const showDialog = () => props.openModal();
  const hideDialog = () => setVisible(false);
  //let state = props.status;
  //console.log(state);
  if(props.status == 'Activa'){
    return(
      
      <View>
        <Text style={{color:'black'}}> 
            Estado de la reserva:      
            <Text style={{backgroundColor: 'green', color:'white', marginLeft: '20%'}}> {props.status} </Text>
        </Text>

        <Text style={{color:'black'}}>
          Fecha de reserva:
          <Text style={{marginLeft: '27%'}}>
            {props.date}
          </Text>
         
        </Text>

        <View style={{ flexDirection: "row" }}> 
          <View style={{ flex: 1, marginLeft: '25%', marginRight:'20%'}}>
            <TouchableOpacity style={{ alignSelf: 'center',backgroundColor: theme.colors.error }} onPress={() => { showDialog() }}>
            <Text style={{ alignSelf: 'center',color: 'white', paddingLeft: 30, paddingRight: 30, paddingBottom:3, paddingTop:3}}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flex: 1, marginLeft: '65%', marginRight:'10%'}}>
            <TouchableOpacity style={{ alignSelf: 'center',backgroundColor: theme.colors.primary}} onPress={() => { showDialog() }}>
            <Text style={{ alignSelf: 'center',color: 'white', paddingLeft: 30, paddingRight: 30, paddingBottom:3, paddingTop:3}}>Detalle</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  } else {
    return(
      <View>
        <Text style={{color:'black'}}> 
            Estado de la reserva:      
            <Text style={{backgroundColor: 'orange', color:'white', marginLeft: '20%'}}> {props.status} </Text>
        </Text>

        <Text style={{color:'black'}}>
          Fecha de reserva:
          <Text style={{marginLeft: '27%'}}>
            {props.date}
          </Text>
         
        </Text>

        <View style={{ flexDirection: "row" }}> 
          <View style={{ flex: 1, marginLeft: '25%', marginRight:'20%'}}>
            <TouchableOpacity style={{ alignSelf: 'center',backgroundColor: theme.colors.error }} onPress={() => { showDialog() }}>
            <Text style={{ alignSelf: 'center',color: 'white', paddingLeft: 30, paddingRight: 30, paddingBottom:3, paddingTop:3}}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flex: 1, marginLeft: '65%', marginRight:'10%'}}>
            <TouchableOpacity style={{ alignSelf: 'center',backgroundColor: theme.colors.primary}} onPress={() => { showDialog() }}>
            <Text style={{ alignSelf: 'center',color: 'white', paddingLeft: 30, paddingRight: 30, paddingBottom:3, paddingTop:3}}>Detalle</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }

}

export default function ReservaCard (props){
  

  return(
    <View>
        <Card.Title
            title={props.name}
            subtitle={<TextReserva {...props} />}
            left={(props) => <Avatar.Icon {...props} icon="map" />}
            
        />
    </View>
  );
}