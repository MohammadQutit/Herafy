export const initialLoginState={
    isLoading:true,
    userName:null,
    userToken:null,
    userType:null
  };
  
  export default  loginReducer=(prevState,action)=>{
    switch(action.type){
      case'LOGIN':
      return{
        ...prevState,
        userName:action.id,
        userToken:action.token,
        isLoading:false,
        userType:action.userType,

      };
      case'LOGOUT':
      return{
        ...prevState,
        userName:null,
        userToken:null,
        isLoading:false,
      };
      case'REGISTER':
      return{
       ...prevState,
       isLoading:false,
       userName:action.id,
       userToken:action.token,
      };
      case'RETRIEVE_TOKEN':
      return{
       ...prevState,
       isLoading:false,
       userToken:action.token,
       userType:action.userType
       };

       
      
    }

  }