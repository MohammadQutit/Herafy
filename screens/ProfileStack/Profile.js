import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  ActivityIndicator,
  
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Auth } from "@aws-amplify/auth"
import { graphqlOperation } from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import { getUser } from '../../graphql/queries';
import { API } from '@aws-amplify/api/src/API'
import {ProfileContext} from '../../context/ProfileContext';



//const [phone, setphone] = useState('')
//const [email, setemail] = useState('')
//const [name, setname] = useState('')
//const [location, setlocation] = useState('')
//const [work, setwork] = useState('')
//const [rate, setrate] = useState('')


export default function Craftprofile({ navigation }) {
  const [UserState,dispatch]=React.useContext(ProfileContext);
  const [isReady,SetIsReady]=React.useState(false)
  const [data, setdata] = React.useState(0)



  const sets = (id) => {
    setid(id)

  }

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
      
        
      }


    )

  }
 
  React.useEffect(() => {
    async function GetUserID(params) {
      try {
       const {attributes} =await Auth.currentUserInfo().then(
         await Auth.currentUserInfo().then((userInfo) => {
           const {attributes = {}} = userInfo
          dispatch({type:'setsuserID',UserID:attributes['sub']}) 

            API.graphql(graphqlOperation(getUser,{id:attributes['sub']})).then( 
          (x)=>{
            set(x.data.getUser)
            console.log(x.data.getUser)
            SetIsReady(true)
            
          }
            
           
             
            )
          
           
         }
       ))
        
      } catch (error) {
        console.log(error.message);
      }
      
    }

    
      GetUserID()
    
    

  }, [])
  
 /**  React.useEffect(() => {
    async function GetUserID(params) {
      try {
        await API.graphql(graphqlOperation(getUser,{id:UserState.UserID})).then( 
          (x)=>{
            set(x.data.getUser)
            console.log(x.data.getUser)
            SetIsReady(true)
            
          })     
         }catch (error) {
        console.log(error.message);
      }     
    }
      GetUserID()
  }, [])
*/
 
  return (

     isReady === false ?
     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
       <ActivityIndicator size="large" color="orange"/>

     </View>
     :
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={[styles.userinfosection, { flex: 1 }]}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Image
            source={require('../../assets/Profile.png')}
            style={styles.category_icon}
          />
          <View style={styles.headear}>
            <Text style={styles.title}>{data.firstname+ " "+data.lastname}</Text>
            <Text style={{ color: 'purple' }}>{data.category}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Edit')}
              style={{
                height: 40,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="square-edit-outline" size={30} color="purple" />
              <Text style={{ color: 'purple', paddingStart: 10 }}>Edit Page</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.info, { flex: 2 }]}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="purple" size={25} />
          <Text style={styles.textstyle}>{data.city}</Text>
        </View>

        <View style={styles.row}>
          <Icon name="phone" color="purple" size={25} />
          <Text style={styles.textstyle} selectable>
            {data.phonenumber}
          </Text>
        </View>

        <View style={styles.row}>
          <Icon name="email" color="purple" size={25} />
          <Text style={styles.textstyle}>{data.email}</Text>
        </View>

        <View style={styles.row}>
          <Icon name="star" color="purple" size={25} />
          <Text style={styles.textstyle} selectable>
            {data.rate}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate('Review') }}>
          <Icon name="comment-text-multiple" color="purple" size={60} />
          <Text style={styles.textFont}>Show Users Reviews</Text>
        </TouchableOpacity>
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  info: {
    paddingHorizontal: 30,
    justifyContent: "flex-start"

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
    marginTop: 20
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
  textFont: {
    fontWeight: "bold",


  }
});
