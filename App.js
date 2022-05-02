import { SafeAreaView, AsyncStorage } from "react-native";
import { Provider } from 'react-native-paper'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import SafeArea from "./SafeArea";
import 'react-native-gesture-handler';
import {
  Landing,
  LogIn,
  SignUp,
  Password,
  Stations,
  StationsList,
  StationDetail,
  VehiclesList,
  VehicleForm,
  BookingsList,
  BookingForm,
} from './src/views'
import Layout from './src/components/Layout/Layout';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import gesysReducer from './Reducer';
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
              <Stack.Navigator  initialRouteName="LogIn" screenOptions={{headerShown: false}}>

                {/*AUTENTICACION*/}
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="LogIn" component={LogIn}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="Password" component={Password}/>

                {/*ESTACIONES*/}
                <Stack.Screen name="Stations" component={Stations}/>
                <Stack.Screen name="StationDetail" component={StationDetail} />
                <Stack.Screen name="StationsList" component={StationsList} />

                {/*VEHICULOS*/}
                <Stack.Screen name="VehiclesList" component={VehiclesList} />
                <Stack.Screen name="VehicleForm" component={VehicleForm} />

                {/*RESERVAS*/}
                <Stack.Screen name="BookingsList" component={BookingsList} />
                <Stack.Screen name="BookingForm" component={BookingForm} />

              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        </SafeAreaView>
      </ReduxProvider>
    )
  }
}

export default App;