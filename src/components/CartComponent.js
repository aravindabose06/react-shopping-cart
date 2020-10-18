import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { removeItem, incrementQuantity, decrementQuantity, clearCart } from '../redux/cart/cartActions'

function CartComponent({ cartItems, removeItem, incrementQuantity, decrementQuantity, totalAmount, clearCart }) {

    return cartItems.length === 0 ? 
        ( <div className="container">
            <div className="row justify-content-center">
                <div className="cart-empty-text">
                    <h3>Your cart is empty</h3>
                    <p>Looks like you haven't added anything to your cart yet</p>
                </div>
                <img className="image-responsive" className="cart-empty-img" height={500} src="assets/images/empty_cart_illustration.png" alt="Empty cart illustration"/>
            </div>
        </div> ) : (
        <div className="container">
            <table className="table table-active text-center mt-4">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(item => {
                            return (
                            <tr key={item.id}>
                                <td><img width={75} height={75} src="assets/images/sample1.png" alt="Cart Item"/></td>
                                <td>{item.name}</td>
                                <td> <button disabled={item.quantity <= 1} onClick={() => decrementQuantity(item)} className="btn btn-secondary btn-sm">-</button> {item.quantity} <button onClick={() => incrementQuantity(item)} disabled={item.quantity >= item.stock} className="btn btn-secondary btn-sm">+</button></td>
                                <td>Rs.{parseInt(item.price)}</td>
                                <td><button onClick={() => removeItem(item)} className="btn btn-danger">Remove</button></td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
            <div className="row offset-sm-6">
                <div className="col-md-3 offset-sm-1">
                    <h4>Total: </h4>
                </div>
                <div className="col-md">
                    <h4>Rs.{totalAmount}</h4>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-5">
                <button onClick={() => {
                    alert("Thank you for your purchase.")
                    clearCart()
                    }} className="btn btn-primary btn-lg">Purchase</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalAmount: state.cart.totalAmount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: (item) => dispatch(removeItem(item)),
        incrementQuantity: (item) => dispatch(incrementQuantity(item)),
        decrementQuantity: (item) => dispatch(decrementQuantity(item)),
        clearCart: () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent)