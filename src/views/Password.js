import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import Background from '../components/Background';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { emailValidator } from '../helpers/emailValidator'
import { useState } from 'react';
import AppBack from '../components/AppBack';
import React, { Component } from 'react'


class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ({ value: 'example@example.com', error: '' }),
      setEmail: ({ value: 'example@example.com', error: '' })
    };
  }

  componentDidMount() {
  }
  componentDidUpdate() {
  }

  render() {
    return (
      <Background>
        <AppBack title="Recuperacion de contraseña" backScreenName="LogIn" />
        <View style={{ flexDirection: "column", alignItems: "center", paddingHorizontal: "10%" }}>
          <Image source={require('../assets/logo.png')}
            style={styles.ima}
          />
          <TextInput
            label="Email"
            returnKeyType="next"
            value={this.state.email.value}
            onChangeText={(text) => this.setState({ setEmail: ({ value: text, error: '' }) })}
            error={!!this.state.email.error}
            errorText={this.state.email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <Button mode="contained" onPress={() => {
            const emailError = emailValidator(this.state.email.value) //Comprobamos si el correo introducido por el usuario es válido
            if (emailError) {
              setEmail({ ...this.state.email, error: emailError })
              return
            }
            this.props.navigation.replace('LogIn')
          }}>
            Recuperar contraseña
          </Button>
        </View>
      </Background>
    );
  }
}

export default Password;


/*
//Esta función exporta la pantalla de NoPassScreen para poder utilizarla como una view.
export default function NoPassScreen({navigation}) {

  const [email, setEmail] = useState({ value: 'example@example.com', error: '' })

  //Establecemos el aspecto que tendrá la pantalla
  return (

    <Background>
      <AppBack title="Recuperacion de contraseña" backScreenName="LogIn"/>
      <View style={{flexDirection: "column", alignItems: "center", paddingHorizontal: "10%"}}>
        <Image source={require('../assets/logo.png')}
          style={styles.ima}
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Button mode="contained" onPress={()=>{
          const emailError = emailValidator(email.value) //Comprobamos si el correo introducido por el usuario es válido
          if (emailError){
            setEmail({ ...email, error: emailError })
            return
          }
          navigation.replace('LoginScreen')
        }}>
          Recuperar contraseña
        </Button>
      </View>
    </Background>


  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 5,
  },
  ima: {
    height: 200, width: 200, paddingTop: 10,
    alignItems: 'center', justifyContent: 'flex-start',
  },
  txt: {
    fontSize: 16,
  },
});