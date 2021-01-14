/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {
  useEffect,
  useMemo,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, View, Text, Alert} from 'react-native';
import {AuthContext} from './context/Authcontext';
import CraftDrawerNav from './screens/drawer';
import OrdinaryDrawerNav from './screens/OrdinaryDrawer';
import Amplify from '@aws-amplify/core';
import {Auth} from '@aws-amplify/auth';
import config from './aws-exports';
import ss from './solveAmplify';
import MainStack from './screens/MainStack/Stack';
import loginReducer, {initialLoginState} from './reducer/mainReducer';
import { enableScreens } from 'react-native-screens';
enableScreens();
Amplify.configure(config);
Auth.configure({
  storage: ss,
});

App = () => {
  //const [isloading, setIsloading] = useState(false);
  //const [token,setToken] = useState(null);

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = useMemo(
    () => ({
      signIn: async (userName, password, usertype) => {
        //setIsloading(false)
        //setToken("sdfsd")
        let userToken = null;

        try {
          userToken = 'fffff';
          await AsyncStorage.setItem('token', userToken);
          await AsyncStorage.setItem('type', usertype);
        } catch (e) {
          console.log('error: ', e);
        }

        dispatch({
          type: 'LOGIN',
          id: userName,
          token: userToken,
          userType: usertype,
        });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('token');
          await AsyncStorage.removeItem('type');
        } catch (error) {}

        //setToken(null)
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        setIsloading(false);
        setToken(null);
      },
     
    
    
    }),
    [],
  );
  useEffect(() => {
    setTimeout(async () => {
      let usertoken = null;
      let Type = null;
      try {
        usertoken = await AsyncStorage.getItem('token');
        Type = await AsyncStorage.getItem('type');
      } catch (error) {
        console.log(error);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: usertoken, userType: Type});
      console.log(loginState.userType);
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      
        {loginState.userToken === null ? (
          <NavigationContainer>
          <MainStack />
          </NavigationContainer>
        ) : loginState.userType === 'craftsman' ? (
          <NavigationContainer>
          <CraftDrawerNav />
          </NavigationContainer>
        ) : (
          <NavigationContainer>
          <OrdinaryDrawerNav />
          </NavigationContainer>
        )}
     
    </AuthContext.Provider>
  );
};

export default App;
