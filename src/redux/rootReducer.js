import { combineReducers } from 'redux'
import categoriesReducer from './categories/categoriesReducers'
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
})

export default rootReducer