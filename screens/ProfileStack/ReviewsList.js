import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text,ActivityIndicator} from 'react-native';
import RevRow from './ReviewRow';
import {listReviews} from '../../graphql/queries';
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import { Auth } from "@aws-amplify/auth"

export default function PostList({navigation}) {
  
  const [Data, setData] = React.useState(0)
  const [Ready,setReady]=React.useState(false)


  React.useEffect(() => {
    async function GetUserID(params) {
      try {
       const {attributes} =await Auth.currentUserInfo().then(
         await Auth.currentUserInfo().then((userInfo) => {
           const {attributes = {}} = userInfo
           attributes['sub']
           
          
         }
       ))

       const x =await API.graphql(graphqlOperation(listReviews,{filter:{CraftmanID:{eq:attributes['sub']}}})) 
        
          setData(x.data.listReviews.items)

       setReady(true)
        
      } catch (error) {
        setReady(true)
        
        console.log(error.message);
      }
      
    }

    
      GetUserID()
    
    

  }, [])


/** 

  const postdata = [
    {
      id: '1',
      Profileurl: require('../../4.png'),
      FirstName: 'Mohammad',
      LastName: 'Qutit',
      postText:
        'I neeed a Carpenter to do a quick job for me, for anyone who is freenow, please, contact me on my phone number',
        rating:3.4
    },
    {
      id: '2',
      Profileurl: require('../../4.png'),
      FirstName: 'Mosab',
      LastName: 'Zakarneh',
      postText:
        'I neeed a BlackSMith to do a quick job for me, for anyone who is freenow, please, contact me on my phone number',
        rating:4.5
    },
    {
      id: '3',
      Profileurl: require('../../4.png'),
      firstImage: require('../../4.png'),
      secondImage: require('../../4.png'),
      FirstName: 'Hothayfa',
      LastName: 'Abu-Arra',
      postText:
        'I neeed a Carpenter to do a quick job for me, for anyone who is freenow, please, contact me on my phone number',
        rating:5
    },
  ];
  */
  const renderit = (obj) => (
    <RevRow
      FirstName={obj.item.Reviewer.FirstName}
      LastName={obj.item.Reviewer.LastName}
      Profileurl={require('../../4.png')}
      ReviewtText={obj.item.Comment}
      rating={obj.item.Rate}
      navigation={navigation}
    />
  );

  return (
    <View style={style.container1}>
      <SafeAreaView style={style.container2}>
      {Ready=== true?
        <FlatList
        data={Data}
        renderItem={renderit}
        keyExtractor={(item) => item.id}
        
      />:
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <ActivityIndicator size="large" color="orange"/>
      </View>
        
        
        }
      </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    flex: 1,
  },
});
