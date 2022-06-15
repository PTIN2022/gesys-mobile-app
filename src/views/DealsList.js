import { theme } from '../core/theme'
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from "react-native-paper"
import AppBack from '../components/AppBack';
import DealCard from '../components/DealCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDeal } from '../state/actions';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import Background from '../components/Background';



class DealsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deals: props.deals
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.deals != this.props.deals) this.setState({deals: this.props})
    }



    render() {
        return (
            <Background>
                <AppBack title="Lista de ofertas disponibles" backScreenName="Stations" />
                <ScrollView>
                    {this.state.deals.map(deal => {
                        return (
                            <DealCard
                                key={deal.id}
                                title={deal.id_promo}
                                estacion={deal.estacion}
                                descuento={deal.descuento}
                                fecha_inicio={deal.fecha_inicio}
                                fecha_fin={deal.fecha_fin}
                                estado={deal.estado}
                            />
                        )
                    })}
                </ScrollView>
            </Background>

        );
    }
}



const mapStateToProps = ({ Deals }) => {
    const { deals } = Deals;
    return { deals };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addDeal,
    }, dispatch)
);





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



