import React from 'react';
import {TouchableOpacity,Text} from 'react-native'
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import HomeCalendar from './CalenderPage';
import CreatePeriod from './CreatePeriod';
import {CalenderContext} from '../../context/CalenderContext';
import CalenderReducer,{globalstate} from '../../reducer/CalenderReducer';
import {Header} from '../../assets/color'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListPeriods from './ListPeriods'
export default function Nested_stack() {
  const [UserState,dispatch]=React.useReducer(CalenderReducer,globalstate);
  const HomeStack = createStackNavigator();
  return (
    <CalenderContext.Provider value={[UserState,dispatch]}>
    <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Header,
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
      <HomeStack.Screen
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
              navigation.navigate('ListPeriods');
            }}>
              <Ionicons name="add-circle" color="white" size={25}/>
            <Text style={{paddingLeft:5,color: 'white', fontWeight: 'bold'}}>Create Period</Text>
          </TouchableOpacity>
        ),
      })} 
      name="HomeCalendar" 
      component={HomeCalendar}
      
      
      />
      <HomeStack.Screen name="Createperiod" component={CreatePeriod} />
      <HomeStack.Screen name="ListPeriods"  component={ListPeriods}/>
    </HomeStack.Navigator>
    </CalenderContext.Provider>
  );
}
