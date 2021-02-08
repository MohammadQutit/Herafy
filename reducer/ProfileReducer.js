export const globalstate={
    UserID:null,
}
export default profilereducer=(prevstate,action)=>{
    switch(action.type){
        case 'setsuserID':
            return{
                ...prevstate,
                UserID:action.UserID,
            };
    }
}