import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';


export default function AddPost({navigation}) {
  const [PostText, SetPostText] = React.useState('');
  const x=ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
  });

  
  






  return (
    <View style={style.container}>
      <TextInput
        textAlignVertical="top"
        textBreakStrategy="highQuality"
        onChangeText={(text) => {
          SetPostText(text);
        }}
        multiline={true}
        numberOfLines={8}
        style={style.container}
        autoCorrect={true}
        autoFocus={true}
        maxLength={477}
        />
        <View style={{flex:2,flexDirection:"row",backgroundColor:"red"}}>

        </View>
        <TouchableOpacity onPress={x}>
          <Text>hello</Text>
        </TouchableOpacity>
       
     
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },

  TextInput:{fontSize:20,lineHeight:30,padding:10,textDecorationLine:"none",flex:1 }
});
