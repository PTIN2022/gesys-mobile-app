import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton, Avatar, Badge } from 'react-native-paper';
import { theme } from '../../core/theme';



function Header (props) {

    //El header es parte del layout de la app.
    //Esta compuesto por dos botones (control de sidebar y notificaciones) y un output
    //del usuario autenticado.

        return (
            <View style={s.header}>
                    <IconButton 
                        icon={!props.menuVisible? "menu" : "chevron-left"} 
                        style={s.iconBtn}
                        size={28}
                        color={"#fff"}
                        onPress={()=>props.toggleMenu()}
                    ></IconButton>
                    <View>
                        <IconButton 
                            icon={"bell"} 
                            style={s.iconBtn}
                            color={"#fff"}
                            size={28}
                        ></IconButton>
                        <Badge style={s.bellBadge} size={20}>2</Badge>
                    </View>
                    <View style={s.avatarContainer}>
                        <Text style={s.username}> Username </Text>
                        <Avatar.Image style={s.avatar} size={50} source={require('../../assets/avatar.png')} />
                    </View>
            </View>
            
        );
    
}


const s = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        width: '100vw',
        height: '4rem',
        position: 'fixed',
        top: "0",
        backgroundColor: "#fff",
        paddingHorizontal: "0.5em",
        opacity: "0.95"
    },
    headerText: {
        fontWeight: '800',
        fontSize: 20,
        color: theme.colors.primary,
        marginVertical: "auto",
        marginHorizontal: "auto"
    },
    iconBtn: {
        marginVertical: "auto",
        backgroundColor: theme.colors.primary,
        borderRadius: "0.25em"
    },
    avatarContainer: {
        display: "flex",
        flexDirection: "row",
        marginVertical: "auto",
        marginLeft: "auto"
    },
    username:{
        marginVertical: "auto",
        marginRight: "0.25em",
        color: theme.colors.primary,
        fontWeight: 700,
        fontSize: 20
    },
    bellBadge: {
        content: "100",
        position: "absolute",
        backgroundColor: "#00e39b",
        top: "0.85rem",
        left: "1.75rem",
        borderRadius: "50%",
        color: "white",
        fontWeight: 700,
        fontSize: 16,
    }

});

export default Header;