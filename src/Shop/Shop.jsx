import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import Product from '../components/Product/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const stordCart = getShoppingCart()
        const savedProduct = []
        //stap-1: id from the local storage
        for (const id in stordCart) {
            //stap-2: get product from the state using id
            const addedCart = products.find(product => product.id === id)
            // stap-3: get quantity from the stored cart
            if (addedCart) {
                const quantity = stordCart[id]
                addedCart.quantity = quantity;

                //stap-4: add the product to the save cart
                savedProduct.push(addedCart)
            }
        }
        //stape-5: set the cart
        setCart(savedProduct);
    }, [products])

    const productAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    // console.log(cart)
    const clearCart = ()=>{
        setCart([])
        deleteShoppingCart()
    } 


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        productAddToCart={productAddToCart}
                    ></Product>
                    
                    )
                }
            </div>
            <div className='cart-container'>
                <Cart 
                clearCart={clearCart}
                cart={cart}>
                     {/* common dymanic button */}
                    <Link to='/order' className='shared-btn' >
                        <button className='shared-link'>Review Order</button>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;