import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

export default function AddPost({navigation}) {
  const [PostText, SetPostText] = React.useState('');
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
        style={{fontSize:20,lineHeight:30,padding:10,textDecorationLine:"none" }}
        autoCorrect={true}
        autoFocus={true}
        maxLength={477}
        />
       
     
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
