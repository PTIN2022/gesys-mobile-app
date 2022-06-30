import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { Menu, Avatar, Button } from 'react-native-paper';
import {theme} from '../../core/theme';
import { connect } from 'react-redux';
import { doLogout } from '../../state/actions/Auth'

class Sidebar extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      Auth: props.Auth
    }
  }
  //El sidebar es un componente del layout de la app.
  //Permite la nevegacion por las distintas pantallas de configuracion de la app.

  componentDidUpdate(props){
    console.log(this.props.Auth.logoutSuccess)
    if ((!props.Auth.loginSuccess && this.props.Auth.loginSuccess) || (!props.Auth.logoutSuccess && this.props.Auth.logoutSuccess))
      this.setState({Auth: this.props.Auth})
  }


  nav = (view) => { // Esta funcion se acciona al apretar en los distintos botones de navegacion presentes en el sidebar.
    this.props.toggleMenu()
    this.props.navigation.navigate(view)
  }

  logout = () => {
    doLogout(this.state.Auth.token)
    this.nav("LogIn")
  }

  render() {
    return this.props.menuVisible && (
        <View style={s.sidebarVisible}>
          <View style={{width: screen.width*0.75, flexDirection: "column", backgroundColor: theme.colors.primary, opacity:0.95}}>
            <View style={s.avatarContainer}>
              <Avatar.Image size={100} source={require('../../assets/avatar.png')} />
            </View>
            {this.state.Auth.cliente != null &&
                <View style={{alignItems: 'center'}}>
                  <Text style={s.username}>{this.state.Auth.cliente.nombre}</Text>
                  <Button style={{width: "50%", margin: 15}} mode='contained' color='darkred' icon="logout" onPress={()=>this.logout()}>Log out</Button>
                </View>
            }
            {this.state.Auth.cliente == null &&
                <View style={{alignItems: 'center'}}>
                  <Button style={{width: "50%", margin: 15}} mode='contained' color="white" icon="login" onPress={()=>this.nav("LogIn")}>Log in</Button>
                </View>
            }
            <ScrollView style={s.itemsContainer} contentContainerStyle={{alignItems: "center"}} persistentScrollbar indicatorStyle="black">
              {this.state.Auth.cliente != null &&
              <View>
                <Menu.Item style={s.item} onPress={(e)=> this.nav("Profile")} icon="account" title="Cuenta" />
                <Menu.Item style={s.item} onPress={(e)=> this.nav("VehiclesList")} icon="car" title="Vehículos" />
                <Menu.Item style={s.item} onPress={(e)=> this.nav("Historial")} icon="credit-card" title="Saldo y pagos" />
              </View>
              }
              <Menu.Item style={s.item} onPress={(e)=> nav("Stations")} icon="ev-station" title="Estaciones" />
              {this.state.Auth.cliente != null &&
                <View>
                  <Menu.Item style={s.item} onPress={(e)=> this.nav("BookingsList")} icon="book" title="Reservas"/>
                  <Menu.Item style={s.item} onPress={(e)=> this.nav("DealsList")} icon="ticket-percent" title="Ofertas disponibles"/>
                  <Menu.Item style={s.item} onPress={(e)=> this.nav("TicketsList")} icon="email" title="Tu buzon"/>
                  <Menu.Item style={s.item} onPress={(e)=> this.nav("Ir a pagina de Pagos y Tarjetas")} icon="credit-card" title="Pagos y tarjetas"/>
                  <Menu.Item style={s.item} onPress={(e)=> this.nav("Ir a pagina de Ayuda")} icon="help" title="Ayuda" />
                  <Menu.Item style={s.item} onPress={(e)=> this.nav("About")} icon="information" title="Información" />
                </View>
              }
              
            </ScrollView>
          </View>
          <TouchableOpacity style={{backgroundColor: "#000a", width: screen.width*0.4}} onPress={()=>this.props.toggleMenu()}></TouchableOpacity> 
        </View>   
    );
  }
}

const screen = Dimensions.get('window')

const s = StyleSheet.create({
  sidebarVisible:{
    position: "absolute",
    marginTop: 75,
    zIndex: 10,
    width: screen.width,
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
    margin: 15
  },
  itemsContainer:{
    flex: 1,
    marginBottom: screen.height*0.04,
  },
  username:{
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  }
});
const mapStateToProps = ({ Auth }) => {
  return { Auth };
};
export default connect(mapStateToProps)(Sidebar);