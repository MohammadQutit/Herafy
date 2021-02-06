export const globalstate={
    UserID:null,

}

export default CalenderReducer=(prevState,action)=>{
    switch(action.type){
       case 'setID':
       return{
           ...prevState,
           UserID:action.UserID,
       }
        
    }
}