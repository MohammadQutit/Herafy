import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import PostRow from './PostRow';

export default function PostList({navigation}) {
  




  const postdata = [
    {
      id: '1',
      Profileurl: require('../../4.png'),
      firstImage: require('../../4.png'),
      secondImage: require('../../4.png'),
      FirstName: 'Mohammad',
      LastName: 'Qutit',
      postText:
        'I neeed a Carpenter to do a quick job for me, for anyone who is freenow, please, contact me on my phone number',
    },
    {
      id: '2',
      Profileurl: require('../../4.png'),
      firstImage: require('../../4.png'),
      secondImage: require('../../4.png'),
      FirstName: 'Mosab',
      LastName: 'Zakarneh',
      postText:
        'I neeed a BlackSMith to do a quick job for me, for anyone who is freenow, please, contact me on my phone number',
    },
    {
      id: '3',
      Profileurl: require('../../4.png'),
      firstImage: require('../../4.png'),
      secondImage: require('../../4.png'),
      FirstName: 'Hothayfa',
      LastName: 'Abu-Arra',
      postText:
        'I neeed a Carpenter to do a quick job for me, for anyone who is freenow, please, contact me on my phone number',
    },
  ];
  const renderit = (obj) => (
    <PostRow
      FirstName={obj.item.FirstName}
      LastName={obj.item.LastName}
      Profileurl={obj.item.Profileurl}
      postText={obj.item.postText}
      firstImage={obj.item.firstImage}
      secondImage={obj.item.secondImage}
      navigation={navigation}
    />
  );

  return (
    <View style={style.container1}>
      <SafeAreaView style={style.container2}>
        <FlatList
          data={postdata}
          renderItem={renderit}
          keyExtractor={(item) => item.id}
          
        />
      </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    flex: 1,
  },
});
