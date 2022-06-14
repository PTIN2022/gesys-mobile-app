import React, { Component, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View, Linking } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { connect } from 'react-redux';
import { doLogin } from '../state/actions/Login';
import {bindActionCreators} from 'redux';
import * as Actions from '../state/actions'


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email:  {
            value: '',
            error: null,
        },
        setEmail: '',
        password: {
            value: '',
            error: null,
        },
        setPassword: '',
        loginError: false,
        };
    }

  render() {
    console.log(this.props)
    return (
      <Background>
        <View style={{ flexDirection: "column", alignItems: "center", padding: "10%" }}>
          <Logo />
          <Header>Bienvenido a GeSyS</Header>
          {this.state.loginError === true ? <Text>Error, credenciales incorrectas.</Text> : null}
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
          <Button mode="contained" onPress={this.onLoginPressed}>
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
            <TouchableOpacity onPress={() => this.props.navigation.replace('Error')}>
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
    componentDidMount() {
    }

    onLoginPressed = () => {
        const emailError = emailValidator(this.state.email.value) //Comprobamos que el correo introducido sea válido
        const passwordError = passwordValidator(this.state.password.value) //Comprobamos que la contraseña introducida sea válida
        
        if (emailError || passwordError) {
        this.setState(prev => ({
            email: {
                ...prev.email,
                value: prev.email.value,
                error: emailError
            },
            password: {
                ...prev.password,
                value: prev.password.value,
                error: passwordError
            }
        }))
        return
        }
        // this.props.navigation.navigate('Stations')
        this.props.doLogin(this.state.email.value, this.state.password.value, (val) => {
        if(val){
            this.setState({
                loginError: false
            })
            this.props.navigation.reset({
                index: 0,
                routes: [{name: 'Stations'}],
            });
        } else {
            this.setState({
                loginError: true
            })
        }
        })

    } 

    render() {
        return (
        <Background>
            <View style={{ flexDirection: "column", alignItems: "center", padding: "10%" }}>
            <Logo />
            <Header>Bienvenido a GeSyS</Header>
            {this.state.loginError === true ? <Text style={{ backgroundColor: 'red', color: 'white' }}>Credenciales incorrectas.</Text> : null}
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
            <Button mode="contained" onPress={this.onLoginPressed}>
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                <Text style={styles.forgot}>About </Text>
                </TouchableOpacity>
                <Text> | </Text>
                <TouchableOpacity onPress={()=>{ Linking.openURL('https://www.facebook.com/profile.php?id=100082530423223')}}>
                <Text style={styles.forgot}>Network </Text>
                </TouchableOpacity>
                <Text> | </Text>
                <TouchableOpacity onPress={() => this.props.navigation.replace('ArchivoAux')}>
                <Text style={styles.forgot}>Contact </Text>
                </TouchableOpacity>
                <Text> | </Text>
                <TouchableOpacity onPress={()=>{ Linking.openURL('http://craaxkvm.epsevg.upc.es:23601')}}>
                <Text style={styles.forgot}>Website </Text>
                </TouchableOpacity>
            </View>
            </View>
        </Background>
        );
    }
}

// Cargamos los datos que tenemos en el store.
const mapStateToProps = ({ Login }) => {
    return {Login};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);


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
