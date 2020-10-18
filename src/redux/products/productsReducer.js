import * as productsActions from './productsTypes'

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case productsActions.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case productsActions.FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        case productsActions.FETCH_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: [],
                error: action.payload
            }
        default: return state
    }
}

export default productsReducer