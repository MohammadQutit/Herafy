import React from 'react'
import {View,Text,StyleSheet,Alert} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import propTypes from 'prop-types';
import {deletePost,updatePost} from '../../graphql/mutations'
import {PostsContext} from '../../context/PostsContext'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'

export default function Rowlist(props){
    const [UserState,dispatch]=React.useContext(PostsContext)
    
   console.log(UserState.Userposts)
    React.useEffect(()=>{
        setdata(props.text)
    },[]) 

 
   const [data,setdata]=React.useState("")
   async function deletepost(){
    
   
     try{
        await API.graphql(
            graphqlOperation(deletePost,{input:{id:props.Id}})
        ).then(
            Alert.alert('deleted successfullt')
        )
        const edit=UserState.Userposts.filter((x)=>{
            if(x.id!==props.Id){
                return x;
            }
        })
        dispatch({type:'SetText',Userposts:edit})
      
    }catch(error){
        console.log(error)
    }

    
}
async function updatepost(){
try{
    await API.graphql(
        graphqlOperation(
            updatePost,{input:{id:props.Id,Text:data}}
        )
    ).then(
        Alert.alert("Updated successfully")
        
    )
   props.navigation.pop()
}catch(error){
    console.log(error)
}
}
const  fetchImage= async()=>{
    try{
      if(props.firstImage!==null){
    const result =await Storage.get(UserState.Userposts.Image.key.slice(7))
   // console.log(result)
    setImage(result)
   
      }
  
      
    }catch(error){
      console.log(error.message)

    }
    fetchImage()
  }

    return(
        <View style={style.container}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity
           onPress={()=>{       
               deletepost()
           }}
           // style={{margin:10}}
            ><Icon name="delete" size={40}/></TouchableOpacity>
             <TouchableOpacity
            onPress={()=>{updatepost()}}
            style={style.button}
            ><Icon name="calendar-edit" size={40}/></TouchableOpacity>
            </View>
          
        <TextInput
        placeholder="write anything"
        multiline={true}
        numberOfLines={8}
        style={style.TextInput}
        autoCorrect={true}
        maxLength={477}
        onChangeText={(text)=>{setdata(text)}}
        //value={props.text}
        defaultValue={props.text}
        />
        
        
        </View>
    )
}
Rowlist.propTypes={
    Id:propTypes.string,
    text:propTypes.string,
    image:propTypes.object,
    navigation:propTypes.object,
    
    
}
const style=StyleSheet.create({
    container:{
        flex:1,
    },
    TextInput: {
        fontSize: 20,
        lineHeight: 30,
        padding: 10,
        textDecorationLine: 'none',
        flex: 3,
        margin: 3,
        padding: 10,
        fontSize: 18,
        backgroundColor: 'white',
      },
      PostImagesView: {width:"100%",height:260,flexDirection:"row",justifyContent:"center"},
      postImages:{width:"95%",height:"95%",margin:4},
    
})