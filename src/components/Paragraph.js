import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

//Esta función exporta el eemento "parágrafo" para poder utilizarlo como base en las demás pantallas.
export default function Paragraph(props) {
  return <Text style={styles.text} {...props} />
}

//Establecemos el estilo del parágrafo.
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    textAlignVertical: 'top',
    marginBottom: 12,
  },
})
