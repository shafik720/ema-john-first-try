import React from 'react';
import './Shop.css'

const Shop = (props) => {
    console.log(props);
    const{id, img, name, price, quantity, seller, ratings} = props.index;
    return (
        <div className="shop-card">
            <img src={img} alt=""/>
            <div className="product-details">
            <h4>Product Name : {name} </h4>
            <p>Price : {price} </p>
            <p>Seller : {seller} </p>
            <p>Ratings : {ratings} </p>
            </div>
        </div>
    );
};


export default Shop;