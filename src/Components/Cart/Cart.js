import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    console.log(cart)
    let total = 0;
    for(let element of cart){
        total += element.price;
    }
    return (
        <div className="cart-div">
            <div className="cart-child-div">
                <h2>Order Summary </h2>
                <p>Product Added : {cart.length} </p>
                <p>Total Price: {total} </p>
            </div>
        </div>
    );
};

export default Cart;