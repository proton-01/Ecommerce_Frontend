

const initialState ={
    users :[],
    loggedInUser :false,
}

const AuthReducer = (state = initialState , action)=>{
    switch(action.type){


        case "REGISTER":
            state.loggedInUser= true;
            return {
                ...state,
                users :[...state.users , action.payload]
            }

        case "LOGIN":
            state.loggedInUser= true;
            
            return{
                ...state,
                // user :action.payload
            }

        case "LOGOUT":
            state.loggedInUser= false;

                return{
                    ...state,
                    // user :null
            }    

            default:
                return state;
    }
}

export default AuthReducer;  