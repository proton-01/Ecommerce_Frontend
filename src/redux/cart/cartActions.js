

export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTAL= 'GET_TOTAL'; // done by useEffect hook in cart.jsx




export const addToCart = (item)=>{

    console.log("addToCart fireddd!!!!!");

    return {
        type : ADD_TO_CART,
        item
    }
}

export const increment = (id) =>{

    console.log("increment action fired")

    return {
        type: INCREMENT,
        payload:id,
    }
}

export const decrement = (id)=>{

    console.log("decrement func fireddd")

    return {
        type:DECREMENT,
        payload :id,
    }
}

export const removeItem = (id) => {
    console.log('removeItem fireddddd')

    return {
        type:REMOVE_ITEM,
        payload:id,
    }
}

export const clearCart = ()=>{
    console.log('CLEARcART fireddddd')
    return {
        type:CLEAR_CART,
    }
}