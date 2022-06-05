import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { Menu, Avatar } from 'react-native-paper';
import {theme} from '../../core/theme';
import { useNavigation } from '@react-navigation/native';

function Sidebar(props){

  //El sidebar es un componente del layout de la app.
  //Permite la nevegacion por las distintas pantallas de configuracion de la app.


  const navigation = useNavigation();

  const nav = (view) => { // Esta funcion se accion al apretar en los distintos botones de navegacion presentes en el sidebar.
    props.toggleMenu()
    navigation.navigate(view)
  }


    return props.menuVisible && (
        <View style={s.sidebarVisible}>
          <View style={{width: screen.width*0.75, flexDirection: "column", backgroundColor: theme.colors.primary, opacity:0.95}}>
            <View style={s.avatarContainer}>
              <Avatar.Image style={s.avatar} size={100} source={require('../../assets/avatar.png')} />
              <Text style={s.username}>Username</Text>
            </View>
            <ScrollView style={s.itemsContainer} contentContainerStyle={{alignItems: "center"}} persistentScrollbar indicatorStyle="black">
              <Menu.Item style={s.item} onPress={(e)=> nav("Profile")} icon="account" title="Cuenta" />
              <Menu.Item style={s.item} onPress={(e)=> nav("VehiclesList")} icon="car" title="Vehículos" />
              <Menu.Item style={s.item} onPress={(e)=> nav("Stations")} icon="ev-station" title="Estaciones" />
              <Menu.Item style={s.item} onPress={(e)=> nav("BookingsList")} icon="book" title="Reservas"/>
              <Menu.Item style={s.item} onPress={(e)=> nav("DealsList")} icon="ticket-percent" title="Ofertas disponibles"/>
              <Menu.Item style={s.item} onPress={(e)=> nav("TicketsList")} icon="email" title="Tu buzon"/>
              <Menu.Item style={s.item} onPress={(e)=> nav("Ir a pagina de Pagos y Tarjetas")} icon="credit-card" title="Pagos y tarjetas"/>
              <Menu.Item style={s.item} onPress={(e)=> nav("Ir a pagina de Ayuda")} icon="help" title="Ayuda" />
              <Menu.Item style={s.item} onPress={(e)=> nav("About")} icon="information" title="Información" />
              <Menu.Item style={s.item} onPress={(e)=> nav("TicketsList")} icon="email" title="Tu buzon"/>
            </ScrollView>
          </View>
          <TouchableOpacity style={{backgroundColor: "#000a", width: screen.width*0.4}} onPress={()=>props.toggleMenu()}></TouchableOpacity>
            
          
        </View>
           
    );

}

const screen = Dimensions.get('window')

const s = StyleSheet.create({
  sidebarVisible:{
    position: "absolute",
    marginTop: 75,
    zIndex: 10,
    width: screen.height,
    height : screen.height-75,
    flexDirection: "row",
  },
  item: {
    backgroundColor: "#fff",
    width: screen.width*0.65,
    borderRadius: 5,
    marginVertical: 5,
    elevation: 500,
  },
  avatarContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    height: screen.height*0.2,
    marginTop: screen.height*0.025,
  },
  itemsContainer:{
    flex: 1,
    marginTop: screen.height*0.025,
    marginBottom: screen.height*0.04,
  },
  username:{
    fontSize: 20,
    color: "#fff",
    fontWeight: "700"
  }
});

export default Sidebar;