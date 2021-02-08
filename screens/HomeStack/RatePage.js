import React, {useState, setState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CategoriesContext} from '../../context/CategoriesContext';
import {API} from '@aws-amplify/api/src/API';
import {getUser2,getReview} from "../../graphql/queries"
import {graphqlOperation} from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql';
import {createReview,} from '../../graphql/mutations';

//const [UserState, dispatch] = React.useContext(CategoriesContext);
const numstar = 5;
export default class A extends React.Component {
    static contextType = CategoriesContext;
    
  state = {
    rate: 1,
    Review: '',
    ready:true,
  };
  rate = (star) => {
    this.setState({rate: star});
  };
  handleReview = (text) => {
    this.setState({Review: text});
  };
  setReady=(value)=>{
    this.setState({ready:value})
  }

  submitReview = async (UserState) => {


     const x1= await API.graphql(graphqlOperation(getUser2,{id:UserState.UserID , CraftmanID:{eq:UserState.RequstedUserID}}))
     const result=x1.data.getUser.RviewsByUser.items
     if(result.length===0){
      if (this.state.Review === '') {
        Alert.alert('Error', 'Review is empty, Please Write one ');
      } else {
        try {
         
  
          
          this.setReady(false)
          await API.graphql(
            graphqlOperation(createReview, {
              input: {
                CraftmanID: UserState.RequstedUserID,
                Comment: this.state.Review,
                Rate: this.state.rate,
                reviewReviewerId: UserState.UserID,
                reviewUserId: UserState.RequstedUserID,
              },
            })
          ).then(()=>{
            this.setReady(true)
            
          })
          this.setState({rate:1})
            this.setState({Review:''})
            Alert.alert("","Review Added Ruccessfully")
        } catch (error) {
          this.setReady(true)
          Alert.alert("Error",error.message)
          
          console.log(error);
        }
      }
       
     }
     else{
       
       Alert.alert("","You Already rate this Craftsman")
     
       
    
  }
  };

  render() {
    const [UserState, dispatch]=this.context
    let stars = [];

    for (let x = 1; x <= numstar; x++) {
      stars.push(
        <TouchableWithoutFeedback
          key={x}
          onPress={() => {
            this.rate(x);
          }}>
          <Animated.View>
            <Star filled={x <= this.state.rate ? true : false} />
          </Animated.View>
        </TouchableWithoutFeedback>,
      );
    }

    return (
      this.state.ready==true?
      <SafeAreaView style={style.container}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <View style={style.textinput}>
          <TextInput
            placeholder="Type your review"
            style={style.TextInput}
            textAlignVertical="top"
            backgroundColor="white"
            fontWeight="bold"
            onChangeText={this.handleReview}
            multiline={true}
            numberOfLines={8}
            autoCorrect={true}
            maxLength={477}
          />
        </View>
        <View style={style.stars_view}>{stars}</View>
        <View style={style.Button_View}>
          <TouchableOpacity style={style.Button} onPress={() => {this.submitReview(UserState)}}>
            <Text style={style.Text_Button}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      :
      <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }
}
class Star extends React.Component {
  render() {
    return (
      <Icon
        name={this.props.filled === true ? 'star' : 'star-o'}
        color="#4D3886"
        size={40}
        style={{marginHorizontal: 6}}
      />
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    flex: 2,
  },
  inline_text_style: {
    width: '98%',
    height: '90%',
  },
  stars_view: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 4,
  },
  Button_View: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4D3886',
    alignItems: 'center',
    width: 150,

    // marginTop: 10,
  },
  Text_Button: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  TextInput: {
    fontSize: 20,
    lineHeight: 30,
    padding: 10,
    textDecorationLine: 'none',
    flex: 3,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: 'white',
  },
});
