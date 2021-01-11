import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default Row;

function Row(props) {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          props.navigation.navigate('ProfilePage');
        }}>
        <Ionicons name="person" size={70} color="purple" />

        <View
          style={{
            flexDirection: 'column',
            paddingStart: 20,
            paddingTop: 20,
            alignContent: 'center',
            height: '100%',
          }}>
          <Text style={styles.Text}>{props.FirstName+" "+props.LastName}</Text>
          
        </View>
        <View style={{flexDirection:"row",backgroundColor:"red",width:"100%"}}>
        <Text style={styles.Text1}>
              {props.Rating}
            </Text>
            <Text style={styles.Text1}>
              {props.NumberOFRater}
            </Text>
         
          
            


          </View>
      </TouchableOpacity>
    </View>
  );
}

Row.propTypes = {
  FirstName: PropTypes.string,
  LastName:PropTypes.string,
  PhoneNumber: PropTypes.number,
  NumberOFRater:PropTypes.number,
  Rating:PropTypes.number,
  navigation:PropTypes.object
};

const styles = StyleSheet.create({
  row: {
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    //borderBottomColor:"purple",
    //borderBottomWidth:1,
    borderRadius: 15,
  },
  Text:{
    fontWeight:'bold',
    fontSize:15,
    color:"black"

  },
  Text1:{
    fontWeight:'bold',
    fontSize:13,
    color:"black"

  }
});
