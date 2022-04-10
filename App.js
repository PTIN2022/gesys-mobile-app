import React from 'react'
import { SafeAreaView } from "react-native";
import { Provider } from 'react-native-paper'
import React, {useState} from 'react'
import { Provider as Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import SafeArea from "./SafeArea";
import Topbar from './src/components/Layout/Topbar'
import 'react-native-gesture-handler';
import {
  MainScreen,
  LoginScreen,
  ArchivoAux,
  SignupScreen,
  NoPassScreen,
} from './src/views'
import Layout from './src/components/Layout/Layout';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import gesysReducer from './Reducer';

const store = createStore(gesysReducer);
const Stack = createStackNavigator()
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {auth: false};
  }

  render(){
    return(
      <ReduxProvider store={store}>
        <Provider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="StationsList" screenOptions={{headerShown: false}}>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen name="ArchivoAux" component={ArchivoAux} />
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
              <Stack.Screen name="NoPassScreen" component={NoPassScreen} />
              <Stack.Screen name="StationsList" component={Stations} />
            </Stack.Navigator>
          </NavigationContainer>
          <Layout />
        </Provider>
      </ReduxProvider>
    )
  }
}

export default App;
