import React, { useState, useEffect } from 'react'
import HeaderComponent from './HeaderComponent'
import CategoriesComponent from './CategoriesComponent'
import ProductsComponent from './ProductsComponent'
import CartComponent from './CartComponent'
import { fetchCategories, fetchProducts } from '../redux'
import { connect } from 'react-redux'

function MainComponent({ categoriesState, productsState, cartItems, fetchCategories, fetchProducts }) {

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [isCartShown, setIsCartShown] = useState(false)

    useEffect(() => {
        fetchCategories()
        fetchProducts()
    }, [])

    const changeCategory = currentCategoryId => {
        setSelectedCategory(currentCategoryId)
    }

    const toggleCart = (shown = !isCartShown) => {
        setIsCartShown(shown)
    }

    return (
        <div className="container-fluid m-0 p-0">
            <HeaderComponent isCartShown={isCartShown} toggleCart={toggleCart} noOfItems={cartItems.length} />
            {
                isCartShown ? ( <CartComponent cartItems={cartItems} /> ) :
                    (
                        <div className="d-flex" id="wrapper">
                            <CategoriesComponent categoriesState={categoriesState} changeCategory={changeCategory} />
                            <ProductsComponent productsState={productsState} selectedCategory={selectedCategory} cartItems={cartItems} />
                        </div>
                    )
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        categoriesState: state.categories,
        productsState: state.products,
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchProducts: () => dispatch(fetchProducts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)