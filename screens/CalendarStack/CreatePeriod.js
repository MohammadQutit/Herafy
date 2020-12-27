import React from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,SafeAreaView,StatusBar} from 'react-native'
import {getStatusBarHeight}from 'react-native-status-bar-height'
export default function Period(){

    return(
        <SafeAreaView style={style.container}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <View style={style.First_View}>
            <View style={style.TextInput_View}>
            <TextInput
            placeholder='StartDate'
            placeholderTextColor='black'
            fontweight='bold'
            backgroundColor='#e6e6fa'
            
            
            
            />
            <TextInput
            placeholder='EndDate'
            placeholderTextColor='black'
            fontweight='bold'
            backgroundColor='#e6e6fa'
            
           
            
            />
            </View>
            <View >
                <TouchableOpacity style={style.Button}>
                    <Text style={style.Text_Button}>Create</Text>
                </TouchableOpacity>
            </View>
           </View>



           <View style={style.Second_View}>
            </View>
            <View style={style.third_View}>
            </View>
        </SafeAreaView>
    )

}
const style=StyleSheet.create({
    container:{
        flex:1,
    },
    TextInput_View:{
        flexDirection:'column',
         
    },
    First_View:{
        flexDirection:'row',
        paddingTop:getStatusBarHeight(),
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    Second_View:{
        flex:1,

    },
    third_View:{
        flex:1,
    },
    Button_View:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    Text_Button:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        

    },
    Button:{
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#4D3886',
        alignItems: 'center',
        width:150,
        justifyContent:'center',
        alignItems:'center'
        
        
        
    
    },
   

})