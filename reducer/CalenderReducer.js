export const globalstate={
    UserID:null,
    Starttime:null,
    Endtime:null,
    Periods:null
}

export default CalenderReducer=(prevState,action)=>{
    switch(action.type){
       case 'setID':
       return{
           ...prevState,
           UserID:action.UserID,
       }
       case 'set':
       return{
           ...prevState,
           Starttime:action.Starttime,
           Endtime:action.Endtime,
       }
       case 'setperiod':
           return{
               ...prevState,
               Periods:action.Periods,
           }
        
    }
}