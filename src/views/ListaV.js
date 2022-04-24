import { theme } from '../core/theme'
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListaVAUX from './ListaVAUX';
import { TabActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../components/TextInput'
import Header from '../components/Header'
import Button from '../components/Button'
import Background from '../components/Background'

export default function ListaV({ navigation }) {

    i = 0;
    const vehicles = [
        {
            Model: 'Tesla',
            Matricula: '4684 KAE',
            Foto: 'sflks',
        },
        {
            Model: 'BMW',
            Matricula: '7634 JMP',
            Foto: 'sflks',
        },
        {
            Model: 'Porsche',
            Matricula: '2015 KAE',
            Foto: 'sflks',
        },
    ];

    return (
        <Background>
            <Header style={styles.head}>Lista</Header>
            <SafeAreaView>
                <FlatList
                    data={vehicles}
                    keyExtractor={(item) => item.Matricula}
                    renderItem={({ item, index }) => <ListaVAUX item={item} />}
                    ItemSeparatorComponent={() => <View style={{ marginBottom: 5, borderColor: '#00000020', borderWidth: 0.5, margin: 5 }} />}

                />
                <View style={styles.cont}>
                    <Ionicons name='add-circle-outline' color={'#0e3bac'} size={60} />
                </View>
            </SafeAreaView>
        </Background>
    );

}


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



