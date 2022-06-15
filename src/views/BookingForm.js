import Background from '../components/Background'
import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Button, ToggleButton, IconButton, Card } from 'react-native-paper';
import { theme } from '../core/theme'
import DateTimePicker from '@react-native-community/datetimepicker';
import AppBack from '../components/AppBack';
import SelectInput from '../components/SelectInput';
import Header from '../components/Header';


class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Bokingform')
  }
  componentDidUpdate() {
    console.log('Bokingform')
  }

  render() {
    let aux_date = new Date();
    let welcomedate = aux_date.getFullYear() + '-' + (aux_date.getMonth() + 1) + '-' + aux_date.getDate();
    let goodbyedate = aux_date.getFullYear() + '-' + (aux_date.getMonth() + 1) + '-' + aux_date.getDate();

    const [btnColors, setBtnColors] = useState({
      back1: theme.colors.primary,
      icon1: "#fff",
      back2: "#fff",
      icon2: theme.colors.primary,
      back3: "#fff",
      icon3: theme.colors.primary,
    })


    const [selectedValue, setSelectedValue] = useState("");
    const [value, setValue] = React.useState('saldo');

    function changeButtonColor(boto) {
      switch (boto) {
        case "boto1":
          setBtnColors({
            back1: theme.colors.primary,
            icon1: "#fff",
            back2: "#fff",
            icon2: theme.colors.primary,
            back3: "#fff",
            icon3: theme.colors.primary,
          })
          break;
        case "boto2":
          setBtnColors({
            back2: theme.colors.primary,
            icon2: "#fff",
            back1: "#fff",
            icon1: theme.colors.primary,
            back3: "#fff",
            icon3: theme.colors.primary,
          })
          break;
        case "boto3":
          setBtnColors({
            back3: theme.colors.primary,
            icon3: "#fff",
            back2: "#fff",
            icon2: theme.colors.primary,
            back1: "#fff",
            icon1: theme.colors.primary,
          })
          break;
        default:
          break;
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
        <AppBack title="Formulario de reserva" backScreenName="Stations" />
        <ScrollView>
          <Card style={{ marginHorizontal: 5, padding: 20, backgroundColor: "#ffffffdd" }}>
            <Card.Content>

              <Header>Vehiculo de la reserva:</Header>
              <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 15 }}>
                <SelectInput
                  data={["Coche1", "Coche2", "Coche3"]}
                  btnText="Selecciona un vehiculo"
                  onSelectValue={value => {
                    setSelectedValue(value)
                  }}
                />
                <TouchableOpacity style={styles.iconBtn} onPress={() => this.props.navigation.navigate("VehicleForm")}>
                  <Image source={require("../assets/add-car.png")} style={{ width: "75%", height: "75%" }} color={"#fff"}></Image>
                </TouchableOpacity>
              </View>

              <Header>Fecha y hora de entrada:</Header>
              <View style={styles.row}>
                <TouchableOpacity onPress={input1.displayDatepicker} style={styles.timeInput}>
                  <Text style={{ fontSize: 15 }}>{input1.mydate.toLocaleDateString()} </Text>
                  <View style={{ alignItems: "flex-end", flex: 1 }}>
                    <IconButton labelStyle={{ fontSize: 15, margin: 0 }} icon="calendar" color="#777"></IconButton>
                  </View>
                  {input1.isDisplayDate && (
                    <DateTimePicker
                      value={input1.mydate}
                      mode={input1.displaymode}
                      is24Hour={true}
                      display="default"
                      onChange={input1.changeSelectedDate}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity onPress={input2.displayTimepicker} style={{ ...styles.timeInput, marginLeft: 10 }}>
                  <Text style={{ fontSize: 15 }}>{input2.mydate.getHours() + ':' + input2.mydate.getMinutes()}  </Text>
                  <View style={{ alignItems: "flex-end", flex: 1 }}>
                    <IconButton labelStyle={{ fontSize: 15, margin: 0 }} icon="clock" color="#777"></IconButton>
                  </View>
                  {input2.isDisplayDate && (
                    <DateTimePicker
                      value={input2.mydate}
                      mode={input2.displaymode}
                      is24Hour={true}
                      display="default"
                      onChange={input2.changeSelectedDate}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <Header>Fecha y hora de salida:</Header>
              <View style={styles.row}>
                <TouchableOpacity onPress={input3.displayDatepicker} style={styles.timeInput}>
                  <Text style={{ fontSize: 15 }}>{input3.mydate.toLocaleDateString()} </Text>
                  <View style={{ alignItems: "flex-end", flex: 1 }}>
                    <IconButton labelStyle={{ fontSize: 15, margin: 0 }} icon="calendar" color="#777"></IconButton>
                  </View>
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
                </TouchableOpacity>
                <TouchableOpacity onPress={input4.displayTimepicker} style={{ ...styles.timeInput, marginLeft: 10 }}>
                  <Text style={{ fontSize: 15 }}>{input4.mydate.getHours() + ':' + input4.mydate.getMinutes()}  </Text>
                  <View style={{ alignItems: "flex-end", flex: 1 }}>
                    <IconButton labelStyle={{ fontSize: 15, margin: 0 }} icon="clock" color="#777"></IconButton>
                  </View>
                  {input4.isDisplayDate && (
                    <DateTimePicker
                      value={input4.mydate}
                      mode={input4.displaymode}
                      is24Hour={true}
                      display="default"
                      onChange={input4.changeSelectedDate}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <Header>Metodo de pago:</Header>
              <View style={styles.row} onValueChange={value => setValue(value)} value={value} >
                <IconButton
                  icon="wallet"
                  color={btnColors.icon1}
                  size={30}
                  style={{ ...styles.toggleBtn, backgroundColor: btnColors.back1, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                  onPress={() => changeButtonColor("boto1")}
                >Cartera</IconButton>
                <IconButton
                  icon={require('../assets/PayPal.png')}
                  color={btnColors.icon2}
                  size={30}
                  style={{ ...styles.toggleBtn, backgroundColor: btnColors.back2, borderRadius: 0 }}
                  onPress={() => changeButtonColor("boto2")}
                ></IconButton>
                <IconButton
                  icon={require('../assets/Visa.png')}
                  color={btnColors.icon3}
                  size={30}
                  style={{ ...styles.toggleBtn, backgroundColor: btnColors.back3, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  onPress={() => changeButtonColor("boto3")}
                ></IconButton>
              </View>
              <Header>Importe total:</Header>
              <View style={{ ...styles.row, alignItems: "center", marginVertical: 10 }}>
                <Text style={{ padding: 5, paddingHorizontal: 15, flex: 1, fontSize: 20, marginRight: 10, color: theme.colors.primary, fontWeight: "700", borderWidth: 1, borderRadius: 5 }}>20$</Text>
                <View style={{ flexDirection: 'row-reverse' }}><Button mode='contained'>Reservar</Button></View>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>
      </Background>

    );
  }
}

export default BookingForm;

















/*


export default function ReservaElectrolinera({navigation}) {

  let aux_date = new Date();
  let welcomedate= aux_date.getFullYear()+'-'+(aux_date.getMonth()+1)+'-'+ aux_date.getDate();
  let goodbyedate= aux_date.getFullYear()+'-'+(aux_date.getMonth()+1)+'-'+ aux_date.getDate();
  
  
  const [btnColors, setBtnColors] = useState({
    back1: theme.colors.primary,
    icon1: "#fff",
    back2: "#fff",
    icon2: theme.colors.primary,
    back3: "#fff",
    icon3: theme.colors.primary,
  })


  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = React.useState('saldo');

  function changeButtonColor(boto){
    switch (boto) {
      case "boto1":
        setBtnColors({
          back1: theme.colors.primary,
          icon1: "#fff",
          back2: "#fff",
          icon2: theme.colors.primary,
          back3: "#fff",
          icon3: theme.colors.primary,
        })
        break;
      case "boto2":
        setBtnColors({
          back2: theme.colors.primary,
          icon2: "#fff",
          back1: "#fff",
          icon1: theme.colors.primary,
          back3: "#fff",
          icon3: theme.colors.primary,
        })
        break;
      case "boto3":
        setBtnColors({
          back3: theme.colors.primary,
          icon3: "#fff",
          back2: "#fff",
          icon2: theme.colors.primary,
          back1: "#fff",
          icon1: theme.colors.primary,
        })
        break;
      default:
        break;
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
        <AppBack title="Formulario de reserva" backScreenName="Stations"/>
            <ScrollView>
              <Card style={{marginHorizontal:5 , padding: 20, backgroundColor: "#ffffffdd"}}>
                  <Card.Content>

                    <Header>Vehiculo de la reserva:</Header>
                    <View style={{flexDirection: "row", alignItems: "center", marginVertical: 15}}>
                      <SelectInput 
                        data={["Coche1", "Coche2", "Coche3"]}
                        btnText="Selecciona un vehiculo"
                        onSelectValue={value=>{
                          setSelectedValue(value)
                        }}
                      />
                      <TouchableOpacity style={styles.iconBtn} onPress={()=>navigation.navigate("VehicleForm")}>
                        <Image source={require("../assets/add-car.png")} style={{width: "75%", height: "75%"}} color={"#fff"}></Image>
                      </TouchableOpacity>
                    </View>

                    <Header>Fecha y hora de entrada:</Header>
                    <View style={styles.row}>
                      <TouchableOpacity onPress={input1.displayDatepicker} style={styles.timeInput}>
                        <Text style={{fontSize: 15}}>{input1.mydate.toLocaleDateString()} </Text>
                        <View style={{alignItems: "flex-end", flex:1}}>
                          <IconButton labelStyle={{fontSize:15, margin:0}}  icon="calendar" color="#777"></IconButton>
                        </View>
                          {input1.isDisplayDate && (
                            <DateTimePicker
                              value={input1.mydate}
                              mode={input1.displaymode}
                              is24Hour={true}
                              display="default"
                              onChange={input1.changeSelectedDate}
                            />
                          )}
                      </TouchableOpacity>
                      <TouchableOpacity onPress={input2.displayTimepicker} style={{...styles.timeInput, marginLeft:10}}>
                        <Text style={{fontSize: 15}}>{input2.mydate.getHours() + ':' + input2.mydate.getMinutes()}  </Text>
                        <View style={{alignItems: "flex-end", flex:1}}>
                          <IconButton labelStyle={{fontSize:15, margin:0}}  icon="clock" color="#777"></IconButton>
                        </View>
                          {input2.isDisplayDate && (
                          <DateTimePicker
                            value={input2.mydate}
                            mode={input2.displaymode}
                            is24Hour={true}
                            display="default"
                            onChange={input2.changeSelectedDate}
                          />
                          )}
                      </TouchableOpacity>
                    </View>
                    <Header>Fecha y hora de salida:</Header>
                    <View style={styles.row}>
                      <TouchableOpacity onPress={input3.displayDatepicker} style={styles.timeInput}>
                        <Text style={{fontSize: 15}}>{input3.mydate.toLocaleDateString()} </Text>
                        <View style={{alignItems: "flex-end", flex:1}}>
                          <IconButton labelStyle={{fontSize:15, margin:0}}  icon="calendar" color="#777"></IconButton>
                        </View>
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
                      </TouchableOpacity>
                      <TouchableOpacity onPress={input4.displayTimepicker} style={{...styles.timeInput, marginLeft:10}}>
                        <Text style={{fontSize: 15}}>{input4.mydate.getHours() + ':' + input4.mydate.getMinutes()}  </Text>
                        <View style={{alignItems: "flex-end", flex:1}}>
                          <IconButton labelStyle={{fontSize:15, margin:0}}  icon="clock" color="#777"></IconButton>
                        </View>
                        {input4.isDisplayDate && (
                          <DateTimePicker
                            value={input4.mydate}
                            mode={input4.displaymode}
                            is24Hour={true}
                            display="default"
                            onChange={input4.changeSelectedDate}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                    <Header>Metodo de pago:</Header>
                    <View style={styles.row} onValueChange={value => setValue(value)} value={value} >
                      <IconButton 
                        icon="wallet"
                        color={btnColors.icon1} 
                        size={30}
                        style={{...styles.toggleBtn, backgroundColor: btnColors.back1, borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                        onPress={() => changeButtonColor("boto1")} 
                        >Cartera</IconButton>
                      <IconButton 
                        icon={require('../assets/PayPal.png')}
                        color={btnColors.icon2}
                        size={30}
                        style={{...styles.toggleBtn, backgroundColor: btnColors.back2, borderRadius: 0}}
                        onPress={() => changeButtonColor("boto2")} 
                        ></IconButton>
                      <IconButton
                        icon={require('../assets/Visa.png')}
                        color={btnColors.icon3}
                        size={30}
                        style={{...styles.toggleBtn, backgroundColor: btnColors.back3, borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                        onPress={() => changeButtonColor("boto3")} 
                      ></IconButton>
                    </View>
                    <Header>Importe total:</Header>
                    <View style={{...styles.row, alignItems: "center", marginVertical:10}}>
                      <Text style={{padding: 5, paddingHorizontal:15, flex: 1, fontSize:20, marginRight:10, color: theme.colors.primary, fontWeight: "700", borderWidth:1, borderRadius:5}}>20$</Text>
                      <View style={{flexDirection:'row-reverse'}}><Button mode='contained'>Reservar</Button></View>
                    </View>
                  </Card.Content>
              </Card>
            </ScrollView>
      </Background>

)}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    width: '100%'
  },
  row: {
    flexDirection: 'row',
  },
  imageViewStyle: {
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
  },
  iconBtn: {
    width: 60,
    height: 60,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 5
  },
  timeInput: {
    flexDirection: "row",
    backgroundColor: 'white',
    flex: 1,
    borderColor: "#777",
    borderWidth: 1,
    height: 60,
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 10,
    borderRadius: 5,
    marginVertical: 15
  },
  toggleBtn: {
    flex: 1,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    margin: 0,
    marginVertical: 15,
    height: 60
  }
});



