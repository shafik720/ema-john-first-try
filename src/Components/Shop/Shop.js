import React from 'react';
import './Shop.css'

const Shop = (props) => {
    console.log(props);
    const{id, img, name, price, quantity} = props.index;
    return (
        <div>
            <h2>Product Name : {name} </h2>
        </div>
    );
};


export default Shop;