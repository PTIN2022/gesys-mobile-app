import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  ArchivoAux,
} from './src/views'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ArchivoAux"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="ArchivoAux" component={ArchivoAux} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
