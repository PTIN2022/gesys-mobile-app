import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { Text } from "react-native";
import { NavigationHelpersContext } from '@react-navigation/native';
import { theme } from '../core/theme'

const TextReserva = (props) => {
  //let state = props.status;
  //console.log(state);
  if(props.status == 'Activa'){
    return(
      
      <View>
        <Text style={{color:'black'}}> 
          Estado de la reserva:
           <Text style={{backgroundColor: 'green', color:'white',textAlign:'right'}}> 
            {props.status} 
          </Text>
        </Text>
       
        
        <Text style={{color:'black'}}>{"Fecha de reserva: "+props.date}</Text>
        
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ alignSelf: 'center',backgroundColor: theme.colors.error }} onPress={() => { onCancelPress }}>
            <Text style={{ alignSelf: 'center', color: 'white', padding: 5 }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flex: 1}}>
            <TouchableOpacity style={{ alignSelf: 'center',backgroundColor: theme.colors.primary}} onPress={() => { onSavePress }}>
            <Text style={{ alignSelf: 'center', color: 'white', padding: 5 }}>Detalles</Text>
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
            <Text style={{backgroundColor: 'orange', color:'white'}}> {props.status} </Text>
        </Text>

        <Text style={{color:'black'}}>{"Fecha de reserva: "+props.date}</Text>

        <View style={{ flexDirection: "row" }}> 
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ alignSelf: 'center',backgroundColor: theme.colors.error }} onPress={() => { onCancelPress }}>
            <Text style={{ alignSelf: 'center', color: 'white', padding: 5 }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flex: 1}}>
            <TouchableOpacity style={{ alignSelf: 'center',backgroundColor: theme.colors.primary}} onPress={() => { onSavePress }}>
            <Text style={{ alignSelf: 'center', color: 'white', padding: 5 }}>Detalle</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }

}

export default function ReservaCard (props){
  const [visible, setVisible] = React.useState(true);
  const showDialog = () => props.openModal();
  const hideDialog = () => setVisible(false);

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