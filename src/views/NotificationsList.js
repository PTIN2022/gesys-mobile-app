import { theme } from '../core/theme'
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from "react-native-paper"
import AppBack from '../components/AppBack';
import DealCard from '../components/DealCard'
import NotificationCard from '../components/NotificationCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDeal } from '../state/actions';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import Background from '../components/Background';


class NotificationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: props.notifications
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.notifications != this.props.notifications) this.setState({notifications: this.props})
    }


    render() {
        return (
            <Background>
                <AppBack title="Lista de notificaciones" backScreenName="Stations" />
                <ScrollView>
                    {this.state.notifications.map(notification => {
                        return (
                            <NotificationCard
                                key={notification.id}
                                tipo={notification.tipo}
                                reserva={notification.reserva}
                                estacion={notification.estacion}
                                vehiculo={notification.vehiculo}
                                hora={notification.hora}
                                texto={notification.texto}
                            />
                        )
                    })}
                </ScrollView>
            </Background>

        );
    }
}

const mapStateToProps = ({ Notifications }) => {
    const { notifications } = Notifications;
    return { notifications };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addDeal,
    }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(NotificationsList);


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