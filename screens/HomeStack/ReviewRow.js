import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types';

export default function Post(props) {
 
  return (
    <View style={style.container}>
      <View style={style.CreatorInfo}>
        <TouchableOpacity style={style.Touchable} onPress={() => {props.navigation.navigate('ProfilePage')}}>
          <Image source={props.Profileurl} style={style.profileImage} />
          <Text style={style.CreatorText}>
            {props.FirstName + ' ' + props.LastName}
          </Text>
        </TouchableOpacity>

        <View style={{paddingStart:50,flexDirection:"row",flex:1,justifyContent:"flex-end",paddingEnd:10}}>
           <Text style={{fontSize:16,fontWeight:'bold'}}>
              {props.rating}
           </Text>

           <Icon name='star' size={20} color="purple" style={{marginStart:10}}  />


        </View>



      </View>
    

      <View style={style.PostTextView}>
        <Text style={style.PostText}>
          {props.ReviewtText}
        </Text>
      </View>
    </View>
  );
}
Post.propTypes = {
    rating:PropTypes.number,
    Profileurl: PropTypes.number,
    FirstName:PropTypes.string,
    LastName:PropTypes.string,
    ReviewtText:PropTypes.string,
    navigation:PropTypes.object
  };

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height:200,
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
  PostText: {padding: 10, fontSize: 17,paddingHorizontal:20},
  PostTextView: {width: '100%', height: 100},
  PostImagesView: {width:"100%",height:230,flexDirection:"row",},
  postImages:{width:"49.5%",height:"90%",margin:4}
});
