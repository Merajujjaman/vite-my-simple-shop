import React from 'react';
import './Cart.css'
const Cart = (prop) => {
    const cart = (prop.cart)
    // console.log(cart)
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        // console.log(product.price)
        total = total + product.price;
        totalShipping = totalShipping + product.shipping
    }
    const tax = total * 5 / 100
    const totalCost = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h3>Cart</h3>
            <h4>Product Quantity: {cart.length}</h4>
            <h4>Product Price: ${total}</h4>
            <h4>Shipping: ${totalShipping}</h4>
            <h4>Tax: ${tax.toFixed(2)} <span>(5% of Product)</span></h4>
            <h2>Total Price: ${totalCost.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;