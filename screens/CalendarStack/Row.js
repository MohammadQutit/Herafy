import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'
export default function Row(props){

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
           onPress={()=>{}}
            style={style.button}
            ><Icon name="warning" size={40}/></TouchableOpacity>
           
            
            <TouchableOpacity
            onPress={()=>{}}
            style={style.button}
            ><Icon name="warning" size={40}/></TouchableOpacity>
           
            </View>
           
            
           
        </View>
    )

}
Row.PropTypes={
    StartTime:PropTypes.string,
    EndTime:PropTypes.string,
    navigation:PropTypes.object,
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