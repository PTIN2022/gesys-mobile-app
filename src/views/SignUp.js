import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import TextInput from '../components/TextInput'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { apellidoValidator } from '../helpers/apellidoValidator'
import AppBack from '../components/AppBack'

//Hacemos uso de los helpers para validar los datos introducidos por el usuario
//Para eso exportamos la funcion SingupScreen que hará validacion de todos los apartados en su pantalla
export default function SignupScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [apellido, setApellido] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const apellidoError = apellidoValidator(apellido.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setApellido({ ...name, error: apellidoError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }
//Comienza la pagina en si
  return (
    <Background>
      <AppBack title="Registro de usuario" backScreenName="LogIn"/>

      <View style={{flexDirection: "column", alignItems: "center", paddingHorizontal: "10%"}}>
        <Logo />
        <TextInput
          label="Nombre"
          returnKeyType="next"
          //Usamos el helper para validar
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
        />
        <TextInput
          label="Apellido"
          returnKeyType="next"
          //Usamos el helper para validar
          value={apellido.value}
          onChangeText={(text) => setApellido({ value: text, error: '' })}
          error={!!apellido.error}
          errorText={apellido.error}
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          //Usamos el helper para validar
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
          label="Password"
          returnKeyType="done"
          //Usamos el helper para validar
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Button
          mode="contained"
          //Boton para activar los helpers, en caso de error nos resaltará los campos erroneos
          onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          Registrate
        </Button>
        <View style={styles.row}>
          <Text>Ya tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 2,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
