import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton, Avatar, Badge } from 'react-native-paper';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { theme } from '../../core/theme';
import { connect } from 'react-redux';


function Header (props) {
    //El header es parte del layout de la app.
    //Esta compuesto por dos botones (control de sidebar y notificaciones) y un output
    //del usuario autenticado.
    return (
        <View>
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
                        <Text style={s.username}> {props.Login.logged || ""} </Text>
                        <Avatar.Image style={s.avatar} size={50} source={require('../../assets/avatar.png')} />
                    </View>
            </View>
            {props.Login.logged ? 
            <View style={s.balance}>
                <Text style={s.balanceText}>0 puntos</Text>
            </View>            
            : 
            null}
        </View>
    );
    
}


const s = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 75,
        backgroundColor: "#fff",
        color: "black",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    headerText: {
        fontWeight: '700',
        fontSize: 20,
        color: theme.colors.primary,
    },
    iconBtn: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5
    },
    avatarContainer: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        alignItems: "center"
    },
    username:{
        marginRight: 0.25,
        color: theme.colors.primary,
        fontWeight: "700",
        fontSize: 20
    },
    bellBadge: {
        position: "absolute",
        backgroundColor: "#00e39bcc",
        // top: 0.85,
        // left: 1.75,
        borderRadius: 25,
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    balance: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        alignItems: "center",
        backgroundColor: theme.colors.primary,
        width: "100%",
        justifyContent: 'center',
        height: 50,
    },
    balanceText: {
		fontSize: 20,
		color: "#ffffff",
		fontWeight: 'bold',
        justifyContent: 'center'
	},

});

// Cargamos los datos que tenemos en el store.
const mapStateToProps = ({ Login, Transactions }) => {
    return { Login, Transactions };
};

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Header;