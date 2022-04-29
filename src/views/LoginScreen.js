import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'


//Esta función exporta la pantalla de LogIn para poder utilizarla como una view.
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: 'example@example.com', error: '' }) //Ponemos unos valores de ejemplo para el correo
  const [password, setPassword] = useState({ value: 'Secret!2022', error: '' }) //Ponemos unos valores de ejemplo para la contrasña

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value) //Comprobamos que el correo introducido sea válido
    const passwordError = passwordValidator(password.value) //Comprobamos que la contraseña introducida sea válida
    if (emailError || passwordError) { 
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    //navigation.navigate('StationList')
    navigation.navigate('MainScreen') //Si tanto el correo como la contraseña son válidos, navegamos al mainscreen
    //navigation.navigate('BookingList')
  }

  //Establecemos el aspecto que tendrá la pantalla
  return (
    <Background>
      <View style={{flexDirection: "column", alignItems: "center", padding: 10}}>
        <Logo />
        <Header>Bienvenido a GeSyS</Header>
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
        <TextInput
          label="Contraseña"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NoPassScreen')}
          >
            <Text style={styles.forgot}>Has olvidado tu contraseña?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={onLoginPressed}>
          Login
        </Button>
        <View style={{flexDirection: "row", marginTop:10}}>
          <Text>No tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.replace('SignupScreen')}>
            <Text style={styles.link}>Regístrate</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: "row", marginTop:5}}>
          <Text>O bien,  </Text>
          <TouchableOpacity onPress={() => navigation.replace('ArchivoAux')}>
            <Text style={styles.noregister}>continúa sin registrarte ❯</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: "column", flex:1,  justifyContent: "flex-end", alignItems: "center", paddingBottom: 10}}>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => navigation.replace('ArchivoAux')}>
            <Text style={styles.forgot}>About </Text>
          </TouchableOpacity>
          <Text> | </Text>
          <TouchableOpacity onPress={() => navigation.replace('ArchivoAux')}>
            <Text style={styles.forgot}>Network </Text>
          </TouchableOpacity>
          <Text> | </Text>
          <TouchableOpacity onPress={() => navigation.replace('ArchivoAux')}>
            <Text style={styles.forgot}>Contact </Text>
          </TouchableOpacity>
          <Text> | </Text>
          <TouchableOpacity onPress={() => navigation.replace('ArchivoAux')}>
            <Text style={styles.forgot}>Website </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  )
}

//Establecemos los diferentes estilos que tiene esta view
const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.link,
    textDecorationLine: 'underline',
  },
  noregister: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
