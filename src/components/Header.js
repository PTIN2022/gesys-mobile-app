import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

//Esta función exporta el elemento "header" para poder utilizarla como base en las demás pantallas.
export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

//Establecemos el estilo del header
const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold'
  },
})
