import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Text,
  Dimensions,
} from 'react-native';
let {width, height} = Dimensions.get('window');
export default function catigories({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        border: 1,
        borderColor: 'black',
      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <View style={styles.category_container}>
        <TouchableOpacity
          style={styles.category_button}
          onPress={() => {
            navigation.navigate('ListPage');
          }}>
          <Image
            source={require('../../assets/carpenter.png')}
            style={styles.category_icon}
          />

          <Text style={styles.texticon}>Carpenter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category_button} onPress={() => {}}>
          <Image
            source={require('../../assets/carpenter.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Carpenter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category_button} onPress={() => {}}>
          <Image
            source={require('../../assets/carpenter.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Carpenter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.category_container}>
        <TouchableOpacity style={styles.category_button} onPress={() => {}}>
          <Image
            source={require('../../assets/carpenter.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Carpenter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category_button} onPress={() => {}}>
          <Image
            source={require('../../assets/carpenter.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Carpenter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category_button} onPress={() => {}}>
          <Image
            source={require('../../assets/carpenter.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Carpenter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.category_container}>
        <TouchableOpacity style={styles.category_button} onPress={() => {}}>
          <Image
            source={require('../../assets/carpenter.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Carpenter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category_button} onPress={() => {}}>
          <Image
            source={require('../../assets/carpenter.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Carpenter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category_button} onPress={() => {}}>
          <Image
            source={require('../../assets/carpenter.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Carpenter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  category_container: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  category_button: {
    height: 100,
    width: width / 4,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    //shadowRadius:10,
    //shadowColor: 'rgba(0, 0, 0, 0.1)',
  },

  category_icon: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    borderRadius: 15,
    backgroundColor: 'grey',
  },

  texticon: {
    paddingTop: 15,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Cochin',
  },
});
