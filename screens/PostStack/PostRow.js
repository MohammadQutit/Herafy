import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Storage}from "@aws-amplify/storage"
import PropTypes from 'prop-types';

const DefPath="https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg"
export default function Post(props) {
  const [ready,setReady]=React.useState(false)
  const [image,setImage]=React.useState("");
  const [profileImg,setProfileimg]=React.useState(DefPath)
  
  const PickPoster= (ID)=>{
    console.log(ID)
    props.dispatch({type:"choosePost", PosterID:ID})
    props.navigation.navigate('Profile')
    
  
  }

  const  fetchImage= async()=>{
    try{
      if(props.firstImage!==null){
    const result =await Storage.get(props.firstImage.key.slice(7))
    console.log(result)
    setImage(result)
    
      }
      if(props.Profileurl!==null){
        const result2= await Storage.get(props.Profileurl.key.slice(7))
        console.log(props.Profileurl)
        setProfileimg(result2)
      }
      setReady(true)
  
      
    }catch(error){
      console.log(error.message)

    }
  }

  React.useEffect(()=>{
fetchImage()
  },[])
 
  return (
    props.firstImage!== null?
    <View style={style.container}>
      <View style={style.CreatorInfo}>
        <TouchableOpacity style={style.Touchable} onPress={() => {PickPoster(props.ID)}}>
        <Image source={{uri:profileImg}} style={style.profileImage} />
          <Text style={style.CreatorText}>
            {props.FirstName + ' ' + props.LastName}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.PostTextView}>
        <Text style={style.PostText}>
          {props.postText}
        </Text>
      </View>
      {
        ready === true?
      <View style={style.PostImagesView}> 
      
          <Image style={style.postImages} source={{uri:image}} />
         
      </View>
      :
      <View style={style.PostImagesView}> 
      
          <Image style={style.postImages} source={{uri:"https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg"}} />

      </View>
}
    </View>:
    <View style={[style.container,{height:270}]}>
      <View style={style.CreatorInfo}>
        <TouchableOpacity style={style.Touchable} onPress={() => {PickPoster(props.ID)}}>
          <Image source={props.Profileurl} style={style.profileImage} />
          <Text style={style.CreatorText}>
            {props.FirstName + ' ' + props.LastName}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.PostTextView}>
        <Text style={style.PostText}>
          {props.postText}
        </Text>
      </View>




    </View>
  );
}
Post.propTypes = {
    Profileurl: PropTypes.object,
    FirstName:PropTypes.string,
    LastName:PropTypes.string,
    postText:PropTypes.string,
    firstImage:PropTypes.object,
    secondImage:PropTypes.number,
    navigation:PropTypes.object,
    ID:PropTypes.string,
    dispatch:PropTypes.func,
  };

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 430,
    backgroundColor: 'white',
    marginTop:5,
    marginBottom:5,
  },
  CreatorInfo: {
      
    flexDirection: 'row',
    width: '100%',
    height: 70,
    alignItems: 'center',
    
  },
  Touchable: {flexDirection: 'row', alignItems: 'center'},
  profileImage: {
    height: 55,
    width: 55,
    borderRadius :30 ,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  CreatorText: {paddingStart: 10, fontSize: 16, fontWeight: 'bold'},
  PostText: {padding: 10, fontSize: 17},
  PostTextView: {width: '100%', height: 110},
  PostImagesView: {width:"100%",height:260,flexDirection:"row",justifyContent:"center"},
  postImages:{width:"95%",height:"95%",margin:4}
});
