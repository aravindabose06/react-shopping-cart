import React from 'react'
import { addItem } from '../redux'
import { connect } from 'react-redux'

function ProductsComponent({ productsState, selectedCategory, addItem, cartItems }) {

    const selectedProducts = selectedCategory ? productsState.products.filter(product => {
        for(const category of product.categories) {
            if(category.id === selectedCategory) return true
        }
    }) : productsState.products

    return (
        <div id="page-content-wrapper" className="container">
            <div className="row">
                {
                    productsState.loading ? ( <div>Loading...</div> ) :
                    productsState.error ? ( <div>Error Occurred :(</div> ) :
                    selectedProducts.length > 0 ? selectedProducts.map(product => {
                    const cartCheck = cartItems.some(item => item.name === product.name)
                    return (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img src="assets/images/sample1.png" alt="Sample product image" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text"><strong>Category: </strong>
                                        {
                                            product.categories.map(pc => pc.name + ", ")
                                        }
                                    </p>
                                    <p className="card-text"><strong>Price: </strong> Rs.{parseInt(product.price)}</p>
                                    <button onClick={e => {
                                            e.stopPropagation() 
                                            return cartCheck ? null : addItem(product)
                                        }} className="btn btn-primary">{ cartCheck ? <>Added To Cart</> : <>Add to Cart</>}</button>
                                </div>
                            </div>
                        </div>
                    )}) : ( <div>There aren't any products in this category. Check back later.</div> )
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(ProductsComponent)