import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native'
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {deleteCalender} from '../../graphql/mutations'
export default function Row(props){

    async function deleteperiod(){
    
        console.log(props.ID)
         
         try{
            await API.graphql(
                graphqlOperation(deleteCalender,{input:{id:props.ID}})
            ).then(
                Alert.alert('deleted successfullt')
            )
        }catch(error){
            console.log(error)
        }
    
        
    }

    return(
        <View style={style.container}>
            <View style={{flexDirection:'column',flex:1.5,backgroundColor:'white'}}>
            <Text style={style.text}>{props.StartTime}</Text>
            <Text style={style.text}>{props.EndTime}</Text>
            <View
  style={{
    borderBottomColor: '#909090',
    borderBottomWidth: 1,
    marginTop:10,
    marginBottom:10,
  }}
/>
            </View>
            <View style={style.verticleLine}></View>
           <View style={{flexDirection:'row',flex:1,backgroundColor:'white'}}>
           
           <TouchableOpacity
           onPress={()=>{       
               deleteperiod()
           }}
            style={style.button}
            ><Icon name="warning" size={40}/></TouchableOpacity>
           
            
            <TouchableOpacity
            onPress={()=>{
                props.navigation.navigate('UpdatePeriod');
                props.Dispatch({type:'setcalnderid',Id:props.ID})
                props.Dispatch({type:'set',Starttime:props.StartTime,Endtime:props.EndTime})
                
            }}
            style={style.button}
            ><Icon name="warning" size={40}/></TouchableOpacity>
           
            </View>
           
            
           
        </View>
    )

}
Row.propTypes={
    StartTime:propTypes.string,
    EndTime:propTypes.string,
    navigation:propTypes.object,
    ID:propTypes.string,
    Dispatch:propTypes.func,
    

}
const style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        margin:10,

    },
    row:{
        flexDirection:'row'
    },
    button:{
        margin:10,
        borderWidth:1,
       
    },  
    text:{
        fontWeight:'bold',
        fontSize:15,
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
        marginLeft:100,
        
        
      },
      
    icon:{

    },
})