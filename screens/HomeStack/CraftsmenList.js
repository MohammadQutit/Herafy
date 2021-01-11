import React from 'react';
import {View, FlatList, StyleSheet, SafeAreaView, Text,ActivityIndicator} from 'react-native';
import Row from './Row';
import {CategoriesContext} from '../../context/CategoriesContext';
import {API, graphqlOperation} from 'aws-amplify';
import {listUsers,getUser} from '../../graphql/queries';


export default List = ({navigation}) => {
  const [UserState, dispatch] = React.useContext(CategoriesContext);
  const [isReady,SetIsReady]=React.useState(false)
  const [Data, setData] = React.useState([])
  React.useEffect(() => {
    async function a() {
      console.log('hello');
      try {
        const x = await API.graphql(graphqlOperation(listUsers,{filter:{Category:{eq:UserState.Category}}})).then(SetIsReady(true));
        //dispatch({type:"ChooseUser",RequstedUserID:x.data.listUsers.items.id})
         setData(x.data.listUsers.items)
        console.log(x.data.listUsers.items);
      } catch (error) {
        console.log(error.message)
      }
    }
    a();
  }, []);

  

  const renderit = (obj) => (
    <Row FirstName={obj.item.FirstName} LastName={obj.item.LastName} Rating={obj.item.Rating} NumberOFRater={obj.item.NumberOfUsers} PhoneNumber={obj.item.PhoneNumber} navigation={navigation} />
  );

  return (
    <View style={style.container}>


      {
        isReady===false?
        (<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <ActivityIndicator color="purple" size="large"/>
        </View>)
        :
        <SafeAreaView>
        <FlatList
          data={Data}
          renderItem={renderit}
          keyExtractor={(item) => item.phone}
        />
      </SafeAreaView>
      }
      
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
