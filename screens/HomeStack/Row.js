import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity,Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
export default Row;
const {width}=Dimensions.get('window');
function Row(props) {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          props.navigation.navigate('ProfilePage');
          setTimeout(() => {
            props.SelectUser({type:"ChooseUser",RequstedUserID:props.ID})
            
          }, 100); 

        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="person" size={70} color="#4D3886" />
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
            <Icon name="star" color="#4D3886" size={22}/>
            <Text style={{paddingStart:10,fontSize:14,fontWeight:"bold"}}>{( props.Rating/props.NumberOFRater).toFixed(1)}</Text>

            <Icon style={{marginStart:width/10}} name="person" color="#4D3886" size={22}/>
            <Text style={{paddingStart:10,fontSize:14,fontWeight:"bold"}}>{props.NumberOFRater}</Text>

           



          </View>
          <View style={{flexDirection:"row",marginTop:15,alignItems:"center",paddingStart:10}}>
          <Icon  name="location" size={22} color="#4D3886"/>
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
