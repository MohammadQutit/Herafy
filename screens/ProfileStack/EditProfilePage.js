import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';
import { Auth } from "@aws-amplify/auth"
import { graphqlOperation } from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import { getUser } from '../../graphql/queries';
import { API } from '@aws-amplify/api/src/API'

const validationSchema = yup.object().shape({
  firstName: yup
    .string('The name should be String')
    .required('Required Field')
    .label(),
  lastName: yup
    .string('Last name should be String')
    .required('Required Field')
    .label(),
  phone: yup.string().required("Required Field").max(13),
  email: yup
    .string()
    .required('Required Field')
    .email('Please Enter valid Email'),
  city: yup.string().required("Required Field"),
});

const {width}=Dimensions.get("window")
export default function A() {
  const [data, setdata] = React.useState(0)
  const [Ready,setReady]=React.useState(false)

  console.log(data)
  const sets = (id) => {
    setid(id)

  }

  const set = (obj) => {
    setdata(

      {
        city: obj.City,
        firstname: obj.FirstName,
        lastname: obj.LastName,
        phonenumber: obj.PhoneNumber,
        email:obj.Email,
        category:obj.Category,
        rate:obj.Rating,
      
        
      }


    )

  }

  React.useEffect(() => {
    async function GetUserID(params) {
      try {
       const {attributes} =await Auth.currentUserInfo().then(
         await Auth.currentUserInfo().then((userInfo) => {
           const {attributes = {}} = userInfo
           attributes['sub']
            API.graphql(graphqlOperation(getUser,{id:attributes['sub']})).then( 
          (x)=>{
            set(x.data.getUser)
            setReady(true)
          }
             // set(x.data.getUser)
            )  
         }
       )) 
      } catch (error) {
        console.log(error.message);
      } 
    }
      GetUserID()
  }, [])

  return (
    
    Ready===true?
    <Formik
          initialValues={data}
        
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
            placeholder='firstname'
            placeholderTextColor="#666666"
            style={style.textInput}
            onSubmitEditing={()=>{
              this.secondTextInput.focus();
            }}
            onChangeText={props.handleChange('firstName')}
            value={data.firstname}
            onBlur={props.handleBlur('firstName')}
            returnKeyType="next"
          />
            <Text style={style.errors}>
                  {props.touched.firstName && props.errors.firstName}
            </Text>
           
        </View>
      
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
            value={data.lastname}
            onBlur={props.handleBlur('lastName')}
            returnKeyType="next"
          />
          <Text style={style.errors}>
                  {props.touched.lastName && props.errors.lastName}
          </Text>
         
        </View>
        
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
            value={data.email}
            onBlur={props.handleBlur('email')}
            returnKeyType="next"
          />
           <Text style={style.errors}>
                  {props.touched.email && props.errors.email}
          </Text>
        </View>
       
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
            value={data.phonenumber}
            onBlur={props.handleBlur('phone')}
            returnKeyType="done"
          />
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
      </View>
        
      <View style={style.thirdview}>
        <TouchableOpacity style={style.CommandButton} onPress={() => {}}>
          <Text style={style.PannelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
)}

    </Formik>
    :
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <ActivityIndicator size="large" color="orange"/>
        </View>
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
    flex: 1,
    justifyContent:"center"

  },
  secondview: {
    
    flex:2,
    marginHorizontal: 20,
  },
  thirdview: {
   
    justifyContent:"center",
    alignItems:"center",
    flex:1,
  },
  Action: {
    flexDirection: 'row',
    alignItems:"center",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    width:"100%",
    borderBottomColor: '#f2f2f2',
    
  },
  textInput: {
    flex:3,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
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
    flex:2,
    marginTop:3,
    height: 20,
    color: 'red',
    paddingStart: 20,
    fontSize: 15,
  },
});
