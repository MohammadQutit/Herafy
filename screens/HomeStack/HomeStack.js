import React from 'react';
import {createStackNavigator, HeaderBackground,CardStyleInterpolators} from '@react-navigation/stack';
import Categories from './categories';
import List from './CraftsmenList';
import ProfilePage from './CraftsmanProfilePage';
import Rate from './RatePage'
import Calender from './CalenderPage'
import ReviewList from './ReviewsList'

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
        gestureEnabled:true,
        gestureDirection:"horizontal",
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen name="Home" component={Categories} />
      <HomeStack.Screen name="ListPage" component={List} />
      <HomeStack.Screen name="ProfilePage" component={ProfilePage} />
      <HomeStack.Screen name="Rating" component={Rate} />
      <HomeStack.Screen name="Calender" component={Calender} />
      <HomeStack.Screen name="Reviews" component={ReviewList}/>
    </HomeStack.Navigator>
  );
}
