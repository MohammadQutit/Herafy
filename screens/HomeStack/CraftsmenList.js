import React from 'react';
import {View, FlatList, StyleSheet, SafeAreaView, Text} from 'react-native';
import Row from './Row';

export default List = ({navigation}) => {
  const [Data, setData] = React.useState([
    {name: 'Mohammad', phone: '10'},
    {name: 'Mohammad', phone: '20'},
    {name: 'Mohammad', phone: '7'},
    {name: 'Mohammad', phone: '2'},
    {name: 'Mohammad', phone: '80'},
    {name: 'Mohammad', phone: '400'},
    {name: 'Mohammad', phone: '1'},
    {name: 'Mohammad', phone: '4'},
  ]);

  const renderit = (obj) => (
    <Row name={obj.item.name} phone={obj.item.phone} navigation={navigation} />
  );

  return (
    <View style={style.container}>
      <SafeAreaView>
        <FlatList
          data={Data}
          renderItem={renderit}
          keyExtractor={(item) => item.phone}
        />
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
