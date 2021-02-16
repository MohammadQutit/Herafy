import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CategoriesContext} from '../../context/CategoriesContext';
import {callNumber} from '../../functions/OpenDialar';
import { graphqlOperation } from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import { getUser } from '../../graphql/queries';
import { API } from '@aws-amplify/api/src/API';
import {moss} from '../../assets/color'

//const [phone, setphone] = useState('')
//const [email, setemail] = useState('')
//const [name, setname] = useState('')
//const [location, setlocation] = useState('')
//const [work, setwork] = useState('')
//const [rate, setrate] = useState('')
const zerorating=0
export default function Craftprofile({navigation}) {
  const [UserState, dispatch] = React.useContext(CategoriesContext);
  const [data, setdata] = React.useState(0);
  const [Ready,setready]=React.useState(false);
  
  const set = (obj) => {
    setdata(
      {
        city: obj.City,
        firstname: obj.FirstName,
        lastname: obj.LastName,
        phonenumber: obj.PhoneNumber,
        email:obj.Email,
        category:obj.Category,
        rate:obj.Rating,
        numberofrater:obj.NumberOfUsers  
      }
    )
   
  }

  React.useEffect(() => {
    async function GetUserdata() {
      try {
         await API.graphql(graphqlOperation(getUser,{id:UserState.RequstedUserID})).then((x)=>{
            set(x.data.getUser)
            setready(true)
            
            
          }
            )  
      } catch (error) {
        console.log(error.message);
      } 
    }
      GetUserdata()
  }, [])
  return (
    Ready===true?
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
            <Text style={styles.title}>{data.firstname+" "+data.lastname}</Text>
            <Text style={{color: 'black',fontWeight:'bold'}}>{data.category}</Text>
          </View>
        </View>
      </View>

      <View style={[styles.info, {flex: 1}]}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color={moss} size={30} />
          
          <Text style={styles.textstyle}>{data.city}</Text>
         
        </View>

        <View style={styles.row}>
          <Icon name="phone" color={moss} size={30} />
          <TouchableOpacity onPress={()=>{callNumber(data.phonenumber)}}>
          <Text style={styles.textstyle} selectable>
            {data.phonenumber}
          </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Icon name="email" color={moss} size={30} />
          <Text style={styles.textstyle}>{data.email}</Text>
        </View>

        <View style={styles.row}>
          <Icon name="star" color={moss} size={30} />
          <Text style={styles.textstyle} selectable>
            {!isNaN(data.rate/data.numberofrater)?
                data.rate/data.numberofrater
              :
              zerorating
            }
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
          <Icon name="star" color={moss} size={60} />
          <Text style={styles.textFont}>Rate</Text>
        </TouchableOpacity>
        </View>
        
        <View style={{flex: 1,alignItems:"center"}}>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>{ navigation.navigate('Reviews')}}>
          <Icon name="comment-text-multiple" color={moss} size={60} />
          <Text style={styles.textFont}>Show Reviews</Text>
        </TouchableOpacity>
        </View>

        <View style={{flex: 1,alignItems:"center"}}>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>{ navigation.navigate('Calender')}}>
          <Icon name="calendar" color={moss} size={60} />
          <Text style={styles.textFont}>Calendar</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    :
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator size="large" color={moss}/>
  </View>
    //plz change the width of the buttons of calender and rate
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
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
    color: 'black',

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
    color: 'black',
    fontSize: 20,
    fontWeight:'bold'
  },
  buttonview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textFont:{
    fontWeight:"bold",


  }
});
