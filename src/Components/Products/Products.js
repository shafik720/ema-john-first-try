import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
    
    
    let storeId = JSON.parse(localStorage.getItem('cart') || '[]');
    function handleAddToCart(element){
        let secondCart = [...cart,element]
        setCart(secondCart);
    
        // work on local storage
        storeId.push(element);
        localStorage.setItem('cart', JSON.stringify(storeId));
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;