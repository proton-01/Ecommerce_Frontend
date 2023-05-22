import{combineReducers, createStore} from "redux";

import CartReducer from "./cart/cartReducer";
import AuthReducer from "./auth/authReducer";
import commentReducer from "./comment/commentReducer";


     // code when we are not using "redux-persist" to store state after refresh
const rootReducer = combineReducers(  // not we have to call like "state.cart.anyting" instead of just "state.anything"
    {
        auth:AuthReducer,
        cart:CartReducer,
        comment:commentReducer,
    }
)

const store = createStore( rootReducer );
export default store;

     // code when we are using "redux-persist" to store state after refresh
     
// import {persistStore ,persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig ={
//     key:'persist-key',
//     storage
// }

// const rootReducer = combineReducers(  // not we have to call like "state.cart.anyting" instead of just "state.anything"
//     {
//         auth:AuthReducer,
//         cart:CartReducer,
//         comment:commentReducer,
//     }
// )

// const persistedResucer = persistReducer(persistConfig,rootReducer);

// const store = createStore( persistedResucer );
// const persistedStore =persistStore(store);

// export default store;
// export {persistedStore} ;