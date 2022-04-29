import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'

//Esta funcion exporta el Background  para que se pueda utilizar para las diferentes pantallas.
//En nuestro caso el background se basa en un asset.
export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../assets/fondo_possible.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

//Establecemos el estilo del background (el alignment, padding, etc.)
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
  },
})
