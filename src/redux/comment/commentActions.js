export const ADD_COMMENT = 'ADD_COMMENT';




export const addComment= (comment)=>{

    console.log('addComment fireedd!!!');
    return{
        type:ADD_COMMENT,
        payload:comment,
    }
}