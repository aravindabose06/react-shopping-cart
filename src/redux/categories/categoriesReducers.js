import * as categoriesActions from './categoriesTypes'

const initialState = {
    loading: false,
    categories: [],
    error: ''
}

const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case categoriesActions.FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case categoriesActions.FETCH_CATEGORIES_SUCCESS:
            return {
                loading: false,
                categories: action.payload,
                error: ''
            }
        case categoriesActions.FETCH_CATEGORIES_FAILURE:
            return {
                loading: false,
                categories: [],
                error: action.payload
            }
        default: return state
    }
}

export default categoriesReducer