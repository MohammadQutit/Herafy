import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//const [phone, setphone] = useState('')
//const [email, setemail] = useState('')
//const [name, setname] = useState('')
//const [location, setlocation] = useState('')
//const [work, setwork] = useState('')
//const [rate, setrate] = useState('')

export default function Craftprofile({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={[styles.userinfosection, {flex: 1}]}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Image
            source={require('../../assets/Profile.png')}
            style={styles.category_icon}
          />
          <View style={styles.headear}>
            <Text style={styles.title}>Here UserName</Text>
            <Text style={{color: 'purple'}}>Here what he work</Text>
          </View>
        </View>
      </View>

      <View style={[styles.info, {flex: 1}]}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="purple" size={25} />
          <Text style={styles.textstyle}>Here Location</Text>
        </View>

        <View style={styles.row}>
          <Icon name="phone" color="purple" size={25} />
          <Text style={styles.textstyle} selectable>
            Here phone
          </Text>
        </View>

        <View style={styles.row}>
          <Icon name="email" color="purple" size={25} />
          <Text style={styles.textstyle}>Here email</Text>
        </View>

        <View style={styles.row}>
          <Icon name="star" color="purple" size={25} />
          <Text style={styles.textstyle} selectable>
            Rating
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
    
          flexDirection: 'row',
        }}>
          <View style={{flex: 1,alignItems:"center"}}>
        <TouchableOpacity style={{ alignItems: 'center'}} onPress={()=>{ navigation.navigate('Rating')}}>
          <Icon name="star" color="purple" size={60} />
          <Text>Rate</Text>
        </TouchableOpacity>
        </View>
        
        <View style={{flex: 1,alignItems:"center"}}>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>{ navigation.navigate('')}}>
          <Icon name="comment-text-multiple" color="purple" size={60} />
          <Text>Show Reviews</Text>
        </TouchableOpacity>
        </View>

        <View style={{flex: 1,alignItems:"center"}}>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>{ navigation.navigate('Calender')}}>
          <Icon name="calendar" color="purple" size={60} />
          <Text>Calendar</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    //plz change the width of the buttons of calender and rate
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    paddingHorizontal: 30,
  },
  headear: {
    marginTop: 50,
    marginLeft: 15,
  },
  userinfosection: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  category_icon: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    borderRadius: 15,
  },
  button: {
    height: 100,
    width: 100,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Buttonimage: {
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  texticon: {
    paddingTop: 15,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Cochin',
  },
  textstyle: {
    marginLeft: 10,
    color: 'purple',
    fontSize: 20,
  },
  buttonview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
