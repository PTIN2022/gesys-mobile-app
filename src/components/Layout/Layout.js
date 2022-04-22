import * as React from 'react';
import { View } from 'react-native';
import Sidebar from './Sidebar';
import Topbar from './Topbar';


class Layout extends React.Component {
  //El layout es un componente que envuelve el contenido de la app.
  //Esta compuesto por el header (cabecera) y un sidebar (menu lateral).

  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false //Variable que controla estado del menu lateral. False: Escondido, True: Visible
    }; 
    this.toggleMenu = this.toggleMenu.bind(this); //Funcion que modifica el estado del componente layout.
  }

  toggleMenu = ()=> {this.setState({menuVisible: !this.state.menuVisible})}
  //Esta funcion se accion desde los subcomponentes del layout. Se encarga de esconder y mostrar el sidebar (menu lateral).
  
  render() {
    return (
        <View>
          <Sidebar menuVisible={this.state.menuVisible} toggleMenu={this.toggleMenu}/>
          <Topbar menuVisible={this.state.menuVisible} toggleMenu={this.toggleMenu}/>
          
        </View>      
    );
  }

}

export default Layout;