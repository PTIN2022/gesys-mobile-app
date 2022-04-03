import React, {useState} from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import Layout from './src/components/Layout/Layout'
import {
  MainScreen,
  LoginScreen,
  ArchivoAux,
  SignupScreen,
} from './src/views'

const Stack = createStackNavigator()
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {auth: false};
  }

  render(){
    return (
      <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="ArchivoAux" component={ArchivoAux} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <Layout />
      </Provider>
    )
  }
}

export default App