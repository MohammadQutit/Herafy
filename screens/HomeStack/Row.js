import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity,Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import {moss} from '../../assets/color'
import {Storage}from "@aws-amplify/storage"

const DefPath="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"

const zerorating=0
const {width}=Dimensions.get('window');
export default function Row(props) {
  const [profileImg,setProfileimg]=React.useState(DefPath)

  const  fetchImage= async()=>{
    try{
      if(props.Image!==null){
    const result =await Storage.get(props.Image.key.slice(7))
    console.log(result)
    setProfileimg(result)
    
      }
      
      
  
      
    }catch(error){
      console.log(error.message)

    }
  }
  React.useEffect(()=>{
    fetchImage()


  },[])








  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          props.navigation.navigate('ProfilePage');
          props.SelectUser({type:"ChooseUser",RequstedUserID:props.ID})

            
       

        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={{uri:profileImg}} style={{width:100,height:100}}/>
        </View>

        <View
          style={{
            flex: 1,
            paddingStart: 20,
            paddingTop: 15,
            alignContent: 'center',
            
            height: '100%',
          }}>
          <Text style={styles.Text}>
            {props.FirstName + ' ' + props.LastName}
          </Text>
          <View style={{flexDirection:"row",alignItems:"center",paddingStart:10,paddingTop:10}}>
            <Icon name="star" color={moss} size={22}/>
            <Text style={{paddingStart:10,fontSize:14,fontWeight:"bold"}}>{
            !isNaN(props.Rating/props.NumberOFRater)?
            (props.Rating/props.NumberOFRater).toFixed(1)
          :
          zerorating
          }</Text>

            <Icon style={{marginStart:width/10}} name="person" color={moss} size={22}/>
            <Text style={{paddingStart:10,fontSize:14,fontWeight:"bold"}}>{props.NumberOFRater}</Text>

           



          </View>
          <View style={{flexDirection:"row",marginTop:15,alignItems:"center",paddingStart:10}}>
          <Icon  name="location" size={22} color={moss}/>
            <Text style={{paddingStart:10,fontSize:14,fontWeight:"bold"}}>{props.Location}</Text>
          </View>
          
        </View>
        

        
      </TouchableOpacity>
    </View>
  );
}

Row.propTypes = {
  ID:PropTypes.string,
  FirstName: PropTypes.string,
  LastName: PropTypes.string,
  PhoneNumber: PropTypes.string,
  NumberOFRater: PropTypes.number,
  Rating: PropTypes.number,
  Location:PropTypes.string,
  navigation: PropTypes.object,
  SelectUser:PropTypes.func,
  Image:PropTypes.object
};

const styles = StyleSheet.create({
  row: {
    flex:1,
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    width: '100%',
    backgroundColor: 'white',
    //borderBottomColor:"purple",
    //borderBottomWidth:1,
    borderRadius: 15,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 19,
    color: 'black',
  },
  Text1: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'black',
  },
});
