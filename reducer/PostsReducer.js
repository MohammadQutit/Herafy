export const initialglobalstate={
    UserID:null,
    PosterID:null,
    Userposts:null,

}
export default PostsReducer=(prevState,action)=>{
    switch(action.type){
        case'choosePost':
        return{
            ...prevState,
            PosterID:action.PosterID,
        };
        case'SetUserID':
        return{
            ...prevState,
            UserID:action.UserID
        }
        case'SetText':
        return{
            ...prevState,
            Userposts:action.Userposts
        }
        
    }
}