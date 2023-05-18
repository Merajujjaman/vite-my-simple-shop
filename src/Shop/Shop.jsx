import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import Product from '../components/Product/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useLoaderData } from 'react-router-dom';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const { totalProducts } = useLoaderData()
    // console.log(totalProducts);

    // const itemsPerPage = 10 //TODO: make it dynamic
    const totalPages = Math.ceil(totalProducts / itemsPerPage)

    const pages = [...Array(totalPages).keys()]


    // useEffect(() => {
    //     fetch('http://localhost:4000/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/products?page=${currentPage}&limit=${itemsPerPage}`);

            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, [currentPage, itemsPerPage]);

    useEffect(() => {
        const storedCart = getShoppingCart()
        const ids = Object.keys(storedCart)
        fetch('http://localhost:4000/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(cardData => {
                const savedProduct = []
                //stap-1: id from the local storage
                for (const id in storedCart) {
                    //stap-2: get product from the state using id
                    const addedCart = cardData.find(product => product._id === id)
                    // stap-3: get quantity from the stored cart
                    if (addedCart) {
                        const quantity = storedCart[id]
                        addedCart.quantity = quantity;

                        //stap-4: add the product to the save cart
                        savedProduct.push(addedCart)
                    }
                }
                //stape-5: set the cart
                setCart(savedProduct);

            })


    }, [])

    const productAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id)
    }
    // console.log(cart)
    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    const options = [5, 10, 15, 20];
    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }

    return (
        <>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Product
                            key={product._id}
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
            <div className='pagination'>
                <p>{currentPage} and items per page{itemsPerPage}</p>
                {
                    pages.map(page => <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? 'selected' : ''}
                    >{page + 1}</button>)
                }

                <select value={itemsPerPage} onChange={handleSelectChange}>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Shop;