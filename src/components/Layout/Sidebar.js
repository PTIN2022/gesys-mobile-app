import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
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


    return (
        <View style={props.menuVisible? s.sidebarVisible : s.sidebarInvisible}>
            <View style={s.avatarContainer}>
              <Avatar.Image style={s.avatar} size={100} source={require('../../assets/avatar.png')} />
              <Text style={s.username}>Username</Text>
            </View>
            <View style={s.avatarContainer}>
              <Menu.Item style={s.item} onPress={(e)=> nav("LoginScreen")} icon="account" title="Cuenta" />
              <Menu.Item style={s.item} onPress={(e)=> nav("Ir a pagina de Vehiculos")} icon="car" title="Vehículos" />
              <Menu.Item style={s.item} onPress={(e)=> nav("Bookings")} icon="book" title="Reservas"/>
              <Menu.Item style={s.item} onPress={(e)=> nav("Ir a pagina de Pagos y Tarjetas")} icon="credit-card" title="Pagos y tarjetas"/>
              <Menu.Item style={s.item} onPress={(e)=> nav("Ir a pagina de Ayuda")} icon="help" title="Ayuda" />
              <Menu.Item style={s.item} onPress={(e)=> nav("Ir a pagina de Informacion")} icon="information" title="Información" />
            </View>
        </View>      
    );

}

const s = StyleSheet.create({
  sidebarVisible:{
    position: "absolute",
    marginTop: 75,
    paddingVertical: 25,
    zIndex: 10,
    backgroundColor: theme.colors.primary,
    width: "60%",
    height : "1500%",
    opacity: 0.95
  },
  sidebarInvisible:{
    display: "none"
  },
  item: {
    backgroundColor: "#fff",
    borderColor: theme.colors.primary,
    borderRadius: 5,
    width: "90%",
    marginVertical: 8
  },
  avatarContainer:{
    alignItems: 'center',
  },
  username:{
    margin: 10,
    fontSize: 20,
    color: "#fff",
    fontWeight: "700"
  }
});

export default Sidebar;