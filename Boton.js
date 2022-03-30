import { Button, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Boton() {
    return(
        <SafeAreaView style={styles.container}>
            <Button
            onPress={() => alert("Hello.")}
            title="Press me"
            color="#841584"
            accessibilityLabel="Pulsa el botón."
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      height: '100px',
      width: '100px',
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
