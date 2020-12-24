import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/Authcontext';
import HomeStack from './HomeStack/HomeStack';
import CalendarStack from './CalendarStack/Stack';
import ProfileStack from './ProfileStack/Stack';

const Tab = createBottomTabNavigator();

export default function Tabmenu({navigation}) {
  const {signOut} = React.useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Categories') {
            iconName = focused ? 'home' : 'ios-home';
          } else if (route.name === 'Posts') {
            iconName = focused ? 'newspaper' : 'newspaper';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle-sharp' : 'person-circle-sharp';
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'ios-calendar-sharp' : 'ios-calendar-sharp';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#ADA5B0',
        style: {
          height: 60,
          backgroundColor: '#4D3886',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        },
      }}>
      <Tab.Screen name="Categories" component={HomeStack} />
      <Tab.Screen name="Posts" children={() => <HomeStack />} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Calendar" component={CalendarStack} />
    </Tab.Navigator>
  );
}
