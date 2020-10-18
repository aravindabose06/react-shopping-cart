import * as cartActions from './cartTypes'

const initialState = {
    cartItems: [],
    totalAmount: 0
} 

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case cartActions.ADD_ITEM:
            console.log(action.payload)
            return {
                cartItems: [...state.cartItems, action.payload],
                totalAmount: state.totalAmount + parseInt(action.payload.initialPrice)
            }
        case cartActions.REMOVE_ITEM:
            return {
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
                totalAmount: state.totalAmount - parseInt(action.payload.initialPrice)
            }
        case cartActions.INCREMENT_QUANTITY:
            const incrementedItem = {...action.payload, quantity: action.payload.quantity + 1, price: parseInt(action.payload.price) + parseInt(action.payload.initialPrice)}
            return {
                cartItems: state.cartItems.map(item => item.id === incrementedItem.id ? incrementedItem : item),
                totalAmount: state.totalAmount + parseInt(action.payload.initialPrice)
            }
        case cartActions.DECREMENT_QUANTITY:
            const decrementedItem = {...action.payload, quantity: action.payload.quantity - 1, price: parseInt(action.payload.price) - parseInt(action.payload.initialPrice)}
            return {
                cartItems: state.cartItems.map(item => item.id === decrementedItem.id ? decrementedItem : item),
                totalAmount: state.totalAmount - parseInt(action.payload.initialPrice)
            }
        case cartActions.CLEAR_CART:
            return initialState
        default: return state
    }
}

export default cartReducer