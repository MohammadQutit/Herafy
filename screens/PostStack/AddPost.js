import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

export default function AddPost({navigation}) {
  const [PostText, SetPostText] = React.useState('');
  const [image, setImage] = React.useState(
    'https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg',
  );
  const x = () =>
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
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
        style={style.TextInput}
        autoCorrect={true}
        autoFocus={true}
        maxLength={477}
      />
      <View
        style={{
          felx: 3,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: image}}
          style={{flex: 1, margin: 2, height: 200, width: 200}}
        />
        <Image
          source={{uri: image}}
          style={{flex: 1, margin: 2, height: 200, width: 200}}
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          margin: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={style.button} onPress={x}>
          <Text  style={{color:"white" ,fontWeight:"bold",fontSize:20}}>hello</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,

    marginBottom: 20,
  },

  TextInput: {
    fontSize: 20,
    lineHeight: 30,
    padding: 10,
    textDecorationLine: 'none',
    flex: 1,
    margin: 5,
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
    borderRadius:20
  },
});
