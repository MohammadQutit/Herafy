import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity,Text} from 'react-native'

import PostList from './PostList'
import AddPost from './AddPost'
import { NavigationContainer } from '@react-navigation/native';
export default function Nested_stack() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4D3886',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
       
      }}>
      <HomeStack.Screen name="Posts" component={PostList}
      options={({ navigation, route }) => ({
        headerRight:()=>((<TouchableOpacity style={{justifyContent:"center",marginRight:15}} onPress={()=>{navigation.navigate('AddPost')}}>
  <Text style={{color:"white",fontWeight:"bold"}}>Add Post</Text>
</TouchableOpacity>))
      })}

       />
      <HomeStack.Screen name="AddPost" component={AddPost} />
      
    </HomeStack.Navigator>
  );
}
