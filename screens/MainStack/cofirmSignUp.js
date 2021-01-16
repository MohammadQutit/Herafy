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
import {AuthContext} from '../../context/Authcontext';
import {Auth} from '@aws-amplify/auth';
const validationSchema = yup.object().shape({
  phone: yup
    .string('The Phine number should be String')
    .required('The  Phone number is required')
    .label(),
  confCode: yup
    .string('Confiramtion should be String')
    .required('Conforamtion code is Required'),
});
export default function CraftsmanReg({navigation}, props) {
  const {signOut} = useContext(AuthContext);

  return (
   
      <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <ImageBackground
          style={styles.container}
          source={require('../../4.jpg')}>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
          <Formik
            initialValues={{
              phone: '',
              confCode: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              actions.resetForm();
              console.log(values);
              try {
                console.log('hello');
                const x = await Auth.confirmSignUp(
                  values.phone,
                  values.confCode,
                ).then(() => navigation.popToTop());
                console.log(
                  'Confirmed sign up for user with phone number ',
                  values.phone,
                );
              } catch (error) {
                console.log(error);
              }
            }}>
            {(props) => (
              <View style={styles.view}>
                <View style={styles.inputOut}>
                  <View style={styles.textinput}>
                    <TextInput
                      style={styles.inputIn}
                      placeholder="  Phone number"
                      keyboardType="phone-pad"
                      placeholderTextColor="black"
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        this.secondTextInput.focus();
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

                <View style={styles.inputOut}>
                  <View style={styles.textinput}>
                    <TextInput
                      style={styles.inputIn}
                      onSubmitEditing={() => {
                        Keyboard.dismiss();
                      }}
                      ref={(input) => {
                        this.secondTextInput = input;
                      }}
                      placeholder="Confirmtion Code"
                      keyboardType="number-pad"
                      placeholderTextColor="black"
                      onChangeText={props.handleChange('confCode')}
                      value={props.values.lastName}
                      onBlur={props.handleBlur('confCode')}
                    />
                  </View>
                  <Text style={styles.errors}>
                    {props.touched.confCode && props.errors.confCode}
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
                    <Text style={styles.buttontext}>Confirm</Text>
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
    height: 55,
    width: '90%',
    color: 'white',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
  },
  button: {
    marginTop: 60,
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
    borderRadius: 10,
  },
  inputIn: {
    height: 40,
    marginHorizontal: 10,
    width: '90%',
    fontSize: 17,
    marginTop: 7,
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
