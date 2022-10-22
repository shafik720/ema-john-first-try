import React from 'react';
import './Shop.css'

const Shop = (props) => {
    const{id, img, name, price, quantity, seller, ratings} = props.index;
    return (
        <div className="shop-card">
            <img src={img} alt=""/>
            <div className="product-details">
            <h4>Product Name : {name} </h4>
            <p className='priceTag'>Price : ${price} </p>
            <p>Seller : {seller} </p>
            <p>Ratings : {ratings} star</p>
            </div>
            <div onClick={()=>props.handleAddToCart(props.index)} className="product-bottom">
                <p>Add To Cart</p>
            </div>
        </div>
    );
};


export default Shop;