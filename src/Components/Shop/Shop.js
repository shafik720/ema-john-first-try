import React from 'react';
import './Shop.css'

const Shop = (props) => {
    console.log(props);
    const{id, img, name, price, quantity} = props.index;
    return (
        <div className="shop-card">
            <img src={img} alt=""/>
        </div>
    );
};


export default Shop;