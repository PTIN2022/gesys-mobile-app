import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Image, View, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import { Button, Paragraph, Dialog, Portal, Snackbar, Divider, Card, TextInput, RadioButton } from 'react-native-paper';
import { fetchHistorial } from '../state/actions/Historial'
import { updateSaldo } from '../state/actions/Login'
import { theme } from '../core/theme';
import { Text } from 'react-native-paper';

class Historial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          balance: "0",
        }
    }

    async componentDidMount() {
      if(this.props.Login.logged === false){
        this.props.navigation.navigate('LogIn');
      }
      await this.props.fetchHistorial(this.props.Login.token)
    }
    
    addBalance = () => { 
      if(this.state.balance > 0) {
        let data = {
          saldo: parseFloat(this.state.balance),
          type: "add"
        }
        fetch("http://craaxkvm.epsevg.upc.es:23701/api/saldo", {
          method: 'PUT',
          headers: {
            'x-access-tokens': this.props.Login.token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.props.updateSaldo(data.saldo);
          this.setState({balance: "0"})
          this.props.fetchHistorial(this.props.Login.token)
        })
      }
    }

    render() {
      return (
        <View>
          <TextInput
            mode="outlined"
            style={{ marginBottom: 10 }}
            label="Saldo"
            value={this.state.balance}
            onChangeText={text => {
              this.setState({balance: text})
            }}
          />
          <Button style={{marginTop: 2, marginBottom: 15}} mode='contained' color='green' onPress={this.addBalance}>Añadir saldo</Button>
          {/* <View style={{alignItems: 'center', marginTop: 20, backgroundColor: '#0E3BAC', justifyContent: 'center'}} height={100}>
            <Text style={{textAlignVertical: 'center', fontSize: 50, color: 'white'}}>
              {this.props.Login.cliente.saldo}
              <Text style={{textAlignVertical: 'center', fontSize: 15, color: 'white'}}> puntos</Text>
            </Text>
          </View> */}
          <Divider />
          <Text style={{marginTop: 10, fontSize: 20, fontWeight: "bold"}}>Historial</Text>
          <View style={{marginTop: 10}}>
            {this.props.Historial.historial.length > 0 ?
              this.props.Historial.historial.map(history => {
                let data = new Date(history.fecha);
                let fullDate = `${data.getDate()}-${data.getMonth()}-${data.getFullYear()}`
                return(history.type === "add" ? 
                  <View style={s.balanceAdd} key={Math.random(1,10000)}>
                    <Text style={s.balanceText}>{fullDate}</Text>
                    <Text style={s.balanceText}>, +{history.saldo}€</Text>
                  </View>
                  :
                  <View style={s.balanceCharged}>
                    <Text style={s.balanceText}>{fullDate}</Text>
                    <Text style={s.balanceText}>, -{history.saldo}€</Text>
                  </View>
                );
              })
            :
              <View style={{marginTop: 10}}>
                <Text>No tiene ningún historial de transacciones por el momento.</Text>
              </View>
            }
          </View>
        </View>
      )
    }
}

const s = StyleSheet.create({
  balanceAdd: {
      display: "flex",
      flexDirection: "row",
      marginLeft: "auto",
      alignItems: "center",
      backgroundColor: "#05ab42",
      width: "100%",
      justifyContent: 'center',
      height: 50,
  },
  balanceCharged: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    alignItems: "center",
    backgroundColor: "#f5455c",
    width: "100%",
    justifyContent: 'center',
    height: 50,
},
  balanceText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: 'bold',
    justifyContent: 'center'
  },
});


// Cargamos los datos que tenemos en el store.
const mapStateToProps = ({ Login, Historial }) => {
  console.log(Historial)
  return { Login, Historial };
};
  
const mapDispatchToProps = dispatch => {
  return {
    fetchHistorial: (token) => dispatch(fetchHistorial(token)), 
    updateSaldo: (data) => dispatch(updateSaldo(data)), 
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Historial);
   