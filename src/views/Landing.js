import React, { Component } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { View } from 'react-native'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Landing')
  }
  componentDidUpdate() {
    console.log('Landing')
  }

  render() {
    return (
      <Background>
        <View style={{ flexDirection: "column", alignItems: "center", padding: "15%" }}>
          <Logo />
          <Header>Bienvenido a GeSyS</Header>
          <Paragraph>
            The easiest way to charge your vechicle.
          </Paragraph>
          <Button
            mode="contained"
            onPress={() => this.props.navigation.navigate('LogIn')}
          >
            Login
          </Button>
          <Button
            mode="outlined"
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            Sign Up
          </Button>
        </View>
      </Background>
    );
  }
}

export default Landing;


