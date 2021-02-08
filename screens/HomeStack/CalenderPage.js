import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react'
import {View} from 'react-native'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {listCalenders} from '../../graphql/queries'
import {CategoriesContext} from '../../context/CategoriesContext';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


export default function A(){
  const [UserState, dispatch] = React.useContext(CategoriesContext);
  const getcalender=async()=>{
   try{
    const x= await API.graphql(
       graphqlOperation(
        listCalenders,{filter:{id:{eq:UserState.RequstedUserID}}}
       )
     ).then(
      (x)=>{
        console.log(x.data.listCalenders.items)
      }
     )

   }catch (error){
    console.log(error)
   }
  }
  getcalender()

        return(
          <View style={{flex:1,backgroundColor:'white'}}>
        <Calendar/>
        </View>
        )


    

}