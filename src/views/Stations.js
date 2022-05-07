import React, { Component } from 'react'
import StationsList from './StationsList'
import StationsMap from './StationsMap'
import {View} from 'react-native'
import { Button } from 'react-native-paper'
import { theme } from '../core/theme'

export default class Stations extends Component {

    constructor(props){
        super(props)
        this.state = {
            mode: 0 //0 significa que estamos en modo mapa
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.state.mode==0 && <StationsMap {...this.props}/>}
                {this.state.mode==1 && <StationsList {...this.props}/>}
                <View style={{position: 'absolute', flexDirection: "row", width: "100%", padding: "10%", justifyContent: "center", bottom: 0}}>
                    <Button
                        labelStyle={{fontSize: 20}}
                        style={{flex: 1, borderColor: theme.colors.primary, borderWidth: 2, borderRightWidth:0, borderBottomRightRadius: 0, borderTopRightRadius: 0, backgroundColor: !this.state.mode ? theme.colors.primary : "#ffffff99"}}
                        color={this.state.mode ? theme.colors.primary: "white"}
                        onPress={()=>{
                            this.setState({mode: 0})
                        }}
                    > Mapa </Button>
                    <Button
                        labelStyle={{fontSize: 20}}
                        style={{flex: 1, borderColor: theme.colors.primary, borderWidth: 2, borderLeftWidth:0, borderBottomLeftRadius: 0, borderTopLeftRadius: 0, backgroundColor: this.state.mode ? theme.colors.primary : "#ffffff99"}}
                        color={!this.state.mode ? theme.colors.primary: "white"}
                        onPress={()=>{
                            this.setState({mode: 1})
                        }}
                    > Lista </Button>
                </View>
            </View>
        )
    }
}
