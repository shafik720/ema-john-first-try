import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    console.log(cart)
    return (
        <div className="cart-div">
            <div className="cart-child-div">
                <h2>Order Summary </h2>
                <p>Product Added : {cart.length} </p>
            </div>
        </div>
    );
};

export default Cart;