import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Menu, Avatar } from 'react-native-paper';
import {theme} from '../../core/theme'
class Sidebar extends React.Component {

  //El sidebar es un componente del layout de la app.
  //Permite la nevegacion por las distintas pantallas de configuracion de la app.

  constructor(props) {
    super(props);
  }
  
  navigate(view){ // Esta funcion se accion al apretar en los distintos botones de navegacion presentes en el sidebar.
    this.props.toggleMenu()
    console.log(view)
  }

  render() {
    return (
        <View style={this.props.menuVisible? s.sidebarVisible : s.sidebarInvisible}>
            <View style={s.avatarContainer}>
              <Avatar.Image style={s.avatar} size={100} source={require('../../assets/avatar.png')} />
              <Text style={s.username}>Username</Text>
            </View>
            <Menu.Item style={s.item} onPress={(e)=> this.navigate("Ir a pagina de Cuenta")} icon="account" title="Cuenta" />
            <Menu.Item style={s.item} onPress={(e)=> this.navigate("Ir a pagina de Vehiculos")} icon="car" title="Vehículos" />
            <Menu.Item style={s.item} onPress={(e)=> this.navigate("Ir a pagina de Reservas")} icon="book" title="Reservas"/>
            <Menu.Item style={s.item} onPress={(e)=> this.navigate("Ir a pagina de Pagos y Tarjetas")} icon="credit-card" title="Pagos y tarjetas"/>
            <Menu.Item style={s.item} onPress={(e)=> this.navigate("Ir a pagina de Ayuda")} icon="help" title="Ayuda" />
            <Menu.Item style={s.item} onPress={(e)=> this.navigate("Ir a pagina de Informacion")} icon="information" title="Información" />
        </View>      
    );
  }

}

const s = StyleSheet.create({
  sidebarVisible:{
    position: "fixed",
    zIindex: 9999,
    top: "4rem",
    backgroundColor: theme.colors.primary,
    opacity: "0.95",
    width: "60vw",
    height: "100vh",
    transition: "all 0.3s",
    paddingHorizontal: "0.5em"
  },
  sidebarInvisible:{
    position: "fixed",
    zIindex: 9999,
    top: "4rem",
    backgroundColor: "#fff",
    width: "60vw",
    height: "100vh",
    transform: "translateX(-60vw)",
    transition: "all 0.3s"
  },
  item: {
    height: "2.5rem",
    backgroundColor: "#fff",
    borderColor: theme.colors.primary,
    borderRadius: "0.25em",
    width: "100",
    marginBottom: "0.5em"
  },
  avatarContainer:{
    alignItems: 'center',
    padding: "1.5em",
  },
  username:{
    marginTop: "0.25em",
    fontSize: "20px",
    color: "#fff",
    fontWeight: 700
  }
});

export default Sidebar;