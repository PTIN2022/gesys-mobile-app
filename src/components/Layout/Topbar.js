import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IconButton } from 'react-native-paper'
import {theme} from '../../core/theme'
class Topbar extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <View style={s.topbar}>
          <IconButton 
            icon={!this.props.menuVisible? "menu" : "chevron-left"} 
            size={32}
            style={{borderRadius: "0.25em", backgroundColor: theme.colors.primary, marginVertical: "auto"}}
            color={"#fff"}
            onPress={()=>this.props.toggleMenu()}
          ></IconButton>
        </View>      
    )
  }
}

const s = StyleSheet.create({
  topbar: {
    backgroundColor: theme.colors.secondary,
    position: "fixed",
    top: 0,
    zIndex: 9999,
    height: "4rem",
    width: "100vw",
    padingVertical: "auto",
    paddingHorizontal: "1em"
  }
});
export default Topbar;