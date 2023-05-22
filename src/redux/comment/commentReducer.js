import{ADD_COMMENT} from "./commentActions";

const initialState ={
    comments:[],
    noOfComments:0,
}

const commentReducer=(state = initialState , action)=> {

    switch(action.type){

       case  ADD_COMMENT:
            let comment={
                text:action.payload,
            }
           state.comments.push(comment);

           return{
             ...state,
             noOfComments: state.noOfComments+1,
           }



        default:
                return state;
    }

  
}

export default commentReducer;