import React from 'react'
import {Text,View,FlatList,StyleSheet,ActivityIndicator} from 'react-native'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {PostsContext} from '../../context/PostsContext'
import {getuserpost} from '../../graphql/queries'
import Rowlist from './RowUserPosts'
import {moss} from '../../assets/color'
export default function Listposts({navigation}){
    const [UserState,dispatch]=React.useContext(PostsContext)
    const [Ready,setReady]=React.useState(false)
    console.log(UserState.UserID)
React.useEffect(()=>{
    async function getPosts(){
        try{
            await API.graphql(
                graphqlOperation(
                    getuserpost,{id:UserState.UserID}
                )
            ).then(
                (x)=>{
                    console.log(x.data.getUser.Posts.items)
                    dispatch({type:'SetText',Userposts:x.data.getUser.Posts.items})
                    setReady(true)
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
    return(Ready===false?
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <ActivityIndicator size='large' color={moss}/>
        </View>
    :
        
        
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