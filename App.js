import React from 'react'
import { SafeAreaView } from "react-native";
import { Provider } from 'react-native-paper'
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
  StationDetail,
} from './src/views'
import Layout from './src/components/Layout/Layout';

const Stack = createStackNavigator()
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {auth: false};
  }

  render(){
    return (
      <SafeAreaView style={SafeArea.AndroidSafeArea}>
        <Provider theme={theme}>
          <NavigationContainer >
            <Layout />
            <Stack.Navigator  initialRouteName="StationDetail" screenOptions={{headerShown: false}}>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen name="ArchivoAux" component={ArchivoAux} />
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
              <Stack.Screen name="NoPassScreen" component={NoPassScreen} />
              <Stack.Screen name="StationDetail" component={StationDetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    )
  }
}

export default App