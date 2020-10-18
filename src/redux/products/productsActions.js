import * as productsActions from './productsTypes'
import axios from 'axios'

export const fetchProductsRequest = () => {
    return {
        type: productsActions.FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = products => {
    return {
        type: productsActions.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsFailure = error => {
    return {
        type: productsActions.FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchProducts = () => dispatch => {
    dispatch(fetchProductsRequest())
    axios.get('https://gorest.co.in/public-api/products')
        .then(response => {
            const products = response.data.data.map(prod => {
                return {
                    ...prod,
                    stock: 10
                }
            })
            dispatch(fetchProductsSuccess(products))
        })
        .catch(error => {
            dispatch(fetchProductsFailure(error.message))
        })
}