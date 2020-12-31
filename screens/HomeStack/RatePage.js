import react from 'react'
import React, { useState,setState } from 'react'
import {View,TouchableWithoutFeedback,StyleSheet, SafeAreaView,StatusBar, Text,Easing} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome'

const numstar=5
export default class A extends React.Component {
    state={
        rate:1,
        Review:'',
    }
    rate = star=>{
        this.setState({rate:star})
        
    }
    handleReview = (text) => {
        this.setState({ Review: text })
     }
   

    
    render()
    {
    let stars =[]
    
    for(let x=1;x<=numstar;x++)
    {
        stars.push(     
                <TouchableWithoutFeedback 
                 key={x} 
                 onPress={()=>{
                    this.rate(x);
                }}>
                <Animated.View >
                    <Star filled={x <= this.state.rate ? true : false}  />
                </Animated.View>
                 </TouchableWithoutFeedback>   
        )
    }
    

    return(

    

        <SafeAreaView style={style.container}>
              <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <View style={style.textinput}> 
           
                <TextInput
                placeholder="type your review"
                style={style.inline_text_style}
                textAlignVertical='top'
                backgroundColor='#e6e6fa'
                placeholderTextColor='black'
                fontWeight='bold'
                onChangeText={this.handleReview}
                
                
                
                />
            </View>
            <View style={style.stars_view}>{stars}</View>
            <View style={style.Button_View}>
                <TouchableOpacity style={style.Button} onPress={()=>{}}>
                    <Text style={style.Text_Button}>
                        Submit
                     </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>    
    )
    }
    
}
class Star extends React.Component {
    render(){
    return(
        <Icon name={this.props.filled === true ? 'star' : 'star-o'} 
        color="blue" 
        size={32} 
        style={{marginHorizontal:6}}/>
    )
    }
}
const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    textinput:{
        flex:2,
        paddingTop:10,
        paddingLeft:10,
        
    },
    inline_text_style:{
        width:'98%',
        height:'90%',
        
    },
    stars_view:{
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    Button_View:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        


    },
    Button:{
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#4D3886',
        alignItems: 'center',
        width:150,
        
        
        
        
       // marginTop: 10,
    },
    Text_Button:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',

    },
})