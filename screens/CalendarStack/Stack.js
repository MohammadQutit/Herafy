import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeCalendar from './CalenderPage';

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
      <HomeStack.Screen name="HomeCalendar" component={HomeCalendar} />
    </HomeStack.Navigator>
  );
}
