import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text, ActivityIndicator,RefreshControl, TouchableOpacity} from 'react-native';
import PostRow from './PostRow';
import {PostsContext} from '../../context/PostsContext'
import {listPosts} from '../../graphql/queries'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {Auth} from "@aws-amplify/auth"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {moss} from '../../assets/color'
export default function PostList({navigation}) {

const [UserState,dispatch]=React.useContext(PostsContext)

console.log(UserState.UserID)
const [refreshing, setRefreshing] = React.useState(false);
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
  async function getPostData2(){
    setRefreshing(true)
    const data = await API.graphql(graphqlOperation(listPosts))
    const edited= data.data.listPosts.items.sort((a,b)=>{
      return new Date(b.createdAt)-new Date(a.createdAt)
    })
    setData(edited)
    console.log(data.data.listPosts.items)
    setRefreshing(false)
  }

  React.useEffect(()=>{
    async function getPostData(){
      setReady(false)
      setRefreshing(true)
      const data = await API.graphql(graphqlOperation(listPosts))
      const edited= data.data.listPosts.items.sort((a,b)=>{
        return new Date(b.createdAt)-new Date(a.createdAt)
      })
      setData(edited)
      console.log(data.data.listPosts.items)
      setReady(true)
      setRefreshing(false)
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
      Profileurl={obj.item.User.Image}
      postText={obj.item.Text}
      firstImage={obj.item.Image}
      createdAt={obj.item.createdAt}
      navigation={navigation}
      ID={obj.item.User.id}
      dispatch={dispatch}
      
    />
  );

  return (
    Ready === true ?
    <View style={style.container1}>
      <SafeAreaView style={style.container2}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={style.button} onPress={()=>{navigation.navigate('ListUserPost');}}><Icon name="calendar-edit" size={40}/></TouchableOpacity>
        <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center'}}>Edit your posts</Text>
        
        </View>
        <FlatList
          data={Data}
          renderItem={renderit}
          keyExtractor={(item) => item.id}
          refreshControl={<RefreshControl colors={["green","red","black"]}
            refreshing={refreshing}
            onRefresh={()=>getPostData2()}
            />

          }
          
        />
      </SafeAreaView>
    </View>
    :
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size="large" color={moss}/>
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
  button:{
    margin:10,
  }
});
