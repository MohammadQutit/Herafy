import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import { Auth } from "@aws-amplify/auth";
import {CalenderContext} from '../../context/CalenderContext'

export default function A({navigation}) {
  const [UserState,dispatch]=React.useContext(CalenderContext)
  React.useEffect(()=>{
    async function GetUserID(params) {
      try {
       const {attributes} =await Auth.currentUserInfo().then(
         await Auth.currentUserInfo().then((userInfo) => {
           const {attributes = {}} = userInfo
           dispatch({type:"setID",UserID:attributes['sub']})
           
           
         }
       ))
       
        
      } catch (error) {
        console.log(error.message);
      }
      
    }
  GetUserID()
  },[])
  console.log(UserState.UserID)

  const day = {
    '2020-12-14': {startingDay: true, color: 'green'},
    '2020-12-15': {color: 'green'},
    '2020-12-16': {color: 'green'},
    '2020-12-17': {color: 'green', endingDay: true},
  };
  return (
    <View style={style.Container}>
      <View style={style.Calender_View}>
    <Calendar
      markedDates={day}
      // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
      markingType="period"
    />
    </View>
    <View style={style.Button_View}>
      <TouchableOpacity style={style.Button} onPress={()=>{navigation.navigate('Createperiod')}}>
        <Text style={style.TextButton}>Create Period</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
const style=StyleSheet.create({
  Container:{
    flex:1,
  },
  Calender_View:{
    flex:2,
  },
  Button_View:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  Button:{
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4D3886',
    alignItems: 'center',
    width:150,
  },
  TextButton:{
    fontSize: 17,   
    fontWeight: 'bold',
    color: 'white',

  },

})
