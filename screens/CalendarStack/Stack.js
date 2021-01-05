import React from 'react';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import HomeCalendar from './CalenderPage';
import CreatePeriod from './CreatePeriod'

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
      <HomeStack.Screen name="HomeCalendar" component={HomeCalendar} />
      <HomeStack.Screen name="Createperiod" component={CreatePeriod} />
    </HomeStack.Navigator>
  );
}
