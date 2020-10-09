import React from 'react'

function HeaderComponent() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <a href="/#" className="navbar-brand">Shopping Cart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a href="/#" className="nav-link">Home</a>
                        </li>
                    </ul>
                    <a href="/#" className="btn btn-outline-secondary text-white ml-auto">Go to Cart</a>
                </div>
            </nav>
            <div className="jumbotron bg-secondary text-white mb-4">
                <div className="container-fluid">
                    <div className="">
                        <div className="col-12 col-sm-6">
                            <h1>Shopping Cart</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempora ratione dolorem eaque officia necessitatibus? Pariatur, quis perspiciatis minima dolorum expedita porro voluptatum quod deserunt doloremque veniam. Alias, minus adipisci!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent
