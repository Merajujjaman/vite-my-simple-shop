import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (prop) => {
    const { img, name, price, seller, ratings } = prop.product
    const productAddToCart = prop.productAddToCart
    // console.log(prop)
    return (
        <div className='product'>
            <img src={img} alt="not avilable" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufacturer: {seller} </p>
                <p>Rating: {ratings} strar</p>
            </div>
            <button
                onClick={() => productAddToCart(prop.product)}
                title='click here to buy'
                className='cart-btn'>
                    Add to Cart 
                    <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;