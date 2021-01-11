export const initialglobalstate={
    UserID:null,
    PosterID:null,

}
export default PostsReducer=(prevState,action)=>{
    switch(action.type){
        case'choosePost':
        return{
            ...prevState,
            PosterID:action.PosterID,
        }
        
    }
}