import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text,ActivityIndicator} from 'react-native';
import { Auth } from "@aws-amplify/auth";
import {CalenderContext} from '../../context/CalenderContext'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {getUser3} from "../../graphql/queries"
import {getDates} from '../../functions/CalendarGEN'
import { set } from 'react-native-reanimated';

export default function A({navigation}) {
  const [UserState,dispatch]=React.useContext(CalenderContext)
  const [Ready,SetReady]=React.useState(false)
  const [Periods,setPeriods]=React.useState({
    '2020-12-14': {color: 'rgba(178,34,34,0.6)'},
    '2020-12-15': {color: 'rgba(178,34,34,0.6)'},
    '2020-12-16': {color: 'rgba(178,34,34,0.6)'},
    '2020-12-17': {color: 'rgba(178,34,34,0.6)'},
  })

  const PeriodsGEN=()=>{

  }

  React.useEffect(()=>{
    async function GetUserID(params) {
      try {
        SetReady(false)
       const {attributes} =await Auth.currentUserInfo()
       dispatch({type:"setID",UserID:attributes['sub']})
       console.log(attributes['sub'])
       const c=await API.graphql(graphqlOperation(getUser3,{id:attributes['sub']}))
       const s=c.data.getUser.Calenders.items
       console.log(s)
       SetReady(true)
       let gen=[]
              for (let i=0;i<s.length;i++){
           gen=[...getDates(new Date( s[i].StartTime),new Date(s[i].EndTime)),...gen]
        
              }
             let obj ={}
for(let i=0;i<gen.length;i++){
    obj={...obj,[gen[i]]:{color: 'rgba(255,100,100,0.8)'}}
}
setPeriods(obj)


       
       console.log(gen)

         
       
       
        
      } catch (error) {
        SetReady(true)
        console.log(error.message);
      }
      
    }
  GetUserID()
  },[])

  const day = {
    '2020-12-14': {startingDay: true, color: 'red'},
    '2020-12-15': {color: 'rgba(255,100,100,0.8)'},
    '2020-12-16': {color: 'red'},
    '2020-12-17': {color: 'red', endingDay: true},
  };
  return (
    Ready === true?
    <View style={style.Container}>
      <View style={style.Calender_View}>
    <Calendar
      markedDates={Periods}
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
    :
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size="large" color="orange"/>

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
