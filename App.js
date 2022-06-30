import { SafeAreaView } from "react-native";
import { Provider } from 'react-native-paper'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as ReduxProvider } from 'react-redux'
import createMyStore from "./src/state/store"
import { theme } from './src/core/theme'
import SafeArea from "./SafeArea";
import 'react-native-gesture-handler';
import Layout from './src/components/Layout/Layout';
import {
  Landing,
  LogIn,
  SignUp,
  Password,
  Stations,
  StationDetail,
  VehiclesList,
  VehicleForm,
  BookingsList,
  BookingForm,
  DealsList,
  NotificationsList,
  TicketsList,
  Profile,
  ModifyProfile,
  About,
  PrivacyPolicy,
  UsageTerms,
  Error,
  Historial
} from './src/views'
  let store = createMyStore()


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
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="Password" component={Password}/>

                {/*ESTACIONES*/}
                <Stack.Screen name="Stations" component={Stations}/>
                <Stack.Screen name="StationDetail" component={StationDetail} />

                {/*VEHICULOS*/}
                <Stack.Screen name="VehiclesList" component={VehiclesList} />
                <Stack.Screen name="VehicleForm" component={VehicleForm} />

                {/*RESERVAS*/}
                <Stack.Screen name="BookingsList" component={BookingsList} />
                <Stack.Screen name="BookingForm" component={BookingForm} />

                {/*TICKETS*/}
                <Stack.Screen name="TicketsList" component={TicketsList} />

                {/*OFERTAS*/}
                <Stack.Screen name="DealsList" component={DealsList} />
                
                {/*NOTIFICATIONS*/}
                <Stack.Screen name="NotificationsList" component={NotificationsList} />

                {/*USUARIO*/}
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="ModifyProfile" component={ModifyProfile} />

                {/* HISTORIAL */}
                <Stack.Screen name="Historial" component={Historial} />

                {/*APP*/}
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
                <Stack.Screen name="UsageTerms" component={UsageTerms} />
                <Stack.Screen name="Error" component={Error} />

              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        </SafeAreaView>
      </ReduxProvider>
    )
  }
}

export default App;