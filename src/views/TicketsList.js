import { theme } from '../core/theme'
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from "react-native-paper"
import AppBack from '../components/AppBack';
import TicketCard from '../components/TicketCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTicket } from '../state/actions';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import Background from '../components/Background';



class TicketsList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log('TicketsList')
    }
    componentDidUpdate() {
        console.log('TicketsList')
    }



    render() {
        return (
            <Background>
                <AppBack title="Lista de tickets" backScreenName="Stations" />
                <ScrollView>
                    {this.props.tickets.map(ticket => {
                        return (
                            <TicketCard
                                key={ticket.id}
                                title={ticket.id_ticket}
                                fecha={ticket.fecha}
                                asunto={ticket.asunto}
                                mensaje={ticket.mensaje}
                                estado={ticket.estado}
                            />
                        )
                    })}
                </ScrollView>
            </Background>

        );
    }
}



const mapStateToProps = ({ Tickets }) => {
    const { tickets } = Tickets;
    return { tickets };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addTicket,
    }, dispatch)
);





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



