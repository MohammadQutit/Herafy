import React, { useState } from 'react';
import { View,  Platform, StyleSheet, TouchableOpacity, Text , Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {CalenderContext} from '../../context/CalenderContext'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {updateCalender} from '../../graphql/mutations'
import {moss} from '../../assets/color'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export default App = ({navigation}) => {
  const [UserState,dispatch]=React.useContext(CalenderContext)
  const start=new Date(UserState.Starttime)
  const end=new Date(UserState.Endtime)
  
  console.log(UserState.Id)
  const [date, setDate] = useState(start);
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
  const [date2, setDate2] = useState(end);
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

  
 const  updatecalender=async()=>{
  if(Date.parse(new Date(date))>Date.parse(new Date(date2))){
    Alert.alert("Error","End Date should be Bigger than Start Date")

  }
  else{
      try{
       // console.log(Date.parse(new Date(date))>Date.parse(new Date(date2)))
        
       
        await API.graphql(
          graphqlOperation(updateCalender,{
          input:{
            StartTime:new Date(date).toISOString().slice(0, 10).toString(),
            EndTime:new Date(date2).toISOString().slice(0, 10).toString(),
            id:UserState.Id,
            
          },})
        ).then(
          ()=>{
            //console.log("done")
            Alert.alert('Updated successfuly')
          }
          
        )

      }catch(error){
        console.log(error);
      }
  }
    }

    
  
  
  return (
    <View style={style.container} >
      <View style={style.First_view}>
        <View style={{width:"80%",flexDirection:"row"}}>
        <Text style={style.Date_Header_Text} >Start Date</Text>

        </View>
      
        <View style={style.First_Date}>
        <View style={{flexDirection:"column",flex:1,marginHorizontal:15}}>
         
        <Text style={style.Text_}>{new Date(date).toISOString().slice(0, 10).toString()}</Text>
        </View>
        <TouchableOpacity onPress={showDatepicker} style={style.Button_} >
      <Icon name="calendar-edit" color="black" size={45}/>
        </TouchableOpacity>
        </View>
      </View>
      <View style={style.Second_View}>
      <View style={{width:"80%",flexDirection:"row"}}>
        <Text style={style.Date_Header_Text} >End Date</Text>

        </View>
      
        <View style={style.First_Date}>
        <View style={{flexDirection:"column",flex:1,marginHorizontal:15}}>
         
        <Text style={style.Text_}>{new Date(date2).toISOString().slice(0, 10).toString()}</Text>
        </View>
        <TouchableOpacity onPress={showDatepicker2} style={style.Button_} >
      <Icon name="calendar-edit" color="black" size={45}/>
        </TouchableOpacity>
        </View>
      </View>
      <View style={style.Third_view}>
        <TouchableOpacity style={style.Button_2} onPress={()=>{updateCalender()}}>
          <Text style={style.Text_Button}>Update Period</Text>
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
    alignItems:"center",
    flexDirection: 'column',
  },
  First_Date:{
    flexDirection:"row",
    width:"90%",
    height:"40%",
    backgroundColor:"white",
    borderRadius:4,
    justifyContent:"center",
    alignItems:"center",
    borderTopColor:"#F2F2F2",
    borderTopWidth:3,
    borderBottomWidth:3,
    borderBottomColor:"#F2F2F2"

  },
  Second_View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

  },
  Third_view: {
    flex: 2,
    
    alignItems: 'center',
  },
  Button_: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '20%',
    backgroundColor:moss
  },
  Button_2: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '40%',
    backgroundColor:moss
  },
  Text_Button: {
    color: 'white',
    fontWeight:"bold",
    fontSize:16
  },
  Text_: {
    color: moss,
    width: '80%',
    fontWeight: 'bold',
    fontSize:25,
    
    textAlignVertical: "center",
    height:55,
   
  },
  Date_Header_Text:{
    fontWeight:"bold",
    fontSize:15,
  },
})