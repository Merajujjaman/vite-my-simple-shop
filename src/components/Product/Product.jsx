import React from 'react';
import './Product.css';

const Product = (prop) => {
    const { img, name, price, seller, ratings } = prop.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufacturer: {seller} </p>
                <p>Rating: {ratings} strar</p>
            </div>
        </div>
    );
};

export default Product;