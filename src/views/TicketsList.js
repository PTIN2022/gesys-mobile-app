import { theme } from '../core/theme'
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from "react-native-paper"
import AppBack from '../components/AppBack';
import TicketCard from '../components/TicketCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTicket } from '../state/actions';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import Background from '../components/Background';
import { fetchTickets, fetchTicketsApi, setTicketsState } from '../state/actions/Tickets'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';



class TicketsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: []
        };
    }
    //this.props.route.params


    componentDidUpdate() {
        if (this.props.Login.logged === false) {
            this.props.navigation.navigate('LogIn');
        }
    }

    async componentDidMount() {
        const res = await fetchTicketsApi(this.props.Login.token, this.props.Login.cliente.id_usuari); // pass the token? or the cliente id?
        setTicketsState(res)
        this.setState({ tickets: res.Tickets });
    }


    render() {
        return (
            <Background>
                <AppBack title="Lista de tickets" backScreenName="Stations" />
                <Button style={{ margin: 5 }} icon="pencil-plus" mode="contained" onPress={() => this.props.navigation.navigate("TicketForm")}>Nuevo Ticket</Button>
                <ScrollView>
                    {this.state.tickets && this.state.tickets.map((item) => (
                        // Iteramos las estaciones que tenemos cargadas en el store.
                        <View key={item.id_ticket}>
                            <TicketCard
                                title={item.id_ticket}
                                estado={item.estado}
                                asunto={item.asunto}
                                mensaje={item.mensaje}
                                fecha={item.fecha}
                            />
                        </View>
                    ))}


                </ScrollView>
            </Background>

        );
    }
}



const mapStateToProps = (data, Tickets) => {
    const { tickets, errorTickets } = Tickets;
    const { Login } = data;
    return { tickets, Login, errorTickets };
};



const mapDispatchToProps = dispatch => {
    return {
        fetchTickets: (token, client) => dispatch(fetchTickets(token, client)),
        setTicketsState: (tickets) => dispatch(setTicketsState(tickets))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);


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



