import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

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
                {
                    user && <span className='user-text' >{user.email} <button onClick={handleLogOut}>Log Out</button></span> 
                }
            </div>

        </nav>
    );
};

export default Header;