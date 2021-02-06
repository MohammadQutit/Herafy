import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react'
import {View} from 'react-native'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {getCalender} from '../../graphql/queries'


export default function A(){

        return(
          <View style={{flex:1,backgroundColor:'white'}}>
        <Calendar/>
        </View>
        )


    

}