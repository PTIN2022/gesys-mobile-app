import { SafeAreaView } from "react-native";
import { Provider } from 'react-native-paper'
import React, {useState} from 'react'
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
import Stations from './src/views/Stations';
import Bookings from './src/views/Bookings';

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
        <SafeAreaView style={SafeArea.AndroidSafeArea}>
          <Provider theme={theme}>
            <NavigationContainer >
              <Layout />
              <Stack.Navigator  initialRouteName="LoginScreen" screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="ArchivoAux" component={ArchivoAux} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="NoPassScreen" component={NoPassScreen} />
                <Stack.Screen name="StationList" component={Stations} />
                <Stack.Screen name="BookingList" component={Bookings} />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        </SafeAreaView>
      </ReduxProvider>
    )
  }
}

export default App;
