import * as cartActions from './cartTypes'

export const addItem = item => {
    return {
        type: cartActions.ADD_ITEM,
        payload: {...item, quantity: 1, initialPrice: item.price}
    }
}

export const removeItem = item => {
    return {
        type: cartActions.REMOVE_ITEM,
        payload: item
    }
}

export const incrementQuantity = item => {
    return {
        type: cartActions.INCREMENT_QUANTITY,
        payload: item
    }
}

export const decrementQuantity = item => {
    return {
        type: cartActions.DECREMENT_QUANTITY,
        payload: item
    }
}

export const clearCart = () => {
    return {
        type: cartActions.CLEAR_CART
    }
}