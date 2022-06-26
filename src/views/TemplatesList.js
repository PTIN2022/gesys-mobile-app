import { theme } from '../core/theme'
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from "react-native-paper"
import AppBack from '../components/AppBack';
import TemplateCard from '../components/TemplateCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTemplate } from '../state/actions';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import Background from '../components/Background';



class TemplatesList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }
    componentDidUpdate() {
    }



    render() {
        return (
            <Background>
                <AppBack title="Lista de templates" backScreenName="Stations" />
                <ScrollView>
                    {this.props.templates.map(template => {
                        return (
                            <TemplateCard
                                key={template.id}
                                title={template.id}
                                field1={template.field1}
                                field2={template.field2}
                                field3={template.field3}
                            />
                        )
                    })}
                </ScrollView>
            </Background>

        );
    }
}



const mapStateToProps = ({ Templates }) => {
    const { templates } = Templates;
    return { templates };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addTemplate,
    }, dispatch)
);





export default connect(mapStateToProps, mapDispatchToProps)(TemplatesList);


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



