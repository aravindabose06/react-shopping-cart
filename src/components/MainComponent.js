import React from 'react'
import HeaderComponent from './HeaderComponent'
import CategoriesComponent from './CategoriesComponent'
import ProductsComponent from './ProductsComponent'
import { PRODUCTS } from '../shared/products'
import { CATEGORIES } from '../shared/categories'

function MainComponent() {

    return (
        <div className="container-fluid m-0 p-0">
            <HeaderComponent />
            <div className="d-flex" id="wrapper">
                <CategoriesComponent categories={CATEGORIES} changeCategory={changeCategory} />
                <ProductsComponent products={PRODUCTS} selectedCategory={selectedCategory} />
            </div>
        </div>
    )
}

export default MainComponent
