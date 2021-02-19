export const globalstate={
    UserID:null,
    UserInfo:null,
}
export default profilereducer=(prevstate,action)=>{
    switch(action.type){
        case 'setsuserID':
            return{
                ...prevstate,
                UserID:action.UserID,
            };

        case 'setUserInfo':
            return{
                ...prevstate,
                UserInfo:action.UserInfo
            }
    }
}