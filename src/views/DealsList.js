import { theme } from '../core/theme'
import React, { Component } from 'react';
import { StyleSheet, TouchableHighlightBase, View } from 'react-native';
import { Button } from "react-native-paper"
import AppBack from '../components/AppBack';
import DealCard from '../components/DealCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDeal } from '../state/actions';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import Background from '../components/Background';
import { fetchOfertes, fetchOfertesApi, setOfertesState, fetchOfertesEstApi } from '../state/actions/Deals'
import { fetchEstaciones } from '../state/actions/Estaciones'
import { isRegularExpressionLiteral } from 'typescript';





class DealsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ofertes: [],
            promo: [],
            estacions: [],
            aux: [],
            nomest: [],
            cont: 0,
            nomfi: [],
        };
    }
    //this.props.route.params


    componentDidUpdate() {
        if (this.props.Login.logged === false) {
            this.props.navigation.navigate('LogIn');
        }
    }

    async componentDidMount() {
        const est = await fetchOfertesEstApi(this.props.Login.token, this.props.Login.cliente.id_usuari); // pass the token? or the cliente id?
        est.map((item) => (
            this.state.estacions.push(item.id_estacion),
            this.state.nomest.push(item.nombre_est)

        ));
        console.log("ESTACIONS:  ", this.state.estacions)
        for (let index = 0; index < this.state.estacions.length; index++) {
            const res = await fetchOfertesApi(this.props.Login.token, this.props.Login.cliente.id_usuari, this.state.estacions[index]); // pass the token? or the cliente id?
            this.setState({ ofertes: res.Promocion });
            if (res.Promocion == 0) {
                console.log("No entro: ", index)
            }
            else {
                await this.state.aux.push(res.Promocion)
                console.log("Index: ", index, "        ", res.Promocion)
                this.state.nomfi.push(this.state.nomest[index])

            }
        }

        console.log("estacions possibles", this.state.nomfi)
    }

    ajuda() {
        this.state.cont += 1
        return this.state.nomfi[this.state.cont - 1];
    }
    inici() {
        this.state.cont = 0
    }
    algo() {
        console.log("ENTROOOOO", this.state.aux[7])

    }

    render() {
        return (
            <Background>
                <AppBack title="Lista de ofertas disponibles" backScreenName="Stations" />
                <ScrollView>



                    {this.state.aux && this.state.nomest.map && this.state.aux.map((deal) => (
                        // Iteramos las estaciones que tenemos cargadas en el store.
                        <View key={Math.floor(Math.random() * 1001)}>
                            <DealCard
                                title={this.ajuda()}
                                fecha_inicio={deal.fecha_inicio}
                                fecha_fin={deal.fecha_fin}
                                descuento={deal.descuento}
                                descripcion={deal.descripcion}
                            />
                        </View>
                    ))}
                    {this.inici()}

                </ScrollView>
            </Background>

        );
    }
}


const mapStateToProps = (data) => {
    const { ofertes, errorOfertes } = data;
    const { Login } = data;
    return { ofertes, Login, errorOfertes };
};



const mapDispatchToProps = dispatch => {
    return {
        fetchOfertes: (token, client) => dispatch(fetchOfertes(token, client)),
        setOfertesState: (ofertes) => dispatch(setOfertesState(ofertes))
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(DealsList);


const styles = StyleSheet.create({
    head: {
        fontSize: 21,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 0,
        left: 0,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: 300,
        marginBottom: 5,
    },
    cont: {
        right: 100,
        left: 125,
        position: 'absolute',
        bottom: 50,
    }
})



