import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import image from './assets/Còpia de Logo1fin.png'

export default function App() {
  return (


    <View style={styles.container}>
      <Image source={image}
        style={styles.ima}
      />
      <Text style={styles.txt}>
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"Introduce su email para poder recuperar su contraseña"}
      </Text>
      <TextInput
        title="introduzca su email"
        style={styles.input}
      />
      <Button
        color="#0e3bac"
        title="ENVIAR"
        onPress={() => Alert.alert('El correo ha sido enviado con exito')}
      />
      <StatusBar style="auto" />


    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 5,
  },
  ima: {
    height: 200, width: 200, paddingTop: 10,
    alignItems: 'center', justifyContent: 'flex-start',
  },
  txt: {
    fontSize: 10,
  },
  input: {
    height: 40,
    width: 245,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

