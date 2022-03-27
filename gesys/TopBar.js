import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isHidden: false};
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        this.setState({isHidden: !this.state.isHidden})
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
            <Icon name="list" size={25} color="white" onPress={() => alert("ok")} />
        </View>
        <Text>A</Text>
        <Text>B</Text>
        <Text>C</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#0e3bac',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default TopBar;
