import Background from '../components/Background'
import React, { useState } from 'react'
import { Text,Platform, View, Image, Picker, StyleSheet } from 'react-native'
import { Button, ToggleButton } from 'react-native-paper';
import { theme } from '../core/theme'
import DateTimePicker from '@react-native-community/datetimepicker';


export default function ReservaElectrolinera() {

  let aux_date = new Date();
  let welcomedate= aux_date.getFullYear()+'-'+(aux_date.getMonth()+1)+'-'+ aux_date.getDate();
  let goodbyedate= aux_date.getFullYear()+'-'+(aux_date.getMonth()+1)+'-'+ aux_date.getDate();
  var buttonColor1 = theme.colors.primary;
  var buttonColor2 = "white";
  var buttonColor3 = "white";
  var coloricon1= "white";
  var coloricon2= "black";
  var coloricon3= "black";

  const [selectedValue, setSelectedValue] = useState("java");
  const [value, setValue] = React.useState('saldo');

  function changeButtonColor(color){
    if(color === "boto1"){
      buttonColor1 = theme.colors.primary;
      coloricon1 = "white";
    }
    else{
      buttonColor1 = "white";
      coloricon1="black";
    }

    if(color === "boto2"){
      buttonColor2 = theme.colors.primary;
      coloricon2 = "white";
    }
    else{
      buttonColor2 = "white";
      coloricon2="black";
    }

    if(color === "boto3"){
      buttonColor3 = theme.colors.primary;
      coloricon3 = "white";
    }
    else{
      buttonColor3 = "white";
      coloricon3="black";
    }
  }

  function useInput() {
    const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const displayDatepicker = () => {
        showMode('date');
    };
    const displayTimepicker = () => {
        showMode('time');
    };

    const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || mydate;
        setShow(!setShow);
        setDate(currentDate);
    }

    return {
        mydate,
        displayDatepicker,
        displayTimepicker,
        isDisplayDate,
        displaymode,
        changeSelectedDate
    }
  }

  const input1 = useInput(new Date())
  const input2 = useInput(new Date())
  const input3 = useInput(new Date())
  const input4 = useInput(new Date())
  return (
      <Background>
        <View style={{ flexDirection: "row",justifyContent: "flex-end", marginBottom: 20 }}>
          <Text style={{color: 'black',fontSize: 25,position: 'absolute',right: -7,fontWeight: 'bold',}}> Elegir vehículo </Text>
        </View>
          <View style={{
            height: 2,
            backgroundColor: 'rgba(0, 0, 0 ,0.7)',
            alignSelf: 'center',
            width: 335,
            marginTop: 10,
            marginBottom: 10
        }} />
        <View style={styles.row}>
            <View style={{ borderRadius:15, borderWidth: 2, width:275, height:50, backgroundColor:'white', borderColor: 'black', borderRadius: 4 }}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ borderRadius:15, height: 50, width: 275 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Tesla Model X" value="TSLA" />
                    <Picker.Item label="BMW Indie" value="BMW" />
                </Picker>
            </View>
            <View style={{ justifyContent: 'center', marginHorizontal: 5, height:53, width:53 , minWidth:53, maxWidth:53, minHeight:53, maxHeight:53 }}>
            <Button   mode="contained" labelStyle={{fontSize: 22, justifyContent: 'center', alignItems: 'center', width:53, backgroundColor:theme.colors.primary}} title={'open'} onPress={input1.displayTimepicker}> <Text style={{color:'white',fontWeight:'bold', fontSize: 24}}>+ </Text></Button>
            </View>
        </View>
        <View style={{ marginTop: 25, flexDirection: "row",justifyContent: "flex-end", marginBottom: 20 }}>
          <Text style={{color: 'black',fontSize: 25,position: 'absolute',right: -130,fontWeight: 'bold',}}>Fecha y tiempo de reserva</Text>
        </View>
          <View style={{
            height: 2,
            backgroundColor: 'rgba(0, 0, 0 ,0.7)',
            alignSelf: 'center',
            width: 335,
            marginTop: 10,
            marginBottom: 10
        }} />
        <View style={styles.row}>
          <View style={{borderColor: 'black', borderWidth:2, marginLeft:13, width: 200, height: 50, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: "hidden",backgroundColor: theme.colors.primary}}>
          <Text style={{color: 'white',fontSize: 24,position: 'absolute',right:9, top: 5,fontWeight: 'bold'}}>Fecha de llegada</Text>
          </View>
          <View style={{borderColor: 'black', borderWidth:2, marginHorizontal:15, width: 135, height: 50, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: "hidden",backgroundColor: theme.colors.primary}}>
          <Text style={{color: 'white',fontSize: 24,position: 'absolute',right: 39, top: 5,fontWeight: 'bold'}}>Hora</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderColor: 'black', borderWidth:2, borderTopWidth:0, marginLeft:13, width: 200, height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, overflow: "hidden",backgroundColor: 'white'}}>
            <Button icon="calendar" color="grey" labelStyle={{fontSize: 22, justifyContent: 'space-between'}} title={'open'} onPress={input1.displayDatepicker}> <Text style={{color:'black', fontSize: 23}}>{input1.mydate.toLocaleDateString()} </Text></Button>
              {input1.isDisplayDate && (
                <DateTimePicker
                  value={input1.mydate}
                  mode={input1.displaymode}
                  is24Hour={true}
                  display="default"
                  onChange={input1.changeSelectedDate}
                />
                )}
          </View>
          <View style={{borderColor: 'black', borderWidth:2, borderTopWidth:0, marginHorizontal:15, width: 135, height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, overflow: "hidden",backgroundColor: 'white'}}>
            <Button  icon="clock" color="grey" labelStyle={{fontSize: 22, justifyContent: 'space-between'}} title={'open'} onPress={input2.displayTimepicker}> <Text style={{color:'black', fontSize: 24}}>{input2.mydate.getHours() + ':' + input2.mydate.getMinutes()}  </Text></Button>
              {input2.isDisplayDate && (
              <DateTimePicker
                value={input2.mydate}
                mode={input2.displaymode}
                is24Hour={true}
                display="default"
                onChange={input2.changeSelectedDate}
              />
              )}
          </View>
        </View>

        <View style={{marginTop: 20}}></View>
        <View style={styles.row}>
          <View style={{borderColor: 'black', borderWidth:2, marginLeft:13, width: 200, height: 50, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: "hidden",backgroundColor: theme.colors.primary}}>
          <Text style={{color: 'white',fontSize: 24,position: 'absolute',right:20, top: 5,fontWeight: 'bold'}}>Fecha de salida</Text>
          </View>
          <View style={{borderColor: 'black', borderWidth:2, marginHorizontal:15, width: 135, height: 50, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: "hidden",backgroundColor: theme.colors.primary}}>
          <Text style={{color: 'white',fontSize: 24,position: 'absolute',right: 39, top: 5,fontWeight: 'bold'}}>Hora</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderColor: 'black', borderWidth:2, borderTopWidth:0, marginLeft:13, width: 200, height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, overflow: "hidden",backgroundColor: 'white'}}>
            <Button icon="calendar" color="grey" labelStyle={{fontSize: 22, justifyContent: 'space-between'}} title={'open'} onPress={input3.displayDatepicker}> <Text style={{color:'black', fontSize: 23}}>{input3.mydate.toLocaleDateString()}  </Text></Button>
              {input3.isDisplayDate && (
                <DateTimePicker
                  value={input3.mydate}
                  mode={input3.displaymode}
                  is24Hour={true}
                  display="default"
                  minimumDate={input1.mydate}
                  onChange={input3.changeSelectedDate}
                />
                )}
          </View>
          <View style={{borderColor: 'black', borderWidth:2, borderTopWidth:0, marginHorizontal:15, width: 135, height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, overflow: "hidden",backgroundColor: 'white'}}>
            <Button  icon="clock" color="grey" labelStyle={{fontSize: 22, justifyContent: 'space-between'}} title={'open'} onPress={input4.displayTimepicker}> <Text style={{color:'black', fontSize: 24}}>{input4.mydate.getHours() + ':' + input4.mydate.getMinutes()}  </Text></Button>
              {input4.isDisplayDate && (
              <DateTimePicker
                value={input4.mydate}
                mode={input4.displaymode}
                is24Hour={true}
                display="default"
                onChange={input4.changeSelectedDate}
              />
              )}
          </View>
        </View>

        <View style={{ flexDirection: "row",justifyContent: "flex-end", marginBottom: 20, marginTop:25 }}>
          <Text style={styles.texto}>Métdo de pago</Text>
        </View>
          <View style={{
            height: 2,
            backgroundColor: 'rgba(0, 0, 0 ,0.7)',
            alignSelf: 'center',
            width: 335,
            marginTop: 10,
            marginBottom: 10
        }} />

        <ToggleButton.Row style={{marginTop:5}} onValueChange={value => setValue(value)} value={value} >
          <ToggleButton icon="wallet" color={coloricon1} value="saldo" size={40} onPress={() => {changeButtonColor("boto1")}} style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth:2, marginLeft:7, width: 100, height: 70, borderRadius:15, overflow: "hidden", backgroundColor:buttonColor1}} />
          <ToggleButton icon={require('../assets/PayPal.png')} color={coloricon2} size={50} onPress={() => {changeButtonColor("boto2")}} value="paypal" style={{justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth:2, marginLeft:0, width: 100, height: 70, borderRadius:0, overflow: "hidden",backgroundColor:buttonColor2}}/>
          <ToggleButton icon={require('../assets/Visa.png')} color={coloricon3} size={50} onPress={() => {changeButtonColor("boto3")}} value="visa" style={{justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth:2, marginLeft:0, width: 100, height: 70, borderRadius:15, overflow: "hidden", backgroundColor:buttonColor3}}/>
        </ToggleButton.Row>

        <View style={{ flexDirection: "row",justifyContent: "flex-end", marginBottom: 20, marginTop:25 }}>
          <Text style={{color: 'black',fontSize: 25,position: 'absolute',right: 108,fontWeight: 'bold',}}>Pago</Text>
        </View>
          <View style={{
            height: 2,
            backgroundColor: 'rgba(0, 0, 0 ,0.7)',
            alignSelf: 'center',
            width: 335,
            marginTop: 10,
            marginBottom: 10
        }} />

        <View style={{borderColor: 'black', borderWidth:2, borderBottomWidth:0, marginLeft:3, marginTop: 5, width: 350, height: 60, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: "hidden",backgroundColor: theme.colors.primary}}>
          <Text style={{color: 'white',fontSize: 24,position: 'absolute',right:185, top: 7,fontWeight: 'bold'}}>Importe total:</Text>
        </View>
        <View style={{borderColor: 'black', borderWidth:2, borderTopWidth:0, marginLeft:3, marginBottom:30, width: 350, height: 60, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, overflow: "hidden",backgroundColor: theme.colors.primary}}>
          <View style={styles.row}>
           <Text style={{color: 'white',fontSize: 24,position: 'absolute',right:250, top: 0,fontWeight: 'bold'}}>0.00 €</Text>
           <View style={{borderColor: 'black', borderWidth:2, marginHorizontal:200, marginTop:-4, width: 135, height: 40, borderRadius:15 , overflow: "hidden",backgroundColor: 'white'}}>
           <Button icon="lightning-bolt" color="white" mode="contained" onPress={() => console.log('Pressed')}>
              Reserva
              </Button>
            </View>   
          </View>
        
        </View>
      </Background>

)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center",
      width: '100%'
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    imageViewStyle:{
      width: 200, 
      height: 150, 
      borderTopLeftRadius: 15, 
      borderTopRightRadius: 15,
      overflow: "hidden",
      backgroundColor: theme.colors.primary,
  },
    texto: {
      color: 'black',
      fontSize: 25,
      position: 'absolute', 
      right: 0,
      fontWeight: 'bold',
    }
});



