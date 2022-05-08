import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, View, AsyncStorage } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      setEmail: '',
      password: 'Secret!2022',
      setPassword: '',
    };




  }

  componentDidMount() {
    console.log('LogIn')
  }
  componentDidUpdate() {
    console.log('LogIn')
  }


  render() {
    const onLoginPressed = () => {
      const emailError = emailValidator(this.state.email.value) //Comprobamos que el correo introducido sea válido
      console.log(this.state.password)
      const passwordError = passwordValidator(this.state.password.value) //Comprobamos que la contraseña introducida sea válida
      if (emailError || passwordError) {
        this.setState({ setEmail: ({ ...this.state.email, error: emailError }) })
        this.setState({ setPassword: ({ ...this.state.password, error: passwordError }) })
        return
      }
      this.props.navigation.navigate('Stations')


    }



    return (
      <Background>
        <View style={{ flexDirection: "column", alignItems: "center", padding: "10%" }}>
          <Logo />
          <Header>Bienvenido a GeSyS</Header>
          <TextInput
            label="Email"
            returnKeyType="next"
            value={this.state.email.value}
            onChangeText={(text) => this.setState({ email: ({ value: text, error: '' }) })}
            error={!!this.state.email.error}
            errorText={this.state.email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            label="Contraseña"
            returnKeyType="done"
            value={this.state.password.value}
            onChangeText={(text) => this.setState({ password: ({ value: text, error: '' }) })}
            error={!!this.state.password.error}
            errorText={this.state.password.error}
            secureTextEntry
          />
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Password')}
            >
              <Text style={styles.forgot}>Has olvidado tu contraseña?</Text>
            </TouchableOpacity>
          </View>
          <Button mode="contained" onPress={onLoginPressed}>
            Login
          </Button>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text>No tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.link}>Regístrate</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text>O bien,  </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Stations')}>
              <Text style={styles.link}>continúa sin registrarte ❯</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "column", flex: 1, justifyContent: "flex-end", alignItems: "center", paddingBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ArchivoAux')}>
              <Text style={styles.forgot}>About </Text>
            </TouchableOpacity>
            <Text> | </Text>
            <TouchableOpacity onPress={() => this.props.navigation.replace('ArchivoAux')}>
              <Text style={styles.forgot}>Network </Text>
            </TouchableOpacity>
            <Text> | </Text>
            <TouchableOpacity onPress={() => this.props.navigation.replace('ArchivoAux')}>
              <Text style={styles.forgot}>Contact </Text>
            </TouchableOpacity>
            <Text> | </Text>
            <TouchableOpacity onPress={() => this.props.navigation.replace('ArchivoAux')}>
              <Text style={styles.forgot}>Website </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Background>
    );
  }


}

export default LogIn;







































//Esta función exporta la pantalla de LogIn para poder utilizarla como una view.





//Establecemos el aspecto que tendrá la pantalla


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
