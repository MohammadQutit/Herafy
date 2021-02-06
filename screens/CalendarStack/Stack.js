import React from 'react';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import HomeCalendar from './CalenderPage';
import CreatePeriod from './CreatePeriod';
import {CalenderContext} from '../../context/CalenderContext';
import CalenderReducer,{globalstate} from '../../reducer/CalenderReducer';

export default function Nested_stack() {
  const [UserState,dispatch]=React.useReducer(CalenderReducer,globalstate);
  const HomeStack = createStackNavigator();
  return (
    <CalenderContext.Provider value={[UserState,dispatch]}>
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
    </CalenderContext.Provider>
  );
}
