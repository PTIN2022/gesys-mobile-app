import React, { Component } from 'react'
import {IconButton} from "react-native-paper"
import {View} from "react-native"
import Header from "../components/Header"
import { useNavigation } from '@react-navigation/native';
import { theme } from '../core/theme';

export default function AppBack({title, backScreenName}) {

    const navigation= useNavigation()

        return (
            <View style={{flexDirection: "row", alignItems: "center", width: "auto", borderRadius: 10}}>
                <IconButton
                    icon="arrow-left"
                    color={theme.colors.primary}
                    size={30}
                    style={{paddingHorizontal: 20, width: "auto"}}
                    onPress={() => navigation.replace(backScreenName)}
                />
                <Header>{title}</Header>
            </View>
        )
}

