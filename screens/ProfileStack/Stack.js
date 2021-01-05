import React from 'react';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import EditProfilePage from './EditProfilePage';
import ProfilePage from './Profile';
import Reviews from './ReviewsList'
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
      gestureEnabled:true,
      gestureDirection:"horizontal",
      cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <HomeStack.Screen name="ProfilePage" component={ProfilePage} />
      <HomeStack.Screen name="Edit" component={EditProfilePage} />
      <HomeStack.Screen name="Review" component={Reviews} />

    </HomeStack.Navigator>
  );
}
