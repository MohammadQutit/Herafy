export const globalstate={
    UserID:null,
    PeriodID:null,
    Starttime:null,
    Endtime:null
}

export default CalenderReducer=(prevState,action)=>{
    switch(action.type){
       case 'setID':
       return{
           ...prevState,
           UserID:action.UserID,
       }
       case 'setPeriod':
       return{
           ...prevState,
           PeriodID:action.PeriodID,
       }
       case 'set':
       return{
           ...prevState,
           Starttime:action.Starttime,
           Endtime:action.Endtime,
       }
        
    }
}