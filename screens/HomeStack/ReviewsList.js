import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import RevRow from './ReviewRow';

export default function PostList({navigation}) {
  




  const postdata = [
    {
      id: '1',
      Profileurl: require('../../4.png'),
      FirstName: 'Mohammad',
      LastName: 'Qutit',
      postText:
        'I neeed a Carpenter to do a quick job for me, for anyone who is freenow, please, contact me on my phone number',
        rating:3.4
    },
    {
      id: '2',
      Profileurl: require('../../4.png'),
      FirstName: 'Mosab',
      LastName: 'Zakarneh',
      postText:
        'I neeed a BlackSMith to do a quick job for me, for anyone who is freenow, please, contact me on my phone number',
        rating:4.5
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
        rating:5
    },
  ];
  const renderit = (obj) => (
    <RevRow
      FirstName={obj.item.FirstName}
      LastName={obj.item.LastName}
      Profileurl={obj.item.Profileurl}
      ReviewtText={obj.item.postText}
      rating={obj.item.rating}
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
