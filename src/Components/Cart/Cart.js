import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let tax = 0;
    let grandTotal = 0;
    let total = 0;
    let shipping = 0;
    for(let element of cart){
        total += element.price;
        shipping += element.shipping;
    }

    tax = parseFloat(total * 0.1);
    grandTotal = tax + shipping + total;


    // local  storage
    let storeId = JSON.parse(localStorage.getItem('cart') || '[]');
    storeId.forEach(index=>console.log(index));
    // console.log(storeId);
    return (
        <div className="cart-div">
            <div className="cart-child-div">
                <h2>Order Summary </h2>
                <p>Product Added : {cart.length} </p>
                <p>Total Price: {total} </p>
                <p>Shipping Fee : {shipping} </p>
                <p>Tax : {tax.toFixed(2)} </p>
                <h4>Grand Total : $ {grandTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;