import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import PostRow from './PostRow';
import {PostsContext} from '../../context/PostsContext'
import {listPosts} from '../../graphql/queries'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {Auth} from "@aws-amplify/auth"

export default function PostList({navigation}) {
  
const [UserState,dispatch]=React.useContext(PostsContext)

console.log(UserState.UserID)
const [Data,setData]=React.useState([]);


  const postdata = [
    {
      id: '1',
      Profileurl: require('../../4.png'),
      firstImage: require('../../4.png'),
      secondImage: require('../../4.png'),
      FirstName: 'Mohammad',
      LastName: 'Qutit',
      ID:'',
      postText:
        'I neeed a Carpenter to do a quick job for me, for anyone who is freenow, please, contact me on my phone number',
    },
    {
      id: '2',
      Profileurl: require('../../4.png'),
      firstImage: require('../../4.png'),
      secondImage: require('../../4.png'),
      FirstName: 'Mosab',
      LastName: 'Zakarneh',
      ID:'',
      postText:
        'I neeed a BlackSMith to do a quick job for me, for anyone who is freenow, please, contact me on my phone number',
    },
    {
      id: '3',
      Profileurl: require('../../4.png'),
      firstImage: require('../../4.png'),
      secondImage: require('../../4.png'),
      FirstName: 'Hothayfa',
      LastName: 'Abu-Arra',
      ID:'',
      postText:
        'I neeed a Carpenter to do a quick job for me, for anyone who is freenow, please, contact me on my phone number',
    },
  ];

  React.useEffect(()=>{

    async function getPostData(){
      const data = await API.graphql(graphqlOperation(listPosts))
      setData(data.data.listPosts)
      console.log(data.data.listPosts.items)
    }

    async function GetUserID(params) {
      try {
       const {attributes} =await Auth.currentUserInfo().then(
         await Auth.currentUserInfo().then((userInfo) => {
           const {attributes = {}} = userInfo
           dispatch({type:"SetUserID",UserID:attributes['sub']})
           
           
         }
       ))
        
      } catch (error) {
        console.log(error.message);
      }
      
    }
    getPostData();
  GetUserID()
  },[])
 


  const renderit = (obj) => (
    <PostRow
      FirstName={obj.item.FirstName}
      LastName={obj.item.LastName}
      Profileurl={obj.item.Profileurl}
      postText={obj.item.postText}
      firstImage={obj.item.firstImage}
      secondImage={obj.item.secondImage}
      navigation={navigation}
      ID={obj.item.id}
      dispatch={dispatch}
      
    />
  );

  return (
    <View style={style.container1}>
      <SafeAreaView style={style.container2}>
        <FlatList
          data={postdata}
          renderItem={renderit}
          keyExtractor={(item) => item.id}
          
        />
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
