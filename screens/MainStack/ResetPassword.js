import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Auth} from '@aws-amplify/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
const validationSchema = yup.object().shape({
  phone: yup
    .string('The Phine number should be String')
    .required('The  Phone number is required')
    .label(),
});
export default function ResetPassword({navigation}, props) {
  return (
      <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <ImageBackground
          style={styles.container}
          source={require('../../4.jpg')}>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Formik
            initialValues={{
              phone: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              console.log(values);
              try {
                await Auth.forgotPassword(values.phone)
                  .then(actions.resetForm())
                  .then(navigation.navigate('NewPassword'));
              } catch (error) {
                console.log(error);
              }
            }}>
            {(props) => (
              <View style={styles.view}>
                <View style={styles.inputOut}>
                  <View style={styles.textinput}>
                  <Icon name="phone" size={20} />
                    <TextInput
                      style={styles.inputIn}
                      placeholder="  Phone number"
                      keyboardType="phone-pad"
                      placeholderTextColor="black"
                      returnKeyType="done"
                      onSubmitEditing={() => {
                        Keyboard.dismiss();
                      }}
                      onChangeText={props.handleChange('phone')}
                      value={props.values.firstName}
                      onBlur={props.handleBlur('phone')}
                    />
                  </View>

                  <Text style={styles.errors}>
                    {props.touched.phone && props.errors.phone}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={props.handleSubmit}>
                    <Text style={styles.buttontext}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </ImageBackground>
      </KeyboardAwareScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textinput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 60,
    width: '90%',
    color: 'white',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
  },
  button: {
    marginTop: 60,
    height: 70,
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    elevation: 2,
    borderRadius: 10,
    borderRadius: 10,
  },
  inputIn: {
    height: 60,
    marginHorizontal: 10,
    width: '90%',
    fontSize: 17,
    marginTop: 7,
    fontWeight: 'bold',
  },
  inputOut: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  view: {
    paddingTop: getStatusBarHeight(),
    height: '100%',
    width: '100%',
    //borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  errors: {
    height: 20,
    color: 'orange',
    fontWeight: 'bold',
    width: '90%',
    paddingStart: 20,
    fontSize: 15,
  },
});
