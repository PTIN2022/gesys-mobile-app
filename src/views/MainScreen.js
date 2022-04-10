import { Image, View, StyleSheet } from 'react-native'
import ElectrolineraCard from '../components/ElectrolineraCard'

export default function MainScreen() {

  return (
    <View>
      <ElectrolineraCard />
    </View>
  )
}

const s = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  }
})