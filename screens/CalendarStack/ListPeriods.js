import React from 'react'
import {ActivityIndicator,View,FlatList,StyleSheet} from 'react-native'
import Row from './Row'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {getUser3} from '../../graphql/queries';
import {CalenderContext} from '../../context/CalenderContext'
export default function ListPeriods(){
  const [UserState,dispatch]=React.useContext(CalenderContext)
  const [date,setdate]=React.useState([])
  const [Ready,SetReady]=React.useState(false)
React.useEffect(()=>{
    async function getperiods(){
        try{
        await API.graphql(
            graphqlOperation(getUser3,{id:UserState.UserID}

            )
        ).then(
            (x)=>{
                setdate(x.data.getUser.Calenders.items)
                SetReady(true)
            }
        )
        }catch(error){
            console.log(error)
        }   
    }
    getperiods()
},[])

const render=(obj)=>{
    //console.log(obj)
    return(
    
    <Row StartTime={obj.item.StartTime} EndTime={obj.item.EndTime}/>
)}
    return(
        
        <View style={style.container}>
            {Ready===true?(
                <FlatList
                data={date}
                renderItem={render}
                keyExtractor={item=>item.id}
                />
            ):
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="black" size="large" />
        </View>
            
            }
        </View>
        
    )
}
const style=StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
    },
})