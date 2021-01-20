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
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Auth } from "@aws-amplify/auth"
import { graphqlOperation } from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import { getUser } from '../../graphql/queries';
import { API } from '@aws-amplify/api/src/API'
import react from 'react';


//const [phone, setphone] = useState('')
//const [email, setemail] = useState('')
//const [name, setname] = useState('')
//const [location, setlocation] = useState('')
//const [work, setwork] = useState('')
//const [rate, setrate] = useState('')


export default function Craftprofile({ navigation }) {

  const [isReady, SetIsReady] = React.useState(true);
  const [idd, setid] = React.useState(0)
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
        rate: "3.5",
      }


    )

  }

  React.useEffect(() => {
    async function GetUserID(params) {
      try {
        const { attributes } = await Auth.currentUserInfo().then(
          await Auth.currentUserInfo().then((userInfo) => {
            const { attributes = {} } = userInfo
            sets(attributes['sub'])
            // console.log(Data)

          }
          ))

      } catch (error) {
        console.log(error.message);
      }

    }
    GetUserID()

  }, [])

  React.useEffect(() => {
    async function a() {
       console.log(idd)
    //  console.log(idd)
      try {
         const x = await API.graphql(
          graphqlOperation(getUser, {
            filter: { id: { eq: idd } },
          }),

        ).then(SetIsReady(true));
        console.log(x)
        //set(a=x.data.getUser.items)
      } catch (error) {
        console.log(error.message);
      }
    }
    a();

  }, []);







  return (
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
            <Text style={styles.title}>Here UserName</Text>
            <Text style={{ color: 'purple' }}>Here what he work</Text>
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
