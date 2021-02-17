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
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PostsContext} from '../../context/PostsContext'
import {callNumber} from '../../functions/OpenDialar';
import { graphqlOperation } from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import { getUser } from '../../graphql/queries';
import { API } from '@aws-amplify/api/src/API';
import {moss}from '../../assets/color'
import {Storage} from '@aws-amplify/storage';


//const [phone, setphone] = useState('')
//const [email, setemail] = useState('')
//const [name, setname] = useState('')
//const [location, setlocation] = useState('')
//const [work, setwork] = useState('')
//const [rate, setrate] = useState('')
const DefPath="https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg"

export default function Craftprofile({navigation}) {

  const [UserState,dispatch]=React.useContext(PostsContext)
  const [ready,setready]=React.useState(false)
  const [ProfileImage,setProfileImage]=React.useState(DefPath)
  
console.log(UserState)
  const [data, setdata] = React.useState(0);
  
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
        numberofusers:obj.NumberOfUsers,
        img:obj.Image
      }
    )
   
  }
  console.log(data)

  React.useEffect(() => {
    async function GetUser() {
      try {
         const x=await API.graphql(graphqlOperation(getUser,{id:UserState.PosterID}))
            set(x.data.getUser)  


            if(x.data.getUser.Image!==null){
              const result= await Storage.get(x.data.getUser.Image.key.slice(7))
              setProfileImage(result)
            }    

            setready(true)
           
           
      } catch (error) {
        console.log(error.message);
      } 
    }
      GetUser()
  }, [])


  return (
    ready===true?
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={[styles.userinfosection, {flex: 1}]}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Image
            source={{uri:ProfileImage}}
            style={styles.category_icon}
          />
          <View style={styles.headear}>
            <Text style={styles.title}>{data.firstname+" "+data.lastname}</Text>
            <Text style={{color: 'black',fontWeight:'bold'}}>{data.category}</Text>
          </View>
        </View>
      </View>

      <View style={[styles.info, {flex: 2}]}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color={moss} size={25} />
          <Text style={styles.textstyle}>{data.city}</Text>
        </View>

        <View style={styles.row}>
          <Icon name="phone" color={moss} size={25} />
          <TouchableOpacity onPress={()=>{callNumber(data.phonenumber)}}>
          <Text style={styles.textstyle} selectable>
            {data.phonenumber}
          </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Icon name="email" color={moss} size={25} />
          <Text style={styles.textstyle}>{data.email}</Text>
        </View>

        {
          data.category!==" "?

        <View style={styles.row}>
         
            
          
          <Icon name="star" color={moss} size={25} />
          <Text style={styles.textstyle} selectable>
            {data.rate/data.numberofusers}
          </Text>
        </View>
        :
        <View></View>
        }
      </View>
    </SafeAreaView>
    :
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator size="large" color="orange"/>
  </View>
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
});
