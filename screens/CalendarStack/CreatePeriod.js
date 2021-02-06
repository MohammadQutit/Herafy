import React, { useState } from 'react';
import { View,  Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {CalenderContext} from '../../context/CalenderContext'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {createCalender} from '../../graphql/mutations'
import { input } from 'aws-amplify';

export default App = () => {
  const [UserState,dispatch]=React.useContext(CalenderContext)
  //console.log(UserState.UserID)
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    //console.log(currentDate)
  };
  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const [date2, setDate2] = useState(new Date(1598051730000));
  const [mode2, setMode2] = useState('date');
  const [show2, setShow2] = useState(false);
  const onChange2 = (event2, selectedDate2) => {
    const currentDate2 = selectedDate2 || date2;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate2)
    //console.log(currentDate2)
  };
  const showMode2 = (currentMode2) => {
    setShow2(!show2);
    setMode2(currentMode2);
  };
  const showDatepicker2 = () => {
    showMode2('date');
  };

  
 const  addperiod=async()=>{
      try{
        await API.graphql(
          graphqlOperation(createCalender,{
          input:{
            StartTime:date,
            EndTime:date2,
            id:UserState.UserID,
            
          },})
        ).then(
          ()=>{
            console.log("done")
          }
        )

      }catch(error){
        console.log(error);
      }
    }

  
  
  return (
    <View style={style.container} >
      <View style={style.First_view}>
        <Text style={style.Text_}>{new Date(date).toISOString().slice(0, 10).toString()}</Text>
        <TouchableOpacity onPress={showDatepicker} style={style.Button_} >
          <Text style={style.Text_Button}>Choose Start Date</Text>
        </TouchableOpacity>
      </View>
      <View style={style.Second_View}>
        <Text style={style.Text_}>{new Date(date2).toISOString().slice(0, 10).toString()}</Text>
        <TouchableOpacity onPress={showDatepicker2} style={style.Button_}>
          <Text style={style.Text_Button}>Choose End Date</Text>
        </TouchableOpacity>
      </View>
      <View style={style.Third_view}>
        <TouchableOpacity style={style.Button_} onPress={()=>addperiod()}>
          <Text style={style.Text_Button}>Submit</Text>
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
      {show2 && (
        <DateTimePicker
          testID="dateTimePicker2"
          value={date2}
          mode={mode2}
          is24Hour={true}
          display="default"
          onChange={onChange2}
        />
      )}
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  First_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Second_View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  Third_view: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button_: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4D3886',
    alignItems: 'center',
    width: '40%',
  },
  Text_Button: {
    color: 'white',
  },
  Text_: {
    color: 'purple',
    width: '50%',
    fontWeight: 'bold',
  },
})