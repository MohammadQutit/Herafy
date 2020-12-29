import React, {useState, useContext} from 'react';
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
  Platform,
  Modal
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {} from 'react-native-vector-icons/MaterialCommunityIcons';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as yup from 'yup';
import {AuthContext} from '../../context/Authcontext';
import {Auth} from '@aws-amplify/auth';
const validationSchema = yup.object().shape({
  firstName: yup
    .string('The name should be String')
    .required('The First name is required')
    .label(),
  lastName: yup
    .string('The name should be String')
    .required('The Last name is required')
    .label(),
  phone: yup.string().required().max(13),
  email: yup
    .string()
    .required('Emial address is required')
    .email('Please Enter valid Email'),
  password: yup.string().required('Password is required').min(8),
  rePassword: yup
    .string()
    .required('Please Enter password agian')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  city: yup.string().required(),
  category: yup.string().required(),
});
export default function CraftsmanReg({navigation}, props) {
  const {signOut} = useContext(AuthContext);

  return (
    
      <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <ImageBackground
          style={styles.container}
          source={require('../../4.png')}>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
              password: '',
              rePassword: '',
              category: '',
              city: 'Jenin',
              type: 'craftsman',
              showModal:false,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              actions.resetForm();
              console.log(values);
              try {
                const x = await Auth.signUp({
                  username: values.phone,
                  password: values.password,
                  attributes: {
                    name: values.firstName,
                    family_name: values.lastName,
                    email: values.email,
                    'custom:city': values.city,
                    'custom:category': values.category,
                    'custom:type': values.type,
                  },
                }).then(() => navigation.navigate('ConfRegestiration'));
                console.log('Singed up');
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
                      placeholder="  First Name"
                      keyboardType="default"
                      placeholderTextColor="black"
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        this.secondTextInput.focus();
                      }}
                      onChangeText={props.handleChange('firstName')}
                      value={props.values.firstName}
                      onBlur={props.handleBlur('firstName')}
                    />
                  </View>

                  <Text style={styles.errors}>
                    {props.touched.firstName && props.errors.firstName}
                  </Text>
                </View>

                <View style={styles.inputOut}>
                  <View style={styles.textinput}>
                    <TextInput
                      style={styles.inputIn}
                      onSubmitEditing={() => {
                        this.thirdTextInput.focus();
                      }}
                      ref={(input) => {
                        this.secondTextInput = input;
                      }}
                      placeholder="  Last Name"
                      keyboardType="default"
                      placeholderTextColor="black"
                      returnKeyType="next"
                      onChangeText={props.handleChange('lastName')}
                      value={props.values.lastName}
                      onBlur={props.handleBlur('lastName')}
                    />
                  </View>
                  <Text style={styles.errors}>
                    {props.touched.lastName && props.errors.lastName}
                  </Text>
                </View>

                <View style={styles.inputOut}>
                  <View style={styles.textinput}>
                    <TextInput
                      style={styles.inputIn}
                      onSubmitEditing={() => {
                        this.forthTextInput.focus();
                      }}
                      ref={(input) => {
                        this.thirdTextInput = input;
                      }}
                      placeholder="  Phone number"
                      keyboardType="phone-pad"
                      placeholderTextColor="black"
                      returnKeyType="next"
                      onChangeText={props.handleChange('phone')}
                      value={props.values.phone}
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
                        this.fifthTextInput.focus();
                      }}
                      ref={(input) => {
                        this.forthTextInput = input;
                      }}
                      placeholder="  Email"
                      keyboardType="email-address"
                      placeholderTextColor="black"
                      returnKeyType="next"
                      onChangeText={props.handleChange('email')}
                      value={props.values.email}
                      onBlur={props.handleBlur('email')}
                    />
                  </View>
                  <Text style={styles.errors}>
                    {props.touched.email && props.errors.email}
                  </Text>
                </View>

                <View style={styles.inputOut}>
                  <View style={styles.textinput}>
                    <TextInput
                      style={styles.inputIn}
                      onSubmitEditing={() => {
                        this.sixthTextInput.focus();
                      }}
                      ref={(input) => {
                        this.fifthTextInput = input;
                      }}
                      placeholder="  Password"
                      placeholderTextColor="black"
                      secureTextEntry={true}
                      returnKeyType="next"
                      onChangeText={props.handleChange('password')}
                      value={props.values.password}
                      onBlur={props.handleBlur('password')}
                    />
                  </View>
                  <Text style={styles.errors}>
                    {props.touched.password && props.errors.password}
                  </Text>
                </View>

                <View style={styles.inputOut}>
                  <View style={styles.textinput}>
                    <TextInput
                      style={styles.inputIn}
                      ref={(input) => {
                        this.sixthTextInput = input;
                      }}
                      placeholder="  Retype Password"
                      placeholderTextColor="black"
                      secureTextEntry={true}
                      returnKeyType="done"
                      onChangeText={props.handleChange('rePassword')}
                      value={props.values.rePassword}
                      onBlur={props.handleBlur('rePassword')}
                      onSubmitEditing={() => Keyboard.dismiss()}
                    />
                  </View>
                  <Text style={styles.errors}>
                    {props.touched.rePassword && props.errors.rePassword}
                  </Text>
                </View>
                {Platform.OS=== "android"?(

                <View style={[styles.inputOut,{flexDirection: 'row',alignItems:"center",justifyContent:"center"}]}>

<RNPickerSelect


            onValueChange={(value) => console.log(value)}
            items={[
                { label:"Jenin", value:"Jenin" },
                { label:"Nablus", value:"Nablus" },
                { label:"Ramallah", value:"Ramallah" },
            ]}
        />
             
                 
             


                </View>)
                 :( <View style={[styles.inputOut,{flexDirection: 'row',justifyContent:"center",}]}>
                   
                   
                   </View>
                   
                   
                   )
                    }


                <View
                  style={{
                    flex: 1,
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
    flex: 1,
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
