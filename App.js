import { SafeAreaView } from "react-native";
import { Provider } from 'react-native-paper'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import SafeArea from "./SafeArea";
import 'react-native-gesture-handler';
import {
  MainScreen,
  LoginScreen,
  ArchivoAux,
  SignupScreen,
  NoPassScreen,
  ReservaElectrolinera,
  StationDetail,
  FormulariV,
  ListaV,
  ListaVAUX,
} from './src/views'
import Layout from './src/components/Layout/Layout';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import gesysReducer from './Reducer';
import Stations from './src/views/Stations';


const store = createStore(gesysReducer);
const Stack = createStackNavigator()
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { auth: false };
  }

  render() {
    return (
      <ReduxProvider store={store}>
        <SafeAreaView style={SafeArea.AndroidSafeArea}>
          <Provider theme={theme}>
            <NavigationContainer >
              <Layout />
              <Stack.Navigator initialRouteName="FormulariV" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="ArchivoAux" component={ArchivoAux} />

                <Stack.Screen name="FormulariV" component={FormulariV} />
                <Stack.Screen name="ListaV" component={ListaV} />
                <Stack.Screen name="ListaVAUX" component={ListaVAUX} />

                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="NoPassScreen" component={NoPassScreen} />
                <Stack.Screen name="ReservaElectrolinera" component={ReservaElectrolinera} />
                <Stack.Screen name="StationList" component={Stations} />
                <Stack.Screen name="StationDetail" component={StationDetail} />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        </SafeAreaView>
      </ReduxProvider>
    )
  }
}

export default App;
