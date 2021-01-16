import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
const {height} = Dimensions.get('screen');

export default function Choose({navigation}) {
  return (
    <ImageBackground style={styles.container} source={require('../../4.jpg')}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ordinary')}>
          <Text style={styles.buttontext}>Ordinary User</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('craftsman')}>
          <Text style={styles.buttontext}>Craftsman</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%',
    height: height,
  },

  button: {
    marginTop: 30,
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
  },
  buttontext: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
});
