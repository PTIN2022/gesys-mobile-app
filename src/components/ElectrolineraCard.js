import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';


export default function ElectrolineraCard (props){
    const [visible, setVisible] = React.useState(true);
    const showDialog = () => props.openModal();
    const hideDialog = () => setVisible(false);

    return(
        <View>
            <Card.Title
                title={props.name}
                subtitle={props.curr_ocupation + "/" + props.capacity}
                left={(props) => <Avatar.Icon {...props} icon="car-electric" />}
                right={(props) => <IconButton {...props} icon="arrow-right" onPress={() => {showDialog()}} />}
            />
        </View>
    );
}
