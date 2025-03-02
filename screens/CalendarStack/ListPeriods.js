import React from 'react'
import {ActivityIndicator,View,FlatList,StyleSheet,Alert} from 'react-native'
import Row from './Row'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {getUser3} from '../../graphql/queries';
import {CalenderContext} from '../../context/CalenderContext'
import {deleteCalender} from '../../graphql/mutations'
import {moss} from '../../assets/color'
export default function ListPeriods({navigation}){
  const [UserState,dispatch]=React.useContext(CalenderContext)
  const [date,setdate]=React.useState([])
  const [Ready,SetReady]=React.useState(true)
  
  
/*React.useEffect(()=>{
    async function getperiods(){
        try{
        await API.graphql(
            graphqlOperation(getUser3,{id:UserState.UserID}

            )
        ).then(
            (x)=>{
                dispatch({type:'setperiod',Periods:x.data.getUser.Calenders.items})
                console.log(UserState.Periods)
                setdate(x.data.getUser.Calenders.items)
                SetReady(true)
            }
        )
        }catch(error){
            console.log(error)
        }   
    }
    getperiods()
},[])*/
const key=(item) =>(item.id);



const render=(obj)=>{
    //console.log(obj)
    return(
    
    <Row StartTime={obj.item.StartTime} EndTime={obj.item.EndTime}  ID={obj.item.id} Dispatch={dispatch} navigation={navigation} Data={UserState} />
)}
    return(
        
        <View style={style.container}>
            {Ready===true?(
                <FlatList
                data={UserState.Periods}
                renderItem={render}
                keyExtractor={key}
                />
            ):
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={moss} size="large" />
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