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
import {moss} from '../../assets/color'
import {Storage} from '@aws-amplify/storage';



//const [phone, setphone] = useState('')
//const [email, setemail] = useState('')
//const [name, setname] = useState('')
//const [location, setlocation] = useState('')
//const [work, setwork] = useState('')
//const [rate, setrate] = useState('')

const zerorating=0
const DefPath="https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg"

export default function Craftprofile({ navigation }) {
  const [UserState,dispatch]=React.useContext(ProfileContext);
  const [isReady,SetIsReady]=React.useState(false)
  const [data, setdata] = React.useState(0)
  const [image,setImage]=React.useState(DefPath)



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
        numberofrater:obj.NumberOfUsers,
        Image:obj.Imagem
      
        
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
            if(x.data.getUser.Image !== null)
            Storage.get(x.data.getUser.Image.key.slice(7)).then((result)=>{
              setImage(result)
           

            })
            else
            setImage(DefPath)
           
            
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
  
 
 
  return (

     isReady === false ?
     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
       <ActivityIndicator size="large" color={moss}/>

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
            source={{uri:image}}
            style={styles.category_icon}
          />
          <View style={styles.headear}>
            <Text style={styles.title}>{data.firstname+ " "+data.lastname}</Text>
            <Text style={{ color: 'black',fontWeight:'bold' }}>{data.category}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Edit')}
              style={{
                height: 40,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="square-edit-outline" size={30} color={moss} />
              <Text style={{ color: 'black',fontWeight:'bold', paddingStart: 10 }}>Edit Page</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.info, { flex: 1 }]}>
      {data.category!==" " ?
        <View style={styles.row}>
         
          <Icon name="map-marker-radius" color={moss} size={25} />
          <Text style={styles.textstyle}>{data.city}</Text>

    
        </View>
          :<View/>  }

        <View style={styles.row}>
          <Icon name="phone" color={moss} size={25} />
          <Text style={styles.textstyle} selectable>
            {data.phonenumber}
          </Text>
        </View>

        <View style={styles.row}>
          <Icon name="email" color={moss} size={25} />
          <Text style={styles.textstyle}>{data.email}</Text>
        </View>
{ data.category !==" "?
        <View style={styles.row}>
          <Icon name="star" color={moss} size={25} />
          <Text style={styles.textstyle} selectable>
            {!isNaN(data.rate/data.numberofrater)?
            data.rate/data.numberofrater
            :
            zerorating
            }
          </Text>
        </View>
        :
        <View style={styles.row}></View>
        }
      </View>
      <View style={{ flex: .5, alignItems: "center" }}>
        { data.category !==" "?
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate('Review') }}>
          <Icon name="comment-text-multiple" color={moss} size={60} />
          <Text style={styles.textFont}>Show Users Reviews</Text>
        </TouchableOpacity>
        :<View/>
}
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
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    marginTop: 20
  },
  category_icon: {
    height: 125,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    borderRadius: 15,
    borderColor:moss,
    borderWidth:2
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
  textFont: {
    fontWeight: "bold",


  }
});
