import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Alert
} from 'react-native';
import {Storage}from "@aws-amplify/storage"
import awsExports from '../../aws-exports'
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {createPost} from '../../graphql/mutations';
import {PostsContext} from '../../context/PostsContext'
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
const {height}=Dimensions.get("window")
const DefPath="https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg"
export default function AddPost({navigation}) {
  const [PostText, SetPostText] = React.useState("");
  const [image, setImage] = React.useState(DefPath);
  const [ImageObj,setImageObj]=React.useState(DefPath)
  const [UserState,dispatch]=React.useContext(PostsContext)

  const get=()=>{
    Storage.get("public/91051149_2486666781584973_6752788586271080448_o.jpg").then((result)=>{
     setImage(result)
    
    })
  }
  const CreatePost=async()=>{
    
    if(PostText ===""){

      Alert.alert("Error","Post must have text");
    }
    else{
   try {
     console.log("hahahahah")
     if(image===DefPath){
       
        API.graphql(graphqlOperation(createPost,{input:{Text:PostText,postUserId:UserState.UserID}}))
       .then(navigation.pop())
       

      



     }
     else{
      const filename = ImageObj.path.replace(/^.*[\\\/]/, '')
      const {mime}=ImageObj
      const imageData = await fetch(ImageObj.path)
      const blobData = await imageData.blob()
      
      Storage.put(filename,blobData,{
        contentType:mime
      }).then((result)=>{
        const ob={
          bucket:awsExports.aws_user_files_s3_bucket,
          key:"public/"+filename,
          region:awsExports.aws_user_files_s3_bucket_region,
         
        }

         API.graphql(graphqlOperation(createPost,{input:{Text:PostText,postUserId:UserState.UserID,Image:ob}}))
       .then(navigation.pop())
        
  
  
      }
  
      )

     }
     
      
       
     } catch (error) {
       Alert.alert("Error",error.message)
       
     }
    }
  }


  const AddPicture = () => {
    try {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: false,
        includeBase64:true,
      }).then((image) => {
        console.log(image);
        setImage(image.path);
        setImageObj(image)
        console.log(image)
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={style.container}>
      <View style={{flex: 3}}>
        <TextInput
          textAlignVertical="top"
          placeholder={'Write to ask for something'}
          textBreakStrategy="highQuality"
          returnKeyType="done"
          onSubmitEditing={() => Keyboard.dismiss()}
          onChangeText={(text) => {
            SetPostText(text);
          }}
          multiline={true}
          numberOfLines={8}
          style={style.TextInput}
          autoCorrect={true}
          maxLength={477}
        />
        <View style={style.mainViewButtons}>
          <View
            style={style.postButtonView}>
            <TouchableOpacity onPress={()=>{
             CreatePost()
              //get()

            
            }}>
              <Text style={style.Text}>Post</Text>
            </TouchableOpacity>
          </View>
          <View
            style={style.addImageButtonView}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={AddPicture}>
              <Ionicons
                name="image-edit"
                style={{marginRight: 10}}
                size={40}
                color="purple"
              />
              <Text style={style.Text}>Image</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={style.ImageMainView}>
        <Image
          source={{uri: image}}
          style={style.image}
        />
        
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  TextInput: {
    fontSize: 20,
    lineHeight: 30,
    padding: 10,
    textDecorationLine: 'none',
    flex: 3,
    margin: 3,
    padding: 10,
    fontSize: 18,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#4D3886',
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  mainViewButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 3,
  },
  postButtonView:{flex: 1, alignItems: 'center', justifyContent: 'center'},
  addImageButtonView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 3,
    borderLeftColor: '#F2F2F2',
  },
  ImageMainView:{
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image:{flex: 1, margin: 2, height: '99.5%', width: '50%',resizeMode: 'contain'}
});
