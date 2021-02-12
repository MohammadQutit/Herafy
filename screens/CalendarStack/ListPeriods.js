import React from 'react'
import {Text,View,FlatList,StyleSheet} from 'react-native'
import Row from './Row'
export default function ListPeriods(){
const data1=[{
    key:1,
    starttime:'22/2/2022',
    endtime:'23/2/2022',
    },
    {
    key:2,
    starttime:'2/5/1998',
    endtime:'3/5/1998'
    },
    {
        key:2,
        starttime:'2/5/1998',
        endtime:'3/5/1998'
        },
        {
            key:2,
            starttime:'2/5/1998',
            endtime:'3/5/1998'
            },
            {
                key:2,
                starttime:'12/25/1998',
                endtime:'3/5/1516998'
                }]


const render=(obj)=>(
    <Row StartTime={obj.item.starttime} EndTime={obj.item.endtime}/>
)
    return(
        <View style={style.container}>
            <FlatList
            data={data1}
            renderItem={render}
            />
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
})