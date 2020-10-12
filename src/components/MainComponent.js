import React, { useState } from 'react'
import HeaderComponent from './HeaderComponent'
import CategoriesComponent from './CategoriesComponent'
import ProductsComponent from './ProductsComponent'
import { PRODUCTS } from '../shared/products'
import { CATEGORIES } from '../shared/categories'
import CartComponent from './CartComponent'

function MainComponent() {

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [isCartShown, setIsCartShown] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const products = PRODUCTS.map(prod => {
        return {
            ...prod,
            stock: 10
        }
    })

    const selectedProducts = selectedCategory ?
    products.filter(product => {
        for (const category in product.categories) {
            if (product.categories[category].id === selectedCategory) return true
        }
    }) : products

    const addToCart = (addedItem) => {
        const newCartItem = { ...addedItem, quantity: 1, initialPrice: addedItem.price}
        setCartItems([
            ...cartItems,
            newCartItem
        ])
    }

    const removeFromCart = removedItem => {
        const newCartItems = [...cartItems]
        const index = cartItems.indexOf(removedItem)
        newCartItems.splice(index, 1)
        setCartItems(newCartItems)
    }

    const incrementQuantity = (itemToIncrement) => {
        const newCart = cartItems.map(item => {
            if(item.id === itemToIncrement) {
                item.quantity = item.quantity + 1
                item.price = parseInt(item.price) + parseInt(item.initialPrice)
            }
            return item
        })
        setCartItems(newCart)
    }

    const decrementQuantity = (itemToIncrement) => {
        const newCart = cartItems.map(item => {
            if(item.id === itemToIncrement && item.quantity > 1) {
                item.quantity = item.quantity - 1
                item.price = parseInt(item.price) - parseInt(item.initialPrice)
            }
            return item
        })
        setCartItems(newCart)
    }

    const purchase = () => {
        alert("Thank you for your purchase.")
        setCartItems([])
    }


    const changeCategory = changedCategoryId => {
        setSelectedCategory(changedCategoryId)
    }

    const toggleCart = (shown = !isCartShown) => {
        setIsCartShown(shown)
    }

    return (
        <div className="container-fluid m-0 p-0">
            <HeaderComponent isCartShown={isCartShown} toggleCart={toggleCart} noOfItems={cartItems.length} />
            {
                isCartShown ? ( <CartComponent cartItems={cartItems} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} purchase={purchase} /> ) : 
                (
                    <div className="d-flex" id="wrapper">
                        <CategoriesComponent categories={CATEGORIES} changeCategory={changeCategory} />
                        <ProductsComponent products={selectedProducts} addToCart={addToCart} cartItems={cartItems} />
                    </div>
                )
            }
        </div>
    )
}

export default MainComponent
