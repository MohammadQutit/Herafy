import React from 'react';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import EditProfilePage from './EditProfilePage';
import ProfilePage from './Profile';
import Reviews from './ReviewsList';
import {ProfileContext} from '../../context/ProfileContext';
import profilereducer,{globalstate} from '../../reducer/ProfileReducer';
import { Auth } from "@aws-amplify/auth"
import {Header} from '../../assets/color'
//import { CalenderContext } from '../../context/CalenderContext';
export default function HomeStack() {
  const [UserState, dispatch] = React.useReducer(
    profilereducer,
    globalstate,
  );

  
  const HomeStack = createStackNavigator();
 
    
  return (
    <ProfileContext.Provider value={[UserState,dispatch]}>
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
      <HomeStack.Screen name="ProfilePage" component={ProfilePage} />
      <HomeStack.Screen name="Edit" component={EditProfilePage} />
      <HomeStack.Screen name="Review" component={Reviews} />

    </HomeStack.Navigator>
    </ProfileContext.Provider>
  );
}
