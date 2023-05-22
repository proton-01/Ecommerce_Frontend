import { ADD_TO_CART ,INCREMENT,DECREMENT, REMOVE_ITEM ,CLEAR_CART ,GET_TOTAL} from "./cartActions";


const initialState = {
    carts :[],
    numberCarts :0,
    totalAmount: 0,

}



function CartReducer(state= initialState,action){

    switch(action.type){

        case ADD_TO_CART :
            if(state.numberCarts === 0){  // if there is no item added

                let cart ={
                    id : action.item.id,
                    quantity: 1,
                    img : action.item.img,
                    title : action.item.title,
                    price :action.item.p2,
                }
                state.carts.push(cart); // pushing the added item to storage ie (carts[])
            }else{

                let check = false;
                state.carts.map( (elem , key) =>{
                    if(elem.id === action.item.id){      // customer clicked on same item which  added before then just increase the quantity
                        state.carts[key].quantity ++;
                        check = true;
                    }
                } );

                if(!check){   // customer clicked on different item which is not added before

                    let new_cart ={
                        id : action.item.id,
                        quantity: 1,
                        img : action.item.img,
                        title : action.item.title,
                        price :action.item.p2,
                    }
                    state.carts.push(new_cart); 
                }
            }
           

        return {
            ...state,
            numberCarts : state.numberCarts +1 ,
        }

        case INCREMENT :

           const updatedItem = state.carts.map( (eachItem)=>{
                
            if(eachItem.id === action.payload){
                return { ...eachItem , quantity : eachItem.quantity +1 };
            }
            return eachItem;
           })

           return {
            ...state,
            numberCarts :state.numberCarts+1,
            carts :updatedItem,
           }
 

        case DECREMENT :
            
        const updatedItem2 = state.carts.map( (eachItem) =>{

            if(eachItem.id === action.payload){
                return { ...eachItem ,quantity :eachItem.quantity -1}
            }

            return eachItem
        }).filter((curElem) => curElem.quantity !== 0); // if specific item will go to 0 then remove it

        return {
            ...state,
            numberCarts : state.numberCarts -1,
            carts :updatedItem2,
        }


        case REMOVE_ITEM :

           return {
              ...state,
              carts : state.carts.filter( (eachItem) =>{
                   return eachItem.id !== action.payload
              }),
            //   numberCarts : state.carts.filter( (eachItem)=>{
                //  if(eachItem.id === action.payload) return state.numberCarts -eachItem.quantity;
                //  return state.numberCarts;
            //   })
           }

        
        case CLEAR_CART :
            
             return {
                ...state,
                carts : [],
                numberCarts : 0,
             }


        case GET_TOTAL:
            
          let { totalAmount } = state.carts.reduce(
            (accum, curVal) => {
              let { price, quantity } = curVal;
      
              let updatedTotalAmount = price * quantity;
              accum.totalAmount += updatedTotalAmount;
      
              return accum;
            },
            {
              totalAmount: 0,
            }
          );
          return { ...state, totalAmount };
        

        
             
         default :
            return state;
    }
   
}

export default CartReducer;