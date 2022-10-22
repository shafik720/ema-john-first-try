import React, { useEffect, useState } from 'react';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="product-page">            
            <div className="product-container">
            <h2>Total Product Found : {products.length} </h2>
            </div>
            <div className="cart-container">
                <h2>Cart Container</h2>
            </div>
        </div>
    );
};

export default Products;