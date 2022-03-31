import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Menu, Avatar } from 'react-native-paper';
import {theme} from '../../core/theme'
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <View style={this.props.menuVisible? s.sidebarVisible : s.sidebarInvisible}>
            <View style={s.avatarContainer}>
              <Avatar.Image style={s.avatar} size={100} source={require('../../assets/avatar.png')} />
              <Text style={s.username}>Username</Text>
            </View>
            <Menu.Item style={s.item} onPress={(e)=> console.log("Ir a pagina de Cuenta")} icon="account" title="Cuenta" />
            <Menu.Item style={s.item} onPress={(e)=> console.log("Ir a pagina de Vehiculos")} icon="car" title="Vehiculos" />
            <Menu.Item style={s.item} onPress={(e)=> console.log("Ir a pagina de Reservas")} icon="book" title="Reservas"/>
            <Menu.Item style={s.item} onPress={(e)=> console.log("Ir a pagina de Pagos y Tarjetas")} icon="credit-card" title="Pagos y tarjetas"/>
            <Menu.Item style={s.item} onPress={(e)=> console.log("Ir a pagina de Ayuda")} icon="help" title="Ayuda" />
            <Menu.Item style={s.item} onPress={(e)=> console.log("Ir a pagina de Informacion")} icon="information" title="Informacion" />
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
    width: "60vw",
    height: "100vh",
    transition: "all 0.3s",
    paddingLeft: "0.5em"
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
    height: "3rem",
    borderRadius: "0.24em",
    paddingLeft: "2em",
    backgroundColor: "#fff",
    marginBottom: "0.5em",
    marginLeft: "0.5em",
    width: "100%"
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