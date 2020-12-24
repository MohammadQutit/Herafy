import React from 'react';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import Categories from './categories';
import List from './CraftsmenList';
import ProfilePage from './CraftsmanProfilePage';

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
      <HomeStack.Screen name="Home" component={Categories} />
      <HomeStack.Screen name="ListPage" component={List} />
      <HomeStack.Screen name="ProfilePage" component={ProfilePage} />
    </HomeStack.Navigator>
  );
}
