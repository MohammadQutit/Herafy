import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import Row from './Row';
import {CategoriesContext} from '../../context/CategoriesContext';
import {API, graphqlOperation} from 'aws-amplify';
import {listUsers, getUser} from '../../graphql/queries';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default List = ({navigation}) => {
  const [UserState, dispatch] = React.useContext(CategoriesContext);
  const [isReady, SetIsReady] = React.useState(true);
  const [Data, setData] = React.useState([
    {
      id: '1',
      FirstName: 'Mohammad',
      LastName: 'Saleem',
      Rating: 15,
      NumberOfUsers: 5,
      PhoneNumber: '+972568606090',
      City: 'Ramallah',
    },
    {
      id: '2',
      FirstName: 'Mohammad',
      LastName: 'Saleem',
      Rating: 20,
      NumberOfUsers: 5,
      PhoneNumber: '+972568606090',
      City: 'Ramallah',
    },
    {
      id: '3',
      FirstName: 'Mohammad',
      LastName: 'Saleem',
      Rating: 20,
      NumberOfUsers: 5,
      PhoneNumber: '+972568606090',
      City: 'Ramallah',
    },
    {
      id: '4',
      FirstName: 'Mohammad',
      LastName: 'Saleem',
      Rating: 20,
      NumberOfUsers: 5,
      PhoneNumber: '+972568606090',
      City: 'Ramallah',
    },
    {
      id: '5',
      FirstName: 'Mohammad',
      LastName: 'Saleem',
      Rating: 20,
      NumberOfUsers: 5,
      PhoneNumber: '+972568606090',
      City: 'Ramallah',
    },
    {
      id: '6',
      FirstName: 'Mohammad',
      LastName: 'Saleem',
      Rating: 20,
      NumberOfUsers: 5,
      PhoneNumber: '+972568606090',
      City: 'Ramallah',
    },
    {
      id: '7',
      FirstName: 'Ahmad',
      LastName: 'Kareem',
      Rating: 20,
      NumberOfUsers: 5,
      PhoneNumber: '+972568606090',
      City: 'Ramallah',
    },
    {
      id: '8',
      FirstName: 'Ahmad',
      LastName: 'Karam',
      Rating: 20,
      NumberOfUsers: 5,
      PhoneNumber: '+972568606090',
      City: 'Ramallah',
    },
  ]);

   const NameSort=()=>{let [...x]= Data.sort(function(a, b) {
    let aFirstChar = a.FirstName.charAt(0);
    let bFirstChar = b.FirstName.charAt(0);
    if (aFirstChar > bFirstChar) {
      return 1;
    } else if (aFirstChar < bFirstChar) {
      return -1;
    } else {
      let aLastChar = a.LastName.charAt(0);
      let bLastChar = b.LastName.charAt(0);
      if (aLastChar > bLastChar) {
        return 1;
      } else if (aLastChar < bLastChar) {
        return -1;
      } else {
        return 0;
      }    
    }
  })
  console.log(x)
setData(x)
};


  function RenderHeader() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          height: 100,
          backgroundColor:"#F2F2F2",
          borderBottomColor: '#4D3886',
          borderBottomWidth: 3,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            height: '100%',
            marginEnd: 1,
            borderRadius: 10,
          }}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            placeholder="Search"
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 20,
              width: '80%',
              fontWeight: 'bold',
            }}
          />
          <View
            style={{
              width: '20%',
              justifyContent: 'center',
            }}>
            <Icon name="search" size={30} color="grey" />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            marginStart: 1,
            borderRadius: 10,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View
              style={style.FilterButtonView}>
                <TouchableOpacity onPress={()=>NameSort()}>
                <Text>Name</Text>
                </TouchableOpacity>
              
            </View>
            <View
              style={style.FilterButtonView}>
                <TouchableOpacity>
              <Text>Locations</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View
              style={style.FilterButtonView}>
                <TouchableOpacity>
              <Text>Rating</Text>
              </TouchableOpacity>
            </View>
            <View
              style={style.FilterButtonView}>
                <TouchableOpacity>
              <Text>Most Used</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  
  /*React.useEffect(() => {
    async function a() {
      console.log('hello');
      try {
        const x = await API.graphql(
          graphqlOperation(listUsers, {
            filter: {Category: {eq: UserState.Category}},
          }),
        ).then(SetIsReady(true));
        //dispatch({type:"ChooseUser",RequstedUserID:x.data.listUsers.items.id})
        setData(x.data.listUsers.items);
        console.log(x.data.listUsers.items);
      } catch (error) {
        console.log(error.message);
      }
    }
    a();
  }, []);*/

  const renderit = (obj) => (
    <Row
      FirstName={obj.item.FirstName}
      LastName={obj.item.LastName}
      Rating={obj.item.Rating}
      NumberOFRater={obj.item.NumberOfUsers}
      PhoneNumber={obj.item.PhoneNumber}
      navigation={navigation}
      Location={obj.item.City}
      ID={obj.item.id}
      SelectUser={dispatch}
    />
  );

  return (
    <View style={style.container}>
      {isReady === false ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="purple" size="large" />
        </View>
      ) : (
        <SafeAreaView>
          <FlatList
            ListHeaderComponent={<RenderHeader />}
            stickyHeaderIndices={[0]}
            data={Data}
            renderItem={renderit}
            keyExtractor={(item) => (item.id)}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  FilterButtonView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0.5,
    backgroundColor: 'white',
  }
});
