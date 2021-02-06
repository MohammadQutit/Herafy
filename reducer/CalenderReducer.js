export const globalstate={
    UserID:null,
    CalenderID:null,
    Period:null,

}

export default CalenderReducer=(prevState,action)=>{
    switch(action.type){
        case'create period':
        return{
            ...prevState,
            Period:action.Period,
        };
       case'set CalenderID':
       return{
            ...prevState,
            CalenderID:action.CalenderID,
       };
       case 'setID':
       return{
           ...prevState,
           UserID:action.UserID,
       }
        
    }
}