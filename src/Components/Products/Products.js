import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const [cart,setCart] = useState([]);
    
    function handleAddToCart(element){
        // cart.push(element);
        let secondCart = [...cart,element]
        setCart(secondCart);
    }
    return (
        <div className="product-page">            
            <div className="product-container">
            <h2>Total Product Found : {products.length} </h2>
                <div className="product-container2">
                {
                products.map(index=><Shop
                    index = {index}
                    key = {index.id}
                    handleAddToCart = {handleAddToCart}
                ></Shop>)
            }
                </div>
            </div>
            <div className="cart-container">
                <h2>Product Added : {cart.length}</h2>
            </div>
        </div>
    );
};

export default Products;