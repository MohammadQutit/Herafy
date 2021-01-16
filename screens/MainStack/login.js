import React, {useContext, useEffect, useState, useRef} from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Alert,
  ActivityIndicator
} from 'react-native';

const {height, width} = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../context/Authcontext';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Auth} from '@aws-amplify/auth';

export default Login = ({navigation}) => {
  const inpute = useRef(null);
  const [isLoading,setIsloading]=useState(false)
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState(' ');
  const [secure, setSecure] = useState(true);
  const {signIn} = useContext(AuthContext);

  const visibleOrNot = () => {
    setSecure(!secure);
  };
  const login = async (phone, pass) => {
    try {
      setIsloading(true)
      const x = await Auth.signIn(phone, pass).then(
        async () =>
          await Auth.currentUserInfo().then((userInfo) => {
            const {attributes = {}} = userInfo;
            signIn(phone, pass, attributes['custom:type']);
           
            
          })
      );
    } catch (error) {
      setIsloading(false)
      Alert.alert('Error', error.message);
    }
  };

  return (

    isLoading ===true ?
    (
   
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#4D3886"}}>
        <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
        <ActivityIndicator color="white" size="large"  />
      </View>

    )



    :
    (


    <KeyboardAvoidingView
      style={styles.Keyboard}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      enabled={false}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <ImageBackground style={styles.container} source={require('../../4.jpg')}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.view}>
            <View
              style={{
                marginTop: getStatusBarHeight(),
                flex: 4,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../2.png')}
                style={{height: '50%', width: '30%', marginTop: 20,resizeMode:"contain"}}
              />
              <Text style={{marginTop: 20, fontSize: 40, fontWeight: 'bold'}}>
                The Craftsmen
              </Text>
            </View>

            <View
              style={{
                flex: 6,
                width: '100%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <View style={styles.inputOut}>
                  <View style={styles.textinput}>
                    <TextInput
                      style={{
                        height: '100%',
                        width: '97%',
                        fontSize: 18,
                        color: 'purple',
                        fontWeight: 'bold',
                      }}
                      placeholder="Phone"
                      keyboardType="phone-pad"
                      placeholderTextColor="purple"
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        this.secondTextInput.focus();
                      }}
                      blurOnSubmit={false}
                      onChangeText={(text) => setPhone(text)}
                    />
                  </View>
                </View>

                <View style={styles.inputOut}>
                  <View style={styles.textinput}>
                    <TextInput
                      style={{
                        fontWeight: 'bold',
                        height: 50,
                        marginHorizontal: 20,
                        width: '87%',
                        fontSize: 18,
                        color: 'purple',
                      }}
                      placeholder="Password"
                      secureTextEntry={secure}
                      ref={(input) => {
                        this.secondTextInput = input;
                      }}
                      returnKeyType="done"
                      placeholderTextColor="purple"
                      onChangeText={(text) => setPassword(text)}
                      onSubmitEditing={() => Keyboard.dismiss()}></TextInput>
                    {secure ? (
                      <TouchableOpacity onPress={visibleOrNot}>
                        <Ionicons name="eye-off" size={30} color="purple" />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={visibleOrNot}>
                        <Ionicons name="eye" size={30} color="purple" />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Reset');
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Forget Password ??
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  flex: 3,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => login(phone, password)}>
                  <Text
                    style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
                    Sign In
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('choose')}>
                  <Text
                    style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%',
    height: height,
  },
  textinput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 60,
    width: '90%',
    color: 'white',
    backgroundColor: 'rgba(254, 254, 254, 0.9)',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    textDecorationLine: 'underline',
  },
  view: {
    height: '100%',
    width: '100%',

    //borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  button: {
    marginTop: 30,
    height: 60,
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    elevation: 2,
    borderRadius: 10,
  },
  Keyboard: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  Checkview: {
    marginTop: 10,
    height: 40,
    width: '80%',
    flexDirection: 'row',
    alignContent: 'center',
  },
  inputOut: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
