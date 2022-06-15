import React, {useEffect, useState} from 'react';
import { View, AsyncStorage } from 'react-native';
import Sidebar from './Sidebar';
import Topbar from './Topbar';


function Layout (props) {
  //El layout es un componente que envuelve el contenido de la app.
  //Esta compuesto por el header (cabecera) y un sidebar (menu lateral).

  const [menuVisible, setMenuVisible] = useState(false)
  const [auth, setAuth] = useState(false)

  const toggleMenu = ()=> {setMenuVisible(!menuVisible)}
  //Esta funcion se accion desde los subcomponentes del layout. Se encarga de esconder y mostrar el sidebar (menu lateral).
  
  return (
    <View>
        <Sidebar menuVisible={menuVisible} toggleMenu={toggleMenu}/>
        <Topbar menuVisible={menuVisible} toggleMenu={toggleMenu} {...props}/>
    </View> 
  )
}

export default Layout;