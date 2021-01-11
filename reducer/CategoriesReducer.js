export const initialUserState={
    Category:"carpenter",
    UserID:null,
    RequstedUserID:null,
  };
  
  export default CategoriesReducer=(prevState,action)=>{
    switch(action.type){
      case'ChooseUser':
      return{
        ...prevState,
        RequstedUserID:action.RequstedUserID
        
      };
      case'ChooseCategory':
      return{
        ...prevState,
        Category:action.Category
      };
      case'SetUserID':
      return{
       ...prevState,
       UserID:action.UserID
      };
    

       
      
    }

  }