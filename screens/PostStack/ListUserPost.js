import React from 'react'
import {Text,View,FlatList,StyleSheet} from 'react-native'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {PostsContext} from '../../context/PostsContext'
import {getuserpost} from '../../graphql/queries'
import Rowlist from './RowUserPosts'
export default function Listposts({navigation}){
    const [UserState,dispatch]=React.useContext(PostsContext)
    console.log(UserState.UserID)
React.useEffect(()=>{
    async function getPosts(){
        try{
            await API.graphql(
                graphqlOperation(
                    getuserpost,{id:"7c8a993e-7ab7-437f-ba62-f4a618c01e86"}
                )
            ).then(
                (x)=>{
                    console.log(x.data.getUser.Posts.items)
                    dispatch({type:'SetText',Userposts:x.data.getUser.Posts.items})
                }
            )
        }catch(error){
            console.log(error)
        }
    }
    getPosts()
},[])
const render=(obj)=>(
    
    <Rowlist text={obj.item.Text} Id={obj.item.id} navigation={navigation} />
)
    return(
        <View style={style.container}>
        <FlatList
        data={UserState.Userposts}
        renderItem={render}
        keyExtractor={item=>item.id}
        />
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        flex:1,
    }
})