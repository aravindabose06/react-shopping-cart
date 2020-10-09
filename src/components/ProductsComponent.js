import React from 'react'

function ProductsComponent({ products }) {

    return (
        <div id="page-content-wrapper" className="container">
            <div className="row">
                {
                    products.map(product => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img src="assets/images/sample1.png" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text"><strong>Category: </strong>
                                        {
                                            product.categories.map(pc => pc.name + ", ")
                                        }
                                    </p>
                                    <p className="card-text"><strong>Price: </strong> Rs.{product.price}</p>
                                    <a href="/" className="btn btn-primary">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsComponent
