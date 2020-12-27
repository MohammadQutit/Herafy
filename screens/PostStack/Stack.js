import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PostList from './PostList';
import AddPost from './AddPost';
import {NavigationContainer} from '@react-navigation/native';
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
      <HomeStack.Screen
        name="Posts"
        component={PostList}
        options={({navigation, route}) => ({
          headerRight: () => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems:"center",
                marginRight: 5,
                width: '100%',
                flexDirection: 'row',
              }}
              onPress={() => {
                navigation.navigate('AddPost');
              }}>
                <Ionicons name="add-circle" color="white" size={25}/>
              <Text style={{paddingLeft:5,color: 'white', fontWeight: 'bold'}}>Add Post</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen name="AddPost" component={AddPost} />
    </HomeStack.Navigator>
  );
}
