import { Image, View, StyleSheet } from 'react-native'

export default function MainScreen() {

  return (
    <View>
      <Image
        style={s.map}
        source={require('../assets/map.png')}
      />
    </View>
  )
}

const s = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  }
})