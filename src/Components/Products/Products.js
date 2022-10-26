import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Products.css'
const Products = () => {

    // sending products to shopping page
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    // getting value from local storage
    useEffect(()=>{
        let storedCart = getStoredCart();
        for(let id in storedCart){
            let addedProduct = products.find(product=>product.id === id);
            
        }
    },[products])

    // getting product from BUTTON CLICKING from product page
    const [cart,setCart] = useState([]);      
    function handleAddToCart(element){
        let secondCart = [...cart,element]
        setCart(secondCart);
    
        //--------- work on local storage
        addToDb(element.id);
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