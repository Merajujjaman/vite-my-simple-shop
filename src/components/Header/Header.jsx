import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="My Shop" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/review ">Review</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
            
        </nav>
    );
};

export default Header;