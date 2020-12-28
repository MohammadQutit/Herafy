import React, {useState} from 'react';
import {View, Button, Platform,StyleSheet,TouchableOpacity, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export  default  App = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  

  return (
    <View style={style.container} >
        
        <View style={style.First_view}>
        <Text style={style.Text_}>Enter The Start Date</Text>
        <TouchableOpacity onPress={showDatepicker} style={style.Button_} >
        <Text style={style.Text_Button}>START DATE</Text>
        </TouchableOpacity>
       
        
        <Text style={style.Text_}>Enter The End Date</Text>
        <TouchableOpacity onPress={showDatepicker} style={style.Button_}>
        <Text style={style.Text_Button}>END DATE</Text>
        </TouchableOpacity>
        </View>
        
     
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const style=StyleSheet.create({
    container:{
        flex:1,
    },
    First_view:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flexDirection:'column'
        
        
    },
    Second_View:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
       
    },
    Button_:{
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#4D3886',
        alignItems: 'center',
        width:150,
    },
    Text_Button:{
        color:'white',
    },
    Text_:{
        backgroundColor:'#e6e6fa',
        height:'10%',
        width:'50%',
       
    },
})