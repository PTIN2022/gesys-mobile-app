import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Image, View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { Button, Paragraph, Dialog, Portal, Snackbar, Divider, Card, TextInput, RadioButton } from 'react-native-paper';


class Transactions extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      if(this.props.Login.logged === false){
        this.props.navigation.navigate('LogIn');
      }    
    }

    render() {
      return (
        <View>
          <View style={{alignItems: 'center', marginTop: 20, backgroundColor: '#0E3BAC', justifyContent: 'center'}} height={100}>
            <Text style={{textAlignVertical: 'center', fontSize: 50, color: 'white'}}>
              0
              <Text style={{textAlignVertical: 'center', fontSize: 15, color: 'white'}}> puntos</Text>
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text>No tiene ningún historial de transacciones por el momento.</Text>
          </View>
        </View>
      )
        // return this.props.Transactions.transaction.length > 0 ? 
        //     <Text>Transacciones encontradas. Tienes 0 puntos.</Text>
        //     : 
        //     <Text>No se ha encontrado ningún historial de transacciones. Tienes 0 puntos.</Text>
    }
}

// Cargamos los datos que tenemos en el store.
const mapStateToProps = ({ Login, Transactions }) => {
    return { Login, Transactions };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
   