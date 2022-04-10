import * as React from 'react';
import { View } from 'react-native';
import { Menu } from 'react-native-paper';

class LateralMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHidden: true};
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.setState({isHidden: !this.state.isHidden})
  }
  
  render() {
    return (<View>
      {this.state.isHidden ? 
        <View style={{ flex: 1 }}>
          <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
          <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
          <Menu.Item icon="content-cut" onPress={() => {}} title="Cut" disabled />
          <Menu.Item icon="content-copy" onPress={() => {}} title="Copy" disabled />
          <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
        </View>      
      : null}
    </View>
    );
  }

}

export default LateralMenu;