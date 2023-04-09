import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handelRemoveCart }) => {
    // console.log(product)
    const { id, img, name, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="no photos avilable" />
            <div className='review-item-details'>
                <p className='pd-name'>{name}</p>
                <p>Prise:<span className='text-color'>${price}</span></p>
                <p>Quantity:<span className='text-color'>{quantity}</span></p>
            </div>
            <button className='delete-btn'
             onClick={() => handelRemoveCart(id)}>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}>
                </FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItem;