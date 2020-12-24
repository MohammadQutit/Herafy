import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './login';
import Choose from './choose';
import Craftsman from './craftsman_reg';
import Ordinary from './ordinary_reg';
import Confiramation from './cofirmSignUp';
import Reset from './ResetPassword';
import NewPassword from './newPassword';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        headerTransparent: true,
        headerBackTitle: false,
      }}>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="choose" component={Choose} />
      <Stack.Screen name="ordinary" component={Ordinary} />
      <Stack.Screen name="craftsman" component={Craftsman} />
      <Stack.Screen name="ConfRegestiration" component={Confiramation} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
}
