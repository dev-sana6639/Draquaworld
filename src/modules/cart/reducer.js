import { fromJS } from 'immutable';
import * as Actions from './constants';

const initialState = {
    cart: [],
    total: 0,

}


const CartReducer = (state = initialState, action) => {



    switch (action.type) {
        case Actions.ADD_TO_CART:
            console.log('add cart reducer ')
            return state


        case Actions.ADD_TO_CART_SUCCESS:
            console.log('cart success reducer')
            let Cart = action.payload;
            let existedItem = state.cart.find(item => action.payload.id === item.id);

            if (existedItem) {
                existedItem.quantity += 1;
                return {
                    ...state,
                    total: state.total + existedItem.price
                }
            }

            Cart.quantity = 1;
            let NewTotal = state.total + Cart.price;
            return {
                ...state,
                cart: [...state.cart, Cart],
                total: NewTotal
            }




        case Actions.REMOVE_ITEM_FROM_CART_SUCCESS:
            console.log('came to remove item success')

            let itemToremove = state.cart.find(item => item.id === action.payload);
            let remainingItems = state.cart.filter(item => action.payload != item.id);
            NewTotal = state.total - (itemToremove.price * itemToremove.quantity);

            console.log('new tottal is is ')
            return {
                ...state,
                cart: remainingItems,
                total: NewTotal,
            }

        case Actions.ADD_QUANTITY_SUCCESS:

            let addeditem = state.cart.find(item => item.id === action.payload);
            console.log('added item is:')
            addeditem.quantity += 1;
            NewTotal = state.total + addeditem.price;
            return {
                ...state,
                total: NewTotal,
            }

        case Actions.SUB_QUANTITY_SUCCESS:

            let Itemtoremoveqty = state.cart.find(item => item.id === action.payload);
            console.log('item is')


            if (Itemtoremoveqty.quantity >= 1) {
                Itemtoremoveqty.quantity -= 1;
                NewTotal = state.total - Itemtoremoveqty.price

                return {
                    ...state,
                    total: NewTotal
                }
            }

            return {
                ...state,
                total: state.total
            }

        default:
            return state

    }
}
export default CartReducer;