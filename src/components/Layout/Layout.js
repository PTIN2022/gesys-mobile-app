import * as React from 'react';
import { View } from 'react-native';
import Sidebar from './Sidebar';
import Topbar from './Topbar';


class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {menuVisible: false};
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = ()=> {this.setState({menuVisible: !this.state.menuVisible})}
  
  render() {
    return (
        <View>
          <Topbar menuVisible={this.state.menuVisible} toggleMenu={this.toggleMenu}/>
          <Sidebar menuVisible={this.state.menuVisible} toggleMenu={this.toggleMenu}/>
        </View>      
    );
  }

}

export default Layout;