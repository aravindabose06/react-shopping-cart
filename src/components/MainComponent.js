import React, { useState } from 'react'
import HeaderComponent from './HeaderComponent'
import CategoriesComponent from './CategoriesComponent'
import ProductsComponent from './ProductsComponent'
import { PRODUCTS } from '../shared/products'
import { CATEGORIES } from '../shared/categories'

function MainComponent() {

    const [selectedCategory, setSelectedCategory] = useState(null)

    const changeCategory = changedCategoryId => {
        setSelectedCategory(changedCategoryId)
    }

    const selectedProducts = selectedCategory ?
        PRODUCTS.filter(product => {
            for (const category in product.categories) {
                if (product.categories[category].id === selectedCategory) return true
            }
        }) : PRODUCTS

    return (
        <div className="container-fluid m-0 p-0">
            <HeaderComponent />
            <div className="d-flex" id="wrapper">
                <CategoriesComponent categories={CATEGORIES} changeCategory={changeCategory} />
                <ProductsComponent products={selectedProducts} />
            </div>
        </div>
    )
}

export default MainComponent
