import * as categoriesActions from './categoriesTypes'
import axios from 'axios'

export const fetchCategoriesRequest = () => {
    return {
        type: categoriesActions.FETCH_CATEGORIES_REQUEST
    }
}

export const fetchCategoriesSuccess = categories => {
    return {
        type: categoriesActions.FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export const fetchCategoriesFailure = error => {
    return {
        type: categoriesActions.FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}

export const fetchCategories = () => dispatch => {
    dispatch(fetchCategoriesRequest())
    axios.get('https://gorest.co.in/public-api/categories')
        .then(response => {
            dispatch(fetchCategoriesSuccess(response.data.data))
        })
        .catch(error => {
            dispatch(fetchCategoriesFailure(error.message))
        })
}