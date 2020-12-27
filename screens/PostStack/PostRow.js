import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default function Post(props,{navigation}) {
 
  return (
    <View style={style.container}>
      <View style={style.CreatorInfo}>
        <TouchableOpacity style={style.Touchable} onPress={() => {}}>
          <Image source={props.Profileurl} style={style.profileImage} />
          <Text style={style.CreatorText}>
            {props.FirstName + ' ' + props.LastName}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.PostTextView}>
        <Text style={style.PostText}>
          {props.postText}
        </Text>
      </View>
      <View style={style.PostImagesView}>
          <Image style={style.postImages} source={props.firstImage} />
          <Image style={style.postImages} source={props.secondImage}/>

      </View>
    </View>
  );
}
Post.propTypes = {
    Profileurl: PropTypes.number,
    FirstName:PropTypes.string,
    LastName:PropTypes.string,
    postText:PropTypes.string,
    firstImage:PropTypes.number,
    secondImage:PropTypes.number,
    navigation:PropTypes.object
  };

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 420,
    backgroundColor: 'white',
    marginTop:5,
    marginBottom:5,
  },
  CreatorInfo: {
      
    flexDirection: 'row',
    width: '100%',
    height: 70,
    alignItems: 'center',
    
  },
  Touchable: {flexDirection: 'row', alignItems: 'center'},
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 60,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  CreatorText: {paddingStart: 10, fontSize: 16, fontWeight: 'bold'},
  PostText: {padding: 10, fontSize: 17},
  PostTextView: {width: '100%', height: 100},
  PostImagesView: {width:"100%",height:230,flexDirection:"row",},
  postImages:{width:"49.5%",height:"90%",margin:4}
});
