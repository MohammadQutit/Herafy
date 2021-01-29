import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text, ActivityIndicator} from 'react-native';
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
const [Ready,setReady]=React.useState(false)


  /*const postdata = [
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
      },
  ];*/

  React.useEffect(()=>{

    async function getPostData(){
      const data = await API.graphql(graphqlOperation(listPosts))
      setData(data.data.listPosts.items)
      console.log(data.data.listPosts.items)
      setReady(true)
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
      FirstName={obj.item.User.FirstName}
      LastName={obj.item.User.LastName}
      Profileurl={require('../../4.png')}
      postText={obj.item.Text}
      firstImage={obj.item.Image.key}
      //secondImage={obj.item.Image.key}
      navigation={navigation}
      ID={obj.item.User.id}
      dispatch={dispatch}
      
    />
  );

  return (
    Ready === true ?
    <View style={style.container1}>
      <SafeAreaView style={style.container2}>
        <FlatList
          data={Data}
          renderItem={renderit}
          keyExtractor={(item) => item.id}
          
        />
      </SafeAreaView>
    </View>
    :
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size="large" color="orange"/>
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
