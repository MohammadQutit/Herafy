import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';
import {Auth} from '@aws-amplify/auth';
import {graphqlOperation} from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql';
import {getUser} from '../../graphql/queries';
import {updateUser} from '../../graphql/mutations';
import {API} from '@aws-amplify/api/src/API';
import {ProfileContext} from '../../context/ProfileContext';
import {moss} from '../../assets/color';
import ImagePicker from 'react-native-image-crop-picker';
import {Storage} from '@aws-amplify/storage';
import Ionicon from 'react-native-vector-icons/MaterialIcons';
import awsExports from '../../aws-exports';
const DefPath =
  'https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg';
const validationSchema = yup.object().shape({
  firstname: yup
    .string('The name should be String')
    .required('Required Field')
    .label(),
  lastname: yup
    .string('Last name should be String')
    .required('Required Field')
    .label(),
  phonenumber: yup.string().required('Required Field').max(13),
  email: yup
    .string()
    .required('Required Field')
    .email('Enter valid Email'),
  city: yup.string().required('Required Field'),
});

const {width} = Dimensions.get('window');
export default function A() {
  const [UserState, dispatch] = React.useContext(ProfileContext);

  const initialValues = {
    city: '',
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    category: '',
    rate: '',
    image: '',
  };
  const [data, setdata] = React.useState(initialValues);
  const [Ready, setReady] = React.useState(false);
  const [uid, setuid] = React.useState('');
  const [image, setImage] = React.useState(DefPath);
  const [ImageObj, setImageObj] = React.useState(DefPath);
  const [awsobj, setawsobj] = React.useState({
    bucket: awsExports.aws_user_files_s3_bucket,
    key: 'public/' + 'nothing',
    region: awsExports.aws_user_files_s3_bucket_region,
  });

  const CreatePost = async () => {
    try {
      const filename = ImageObj.path.replace(/^.*[\\\/]/, '');
      const {mime} = ImageObj;
      const imageData = await fetch(ImageObj.path);
      const blobData = await imageData.blob();

      await Storage.put(filename, blobData, {
        contentType: mime,
      });
      const ob = {
        bucket: awsExports.aws_user_files_s3_bucket,
        key: 'public/' + filename,
        region: awsExports.aws_user_files_s3_bucket_region,
      };
      setawsobj(ob);
      console.log(ob);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const AddPicture = () => {
    try {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        includeBase64: true,
      }).then((image) => {
        setImage(image.path);
        setImageObj(image);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const SubmitEdit = async (values) => {
    try {
      if(ImageObj!== DefPath){
      setReady(false);
      user = await Auth.currentAuthenticatedUser();
      console.log(user);
      await Auth.updateUserAttributes(user, {
        name: values.firstname,
        family_name: values.lastname,
        email: values.email,
        phone_number: values.phonenumber,
        'custom:city': values.city,
      });
      const filename = ImageObj.path.replace(/^.*[\\\/]/, '');
      const {mime} = ImageObj;
      const imageData = await fetch(ImageObj.path);
      const blobData = await imageData.blob();

       Storage.put(filename, blobData, {
        contentType: mime,
      }).then((result)=>{
        console.log(result)
        
        const ob = {
          bucket: awsExports.aws_user_files_s3_bucket,
          key: 'public/' + filename,
          region: awsExports.aws_user_files_s3_bucket_region,
        };

        API.graphql(
          graphqlOperation(updateUser, {
            input: {
              id: uid,
              FirstName: values.firstname,
              LastName: values.lastname,
              Email: values.email,
              PhoneNumber: values.phonenumber,
              City: values.city,
              Image: ob,
            }
            
          })
        ).then(()=>{
          setawsobj(ob);
          setReady(true);
         
      Alert.alert('Success', 'User Attributes updated successfully');

        }
         

        )

        

      })
      
      
    

      
    }
    else{
      setReady(false)
      await API.graphql(
        graphqlOperation(updateUser, {
          input: {
            id: uid,
            FirstName: values.firstname,
            LastName: values.lastname,
            Email: values.email,
            PhoneNumber: values.phonenumber,
            City: values.city,
            
          }
          
        })
      )
      setReady(true)
      Alert.alert('Success', 'User Attributes updated successfully');


    }
    setdata({
      city: values.city,
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      phonenumber: values.phonenumber,
      category: values.category,
      rate: values.rate,
      img: awsobj
    });
    UserState.UserInfo()
      
    } catch (error) {
      setReady(true);
      Alert.alert('Error', error.message);
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    async function GetUserID(params) {
      try {
        console.log(UserState)
        setuid(UserState.UserID);
        await API.graphql(
          graphqlOperation(getUser, {id: UserState.UserID}),
        ).then((result) => {
          console.log(result.data.getUser);
          setdata({
            city: result.data.getUser.City,
            firstname: result.data.getUser.FirstName,
            lastname: result.data.getUser.LastName,
            email: result.data.getUser.Email,
            phonenumber: result.data.getUser.PhoneNumber,
            category: result.data.getUser.Category,
            rate: result.data.getUser.Rating,
            img: result.data.getUser.Image
          });
          if(result.data.getUser.Image!==null)
          Storage.get(result.data.getUser.Image.key.slice(7)).then(
            (result)=>{
              setImage(result)
            }
          )
          else
          setImage(DefPath)
          
        });
       

        setReady(true);
      } catch (error) {
        // setReady(true)
        console.log(error.message);
      }
    }
    GetUserID();
  }, []);
  return Ready === true ? (
    <Formik
      initialValues={data}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        SubmitEdit(values)
        
      }}>
      {(props) => (
        <View style={style.Container}>
          <View style={style.firstview}>
            <Image source={{uri: image}} style={style.image} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '55%',
              }}>
              <TouchableOpacity onPress={() => AddPicture()}>
                <Ionicon name="add-a-photo" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.secondview}>
            <View style={style.Action}>
              <Icon name="user-o" size={20} />
              <TextInput
                placeholder="firstname"
                placeholderTextColor="#666666"
                style={style.textInput}
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
                onChangeText={props.handleChange('firstname')}
                value={props.values.firstname}
                onBlur={props.handleBlur('firstname')}
                returnKeyType="next"
              />
              <Text style={style.errors}>
                {props.touched.firstname && props.errors.firstname}
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
                onChangeText={props.handleChange('lastname')}
                value={props.values.lastname}
                onBlur={props.handleBlur('lastname')}
                returnKeyType="next"
              />
              <Text style={style.errors}>
                {props.touched.lastname && props.errors.lastname}
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
                value={props.values.email}
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
                onChangeText={props.handleChange('phonenumber')}
                value={props.values.phonenumber}
                onBlur={props.handleBlur('phonenumber')}
                returnKeyType="done"
              />
              <Text style={style.errors}>
                {props.touched.phonenumber && props.errors.phonenumber}
              </Text>
            </View>
            {data.category !== ' ' ? (
              <View style={style.Action}>
                <Icon name="globe" size={20} />
                <RNPickerSelect
                  placeholder={{label: 'Select a city', value: ''}}
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
                      marginLeft: 10,
                      width: width / 2.5,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: 20,
                      height: 40,
                    },
                    inputAndroid: {
                      color: 'black',
                      backgroundColor: 'white',
                      width: width / 2.5,
                      marginLeft: 10,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: 20,
                      
                      height: 40,
                    },
                    placeholder: {
                      color: 'black',
                    },
                  }}
                />
              </View>
            ) : (
              <View />
            )}
          </View>

          <View style={style.thirdview}>
            <TouchableOpacity
              style={style.CommandButton}
              onPress={props.handleSubmit}>
              <Text style={style.PannelButtonTitle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={moss} />
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
    flex: 1.5,
    justifyContent: 'center',
    
  },
  secondview: {
    flex: 3,
    width:"100%"
  },
  thirdview: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  Action: {
    
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginEnd:10,
    marginStart:10,
    borderBottomWidth: 1,
    width: '90%',
    height:50,

    borderBottomColor: '#f2f2f2',
  },
  textInput: {
    
    paddingStart: 10,
    paddingEnd:10,
    alignItems:'center',
    width:"65%",
    color: 'black',
   
  },
  CommandButton: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: moss,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.4,
    height: 50,
  },
  PannelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  errors: {
    width:"25%",
    marginTop: 3,
    color: 'red',
    fontSize: 9,
  },
});
