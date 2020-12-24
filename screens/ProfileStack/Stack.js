import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfilePage from './EditProfilePage';
import ProfilePage from './Profile';
export default function HomeStack() {
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
      <HomeStack.Screen name="ProfilePage" component={ProfilePage} />
      <HomeStack.Screen name="Edit" component={EditProfilePage} />
    </HomeStack.Navigator>
  );
}
