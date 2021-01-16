import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Dimensions
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';

const validationSchema = yup.object().shape({
  firstName: yup
    .string('The name should be String')
    .required('The First name is Required')
    .label(),
  lastName: yup
    .string('Last name should be String')
    .required('Last name is Required')
    .label(),
  phone: yup.string().required().max(13),
  email: yup
    .string()
    .required('Emial address is Required')
    .email('Please Enter valid Email'),
  city: yup.string().required("City is Required"),
});

const {width}=Dimensions.get("window")
export default function A() {
  return (

    <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            city: '',
            showModal: false,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            actions.resetForm();
            console.log(values);
           
          }}>{(props)=>(
    <View style={style.Container}>
      <View style={style.firstview}>
        <Image
          source={require('../../assets/Profile.png')}
          style={style.image}
        />
      </View>
      <View style={style.secondview}>
        <View style={style.Action}>
          <Icon name="user-o" size={20} />
          <TextInput
            placeholder="FirstName"
            placeholderTextColor="#666666"
            style={style.textInput}
            onSubmitEditing={()=>{
              this.secondTextInput.focus();
            }}
            onChangeText={props.handleChange('firstName')}
            value={props.values.firstName}
            onBlur={props.handleBlur('firstName')}
            returnKeyType="next"
          />
           
        </View>
        <Text style={style.errors}>
                  {props.touched.firstName && props.errors.firstName}
            </Text>
        <View style={style.Action}>
          <Icon name="user-o" size={20} />
          <TextInput
            placeholder="LastName"
            placeholderTextColor="#666666"
            style={style.textInput}
            onSubmitEditing={() => {
              this.thirdTextInput.focus();
            }}
            ref={(input) => {
              this.secondTextInput = input;
            }}
            onChangeText={props.handleChange('lastName')}
            value={props.values.lastName}
            onBlur={props.handleBlur('lastName')}
            returnKeyType="next"
          />
         
        </View>
        <Text style={style.errors}>
                  {props.touched.lastName && props.errors.lastName}
          </Text>
        <View style={style.Action}>
          <Icon name="envelope-o" size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            style={style.textInput}
            onSubmitEditing={() => {
              this.forthTextInput.focus();
            }}
            ref={(input) => {
              this.thirdTextInput = input;
            }}
            onChangeText={props.handleChange('email')}
            value={props.values.email}
            onBlur={props.handleBlur('email')}
            returnKeyType="next"
          />
        </View>
        <Text style={style.errors}>
                  {props.touched.email && props.errors.email}
          </Text>
          <View style={style.Action}>
          <Icon name="phone" size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            style={style.textInput}
            //onSubmitEditing={() => {
              //this.forthTextInput.focus();
            //}}
            ref={(input) => {
              this.forthTextInput = input;
            }}
            onChangeText={props.handleChange('phone')}
            value={props.values.phone}
            onBlur={props.handleBlur('phone')}
            returnKeyType="done"
          />
        </View>
        <Text style={style.errors}>
                  {props.touched.phone && props.errors.phone}
        </Text>
      </View>
        <View style={style.Action}>
          <Icon name="globe" size={20} />
          <RNPickerSelect
                  placeholder={{label: 'Select a city', value: ""}}
                  useNativeAndroidPickerStyle={false}
                  value={props.values.city}
                  onValueChange={props.handleChange('city')}
                  items={[
                    {label: 'Jenin', value: 'Jenin'},
                    {label: 'Nablus', value: 'Nablus'},
                    {label: 'Ramallah', value: 'Ramallah'},
                  ]}
                  style={{
                    inputIOS: {
                      color: 'black',
                      textAlign: 'center',
                      marginRight: 10,
                      width: width / 2.5,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: 20,
                      fontWeight: 'bold',
                      height: 55,
                    },
                    inputAndroid: {
                      color: 'black',
                      backgroundColor: 'white',
                      width: width / 2.5,
                      textAlign: 'center',
                      marginRight: 10,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: 20,
                      fontWeight: 'bold',
                      height: 55,
                    },
                    placeholder: {
                      color: 'black',
                    },
                  }}
                />
        </View>    
      <View style={style.thirdview}>
        <TouchableOpacity style={style.CommandButton} onPress={() => {}}>
          <Text style={style.PannelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
)}
    </Formik>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headertext: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },
  firstview: {
    alignItems: 'center',
    flex: 3,
    justifyContent:"center"

  },
  secondview: {
    flex:10,
    marginHorizontal: 20,
  },
  thirdview: {
   
    justifyContent:"center",
    alignItems:"center",
    flex:2,
  },
  Action: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    width: '80%',
  },
  CommandButton: {
    
    flexDirection:"row",
    borderRadius: 10,
    backgroundColor: '#4D3886',
    alignItems: 'center',
    justifyContent:"center",
    width:width*0.8,
    height:60,
    margin:10
    

  },
  PannelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  errors: {
    marginTop:3,
    height: 20,
    color: 'purple',
    fontWeight: 'bold',
    width: '90%',
    paddingStart: 20,
    fontSize: 15,
  },
});
