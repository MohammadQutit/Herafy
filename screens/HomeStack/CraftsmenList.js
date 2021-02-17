import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
  TextInput,
  Alert,
  RefreshControl
} from 'react-native';
import Row from './Row';
import {CategoriesContext} from '../../context/CategoriesContext';
import RNPickerSelect from 'react-native-picker-select';
import {API}from '@aws-amplify/api/src/API'
import {graphqlOperation}from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql'
import {listUsers, getUser} from '../../graphql/queries';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NameSort,RateSort,UsedSort} from '../../functions/Sorting'
import {moss} from '../../assets/color'
export default List = ({navigation}) => {
  const [UserState, dispatch] = React.useContext(CategoriesContext);
  const [isReady, SetIsReady] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [City,SetCity]=React.useState("")
  const [sea,setsearch]=React.useState("")
  console.log(UserState)
  const [Data, setData] = React.useState([]);

  const FetchData=async(city)=>{
    try {
      console.log(city)
      SetIsReady(false)
      const x = await API.graphql(
        graphqlOperation(listUsers, {
          filter: { and: [{Category: {eq: UserState.Category}},{City:{eq:city}},{id:{ne:UserState.UserID}}] },
        }),
      )
      setData(x.data.listUsers.items);
      SetIsReady(true)
      console.log(x.data.listUsers.items);
    } catch (error) {
      console.log(error.message);
      SetIsReady(true)
    }

  }
   
  const search=async()=>{
    
    if(sea[1]!=null){
    const x=await API.graphql(
      graphqlOperation(listUsers,{
        filter:{and: [{Category: {eq: UserState.Category}},{FirstName:{eq:sea[0]}},{LastName:{eq:sea[1]}},{id:{ne:UserState.UserID}}] }
      })
    ).then(
      (x)=>{
        console.log(x.data.listUsers.items)
        setData(x.data.listUsers.items);
        SetIsReady(true)
      }
    )
    }else{
      Alert.alert('you must enter the fullname')
    }
  }

   


  function RenderHeader() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          height: 100,
          backgroundColor:"#F2F2F2",
       
        }}>
        

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
                <TouchableOpacity   onPress={()=>setData(NameSort(Data))}>
                <Text style={style.TextStyle}>Name</Text>
                </TouchableOpacity>
              
            </View>
            <View
              style={style.FilterButtonView}>
                <RNPickerSelect
                  placeholder={{label: 'Location', value: ""}}
                  useNativeAndroidPickerStyle={false}
                  value={City}
                  onValueChange={(value)=>{SetCity(value)
                 FetchData(value);
                  
                  }}
                  items={[
                    {label: 'Jenin', value: 'Jenin'},
                    {label: 'Nablus', value: 'Nablus'},
                    {label: 'Ramallah', value: 'Ramallah'},
                    {label: 'Bethlehem', value: 'Bethlehem'},
                    {label: 'Hebron', value: 'Hebron'}
                    
                  ]}
                  style={{
                    inputIOS: {
                      color: 'white',
                      textAlign: 'center',
                      width:"100%",
                      backgroundColor:moss,
                      fontWeight: 'bold',
                      height: "100%",
                      borderRadius:10
                    },
                    inputAndroid: {
                      color: 'white',
                      width: "100%",
                      textAlign: 'center',
                      marginRight: 10,
                      backgroundColor: moss,
                      fontWeight: 'bold',
                      height: "100%",
                    },
                    placeholder: {
                      color: 'white',
                    },
                  }}
                />
            </View>
          </View>
          <View style={{flex: 1}}>
            <View
              style={style.FilterButtonView}>
                <TouchableOpacity onPress={()=>setData(RateSort(Data))}>
              <Text style={style.TextStyle}>Rating</Text>
              </TouchableOpacity>
            </View>
            <View
              style={style.FilterButtonView}>
                <TouchableOpacity onPress={()=>setData(UsedSort(Data))} >
              <Text style={style.TextStyle}>Most Used</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }


  async function getPostData2(){
    setRefreshing(true)
    const data = await API.graphql(graphqlOperation(listUsers,{
      filter: {and:[{Category: {eq: UserState.Category}},{id:{ne:UserState.UserID}}]},
    }))
    setData(...[data.data.listUsers.items])
    console.log(data.data.listUsers.items)
    setRefreshing(false)
  }


  
  React.useEffect(() => {
    async function a() {
      console.log('hello');
      try {
        SetIsReady(false)
        const x = await API.graphql(
          graphqlOperation(listUsers, {
            filter: {and:[{Category: {eq: UserState.Category}},{id:{ne:UserState.UserID}}]},
          }),
        )
        setData(x.data.listUsers.items);
        SetIsReady(true)
        console.log(x.data.listUsers.items);
      } catch (error) {
        console.log(error.message);
        SetIsReady(true)
      }
    }
    a();
  }, []);

  
  const key=(item) => (item.id);

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
      Image={obj.item.Image}
    />
  );

  return (
    <View style={style.container}>
      {isReady === false ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={moss} size="large" />
        </View>
      ) : (
        <SafeAreaView style={{flex:1}}>
          <View style={{width:"100%",backgroundColor:"white",flexDirection:"row",alignItems:"center",height:60}}>
          <TextInput
          onChangeText={(text)=>{setsearch(text.split(" "))}}
          placeholder="search"
           style={{
             flex:4,
            marginStart:10,
            backgroundColor: '#F2F2F2',
            paddingStart: 20,
           
            fontWeight: 'bold',
           
            borderRadius:20
          }}
         
          />
          <TouchableOpacity style={{alignItems:"center",justifyContent:"center"}} onPress={()=>{search()}}>
            <Icon name="search" size={30} color="grey" />
          </TouchableOpacity>
          </View>
          <FlatList
          maxToRenderPerBatch={4}
            ListHeaderComponent={<RenderHeader />}
            stickyHeaderIndices={[0]}
            data={Data}
            renderItem={renderit}
            keyExtractor={key}
            refreshing={refreshing}
            onRefresh={()=>getPostData2()}
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
    backgroundColor: moss,
    borderRadius:10
  },
  TextStyle:{
    fontWeight:"900",
   
    fontFamily:'Arial',
    fontWeight:"bold",
    color:"white"
  }
});
