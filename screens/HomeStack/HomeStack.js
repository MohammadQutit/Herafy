import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Categories from './categories';
import List from './CraftsmenList';
import ProfilePage from './CraftsmanProfilePage';
import Rate from './RatePage';
import Calender from './CalenderPage';
import ReviewList from './ReviewsList';
import {CategoriesContext} from '../../context/CategoriesContext';
import CategoriesReducer, {
  initialUserState,
} from '../../reducer/CategoriesReducer';
import {enableScreens} from 'react-native-screens';
import {Header} from '../../assets/color'
enableScreens();

export default function Nested_stack() {
  const [UserState, dispatch] = React.useReducer(
    CategoriesReducer,
    initialUserState,
  );

  const HomeStack = createNativeStackNavigator();
  return (
    <CategoriesContext.Provider value={[UserState, dispatch]}>
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Header,
          },

          stackAnimation: 'none',
          headerTintColor:"white",
         
          headerTitleStyle: {
            color: 'white',
            fontWeight:"bold"
          },
        }}>
        <HomeStack.Screen name="Home" component={Categories} />
        <HomeStack.Screen name="ListPage" component={List} />
        <HomeStack.Screen name="ProfilePage" component={ProfilePage} />
        <HomeStack.Screen name="Rating" component={Rate} />
        <HomeStack.Screen name="Calender" component={Calender} />
        <HomeStack.Screen name="Reviews" component={ReviewList} />
      </HomeStack.Navigator>
    </CategoriesContext.Provider>
  );
}
