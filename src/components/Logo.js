import React from 'react'
import { Image, StyleSheet } from 'react-native'

//Esta función exporta el logo para poder utilizarlo en las diferentes pantallas.
export default function Logo() {
  return <Image source={require('../assets/logo.png')} style={styles.image} />
}

//Establecemos el estilo del  logo.
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 180,
    height: 180,
  },
})
