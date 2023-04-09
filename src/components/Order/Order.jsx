import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)


    const handelRemoveCart = id => {
        // console.log(id)
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }


    // console.log(savedCart)
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handelRemoveCart={handelRemoveCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                clearCart={clearCart}
                cart={cart} >
                   {/* common shared btn  */}
                    <Link to='/proceed' className='shared-btn' >
                        <button className='shared-link'>Procees Checkout</button>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;