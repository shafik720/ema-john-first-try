import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for(let element of cart){
        total += element.price;
        shipping += element.shipping;
    }

    return (
        <div className="cart-div">
            <div className="cart-child-div">
                <h2>Order Summary </h2>
                <p>Product Added : {cart.length} </p>
                <p>Total Price: {total} </p>
                <p>Shipping Fee : {shipping} </p>
            </div>
        </div>
    );
};

export default Cart;