import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Cart = ({cart,clearCart,children}) => {
    // const cart = (prop.cart)
    // console.log(prop.cart)
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // console.log(product.price)
        if(product.quantity===0){
            product.quantity = 1
        }
        total = total + product.price * product.quantity
            totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    }
    const tax = total * 5 / 100
    const totalCost = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h3>Cart</h3>
            <h4>Product Quantity: {quantity}</h4>
            <h4>Product Price: ${total}</h4>
            <h4>Shipping: ${totalShipping}</h4>
            <h4>Tax: ${tax.toFixed(2)} <span>(5% of Product)</span></h4>
            <h2>Total Price: ${totalCost.toFixed(2)}</h2>
            {/* ---------------button------- */}
            <p onClick={clearCart} className='clear-cart-btn'>
            <span>Clear Cart</span>
            <FontAwesomeIcon className='' icon={faTrashAlt}>
            </FontAwesomeIcon>
            </p>
            {children}
        </div>
    );
};

export default Cart;