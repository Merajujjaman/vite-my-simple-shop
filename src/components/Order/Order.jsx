import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData()
    const [products, setProducts] = useState(savedCart)
    const handelRemoveCart = id => {
        console.log(id)
        const remaining = products.filter(pd => pd.id !== id);
        setProducts(remaining);
        removeFromDb(id);
    }

    // console.log(savedCart)
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    products.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handelRemoveCart={handelRemoveCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={products}></Cart>
            </div>
        </div>
    );
};

export default Order;