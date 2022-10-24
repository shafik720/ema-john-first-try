import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    // local  storage
    let storeId = JSON.parse(localStorage.getItem('cart') || '[]');

    let tax = 0;
    let grandTotal = 0;
    let total = 0;
    let shipping = 0;

    for(let element of storeId){
        total += element.price;
        shipping += element.shipping;
    }

    tax = parseFloat(total * 0.1);
    grandTotal = tax + shipping + total;

    // clear cart
    function clearStorage(){
        localStorage.removeItem('cart');
        let storeId = JSON.parse(localStorage.getItem('cart') || '[]');
    }
    
    return (
        <div className="cart-div">
            <div className="cart-child-div">
                <h2>Order Summary </h2>
                <p>Product Added : {storeId.length} </p>
                <p>Total Price: {total} </p>
                <p>Shipping Fee : {shipping} </p>
                <p>Tax : {tax.toFixed(2)} </p>
                <h4>Grand Total : $ {grandTotal}</h4>
                <button onClick={clearStorage} className="delete-btn">Clear All</button>
            </div>
        </div>
    );
};

export default Cart;