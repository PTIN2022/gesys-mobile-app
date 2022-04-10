import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import LateralMenu from './LateralMenu';
import Boton from './Boton';
import React from 'react';
import { Button } from 'react-native-paper';
import { WebView } from 'react-native';
import TopBar from './TopBar';

export default class App extends React.Component{
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
      <ScrollView>
        <TopBar></TopBar>
        <Button
        icon="camera" 
        mode="contained" 
        onPress={() => this.onPress()} 
        >
        Press me
        </Button>
         <LateralMenu></LateralMenu>
      </ScrollView>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
