import React from 'react'

function HeaderComponent({ isCartShown, toggleCart, noOfItems }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <a style={{cursor: "pointer"}} onClick={() => toggleCart(false)} className="navbar-brand">Shopping Cart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a style={{cursor: "pointer"}} onClick={() => toggleCart(false)} className="nav-link">Home</a>
                        </li>
                    </ul>
                    <a style={{cursor: "pointer"}} onClick={() => toggleCart()} className="nav-link pl-0 text-white"> { isCartShown ? (<>Go Back</>) : (<>Go to Cart <span className="badge badge-danger">{noOfItems}</span></>) }</a>
                </div>
            </nav>
            { 
                isCartShown ? null : 
                (<div className="jumbotron jumbotron-fluid bg-secondary text-white mb-4">
                    <div className="container-fluid">
                        <div className="">
                            <div className="col-12 col-sm-6">
                                <h1>Shopping Cart</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempora ratione dolorem eaque officia necessitatibus? Pariatur, quis perspiciatis minima dolorum expedita porro voluptatum quod deserunt doloremque veniam. Alias, minus adipisci!</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}

export default HeaderComponent
