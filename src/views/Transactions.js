import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native'


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
        return this.props.Transactions.transaction.length > 0 ? 
            <Text>Transacciones encontradas. Tienes 0 puntos.</Text>
            : 
            <Text>No se ha encontrado ningún historial de transacciones. Tienes 0 puntos.</Text>
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
   