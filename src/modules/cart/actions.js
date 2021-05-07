import * as Actions from './constants';

export const addToCart = ( product ) => {
    console.log('came to addtocart action')
      return {
        type: Actions.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (id) =>{
    return{
        type: Actions.REMOVE_ITEM_FROM_CART,
        payload: id
    }
}

export const updateCartQuantity = (id) =>{
    return {
        type: Actions.UPDATE_CART_QUANTITY,
        payload: id
    }
}
      
//add qt action
export const addQuantity=(id)=>{
    console.log('came to add action')
  
    return{
        type: Actions.ADD_QUANTITY,
        payload: id
    }
}

// subtract quantity

export const subtractQuantity = (id) => {
    console.log('came to sub quantity action')
    return{
        type: Actions.SUB_QUANTITY,
        payload: id
    }
}

