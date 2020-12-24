import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  SafeAreaView,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function A() {
  return (
    <SafeAreaView style={style.Container}>
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
          />
        </View>
        <View style={style.Action}>
          <Icon name="user-o" size={20} />
          <TextInput
            placeholder="LastName"
            placeholderTextColor="#666666"
            style={style.textInput}
          />
        </View>
        <View style={style.Action}>
          <Icon name="envelope-o" size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            style={style.textInput}
          />
        </View>
        <View style={style.Action}>
          <Icon name="globe" size={20} />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666666"
            style={style.textInput}
          />
        </View>
        <View style={style.Action}>
          <Icon name="phone" size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            style={style.textInput}
          />
        </View>
      </View>
      <View style={style.thirdview}>
        <TouchableOpacity style={style.CommandButton} onPress={() => {}}>
          <Text style={style.PannelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 20,
  },
  headertext: {
    marginTop: 10,
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
  },
  secondview: {
    flex: 2,
  },
  thirdview: {
    flex: 1,
  },
  Action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 0,
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    width: '80%',
  },
  CommandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4D3886',
    alignItems: 'center',
    marginTop: 10,
  },
  PannelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
