import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import TextInput from '../components/TextInput'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

import { nameValidator } from '../helpers/nameValidator'
import { apellidoValidator } from '../helpers/apellidoValidator'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { DNIValidator } from '../helpers/DNIValidator'
import { phoneValidator } from '../helpers/phoneValidator'

import AppBack from '../components/AppBack'

//Hacemos uso de los helpers para validar los datos introducidos por el usuario
//Para eso exportamos la funcion SingupScreen que hará validacion de todos los apartados en su pantalla

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      setName: '',
      apellido: '',
      setApellido: '',
      email: '',
      setEmail: '',
      password: '',
      setPassword: '',
      DNI: '',
      setDNI: '',
      phone: '',
      setPhone: '',
    };
  }


  componentDidMount() {
    console.log('SignUp')
  }
  componentDidUpdate() {
    console.log('SignUp')
  }

  render() {
    const onSignUpPressed = () => {
      const nameError = nameValidator(this.state.name.value)
      const apellidoError = apellidoValidator(this.state.apellido.value)
      const emailError = emailValidator(this.state.email.value)
      const passwordError = passwordValidator(this.state.password.value)
      const DNIError = DNIValidator(this.state.DNI.value)
      const phoneError = phoneValidator(this.state.phone.value)
      if (emailError || passwordError || nameError || DNIError || phoneError) {
        this.setState({ setName: ({ ...this.state.name, error: nameError }) })
        this.setState({ setApellido: ({ ...this.state.apellido, error: apellidoError }) })
        this.setState({ setEmail: ({ ...this.state.email, error: emailError }) })
        this.setState({ setPassword: ({ ...this.state.password, error: passwordError }) })
        this.setState({ setDNI: ({ ...this.state.DNI, error: DNIError }) })
        this.setState({ setPhone: ({ ...this.state.phone, error: phoneError }) })
        return
      }
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })
    }


    return (
      <Background>
        <AppBack title="Registro de usuario" backScreenName="LogIn" />

        <View style={{ flexDirection: "column", alignItems: "center", paddingHorizontal: "10%" }}>
          <Logo />
          <TextInput
            style={{height:40}}
            label="Nombre"
            returnKeyType="next"
            //Usamos el helper para validar
            value={this.state.name.value}
            onChangeText={(text) => this.setState({ setName: ({ value: text, error: '' }) })}
            error={!!this.state.name.error}
            errorText={this.state.name.error}
          />
          <TextInput
            style={{height:40}}
            label="Apellido"
            returnKeyType="next"
            //Usamos el helper para validar
            value={this.state.apellido.value}
            onChangeText={(text) => this.setState({ setApellido: ({ value: text, error: '' }) })}
            error={!!this.state.apellido.error}
            errorText={this.state.apellido.error}
          />
          <TextInput
            style={{height:40}}
            label="Email"
            returnKeyType="next"
            //Usamos el helper para validar
            value={this.state.email.value}
            onChangeText={(text) => this.setState({ setEmail: ({ value: text, error: '' }) })}
            error={!!this.state.email.error}
            errorText={this.state.email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            style={{height:40}}
            label="DNI, NIE o CIF"
            returnKeyType="next"
            //Usamos el helper para validar
            value={this.state.DNI.value}
            onChangeText={(text) => this.setState({ setDNI: ({ value: text, error: '' }) })}
            error={!!this.state.DNI.error}
            errorText={this.state.DNI.error}
          />
          <TextInput
            style={{height:40}}
            label="Phone number"
            returnKeyType="next"
            //Usamos el helper para validar
            value={this.state.phone.value}
            onChangeText={(text) => this.setState({ setPhone: ({ value: text, error: '' }) })}
            error={!!this.state.phone.error}
            errorText={this.state.phone.error}
            keyboardType="phone-pad"
          />
          <TextInput
            style={{height:40}}
            label="Password"
            returnKeyType="done"
            //Usamos el helper para validar
            value={this.state.password.value}
            onChangeText={(text) => this.setState({ setPassword: ({ value: text, error: '' }) })}
            error={!!this.state.password.error}
            errorText={this.state.password.error}
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
    );
  }
}

export default SignUp;



/*
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
      <AppBack title="Registro de usuario" backScreenName="LogIn" />

      <View style={{ flexDirection: "column", alignItems: "center", paddingHorizontal: "10%" }}>
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
*/
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
