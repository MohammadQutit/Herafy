import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {CategoriesContext} from '../../context/CategoriesContext' 
import {Auth} from "@aws-amplify/auth"
import {Text1} from '../../assets/color'
import {moss} from '../../assets/color'
let {width, height} = Dimensions.get('window');
export default function catigories({navigation}) {
 const [UserState,dispatch]=React.useContext(CategoriesContext)
 const [Ready,setReady]=React.useState(true)

const GoTOList= (category)=>{
  dispatch({type:"ChooseCategory", Category:category})
  navigation.navigate('ListPage')
  

}

 React.useEffect(()=>{
   async function GetUserID(params) {
     try {
       setReady(false)
      const {attributes} =await Auth.currentUserInfo().then(
        await Auth.currentUserInfo().then((userInfo) => {
          const {attributes = {}} = userInfo
          dispatch({type:"SetUserID",UserID:attributes['sub']})
          
          
        }
      ))
      setReady(true)
       
     } catch (error) {
       
      setReady(true)
       console.log(error.message);
     }
     
   }
 GetUserID()
 },[])


  return (
    Ready=== true?
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
          onPress={()=>GoTOList('Carpenter')
           
          }>
          <Image
            source={require('../../assets/carpenter.png')}
            style={styles.category_icon}
          />

          <Text style={styles.texticon}>Carpenter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category_button}  onPress={()=>GoTOList('Plumber')}>
          <Image
            source={require('../../assets/plumber.png')}
            style={[styles.category_icon]}
          />
          <Text style={styles.texticon}>Plumber</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category_button} onPress={()=>GoTOList('Builder')}>
          <Image
            source={require('../../assets/builder.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Builder</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.category_container}>
        <TouchableOpacity style={styles.category_button}  onPress={()=>GoTOList('Electrician')}>
          <Image
            source={require('../../assets/electrician.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Electrician</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category_button} onPress={()=>GoTOList('Painter')}>
          <Image
            source={require('../../assets/painter.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Painter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category_button} onPress={()=>GoTOList('Tiles Setter')}>
          <Image
            source={require('../../assets/tiles.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Tiles Setter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.category_container}>
        <TouchableOpacity style={styles.category_button} onPress={()=>GoTOList('AC Technician')}>
          <Image
            source={require('../../assets/AC.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>AC Technician</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category_button} onPress={()=>GoTOList('Aluminum')}>
          <Image
            source={require('../../assets/carpenter.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Aluminium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category_button} onPress={()=>GoTOList('Blacksmith')}>
          <Image
            source={require('../../assets/blacksmith.png')}
            style={styles.category_icon}
          />
          <Text style={styles.texticon}>Blacksmith</Text>
        </TouchableOpacity>
      </View>
    </View>
    :
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ActivityIndicator size="large" color={moss}/>

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
    height: height/6,
    width: width/3.5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor:"#F2F2F2",
    borderWidth:10,
    //shadowRadius:10,
    //shadowColor: 'rgba(0, 0, 0, 0.1)',
  },

  category_icon: {
    height: (height/6)-5,
    width: (width/3.5)-3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    borderRadius: 15,
    backgroundColor:"white"
    
  },

  texticon: {
    width:120,
    paddingTop: 15,
    color: Text1,
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Cochin',
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"

  },
});
