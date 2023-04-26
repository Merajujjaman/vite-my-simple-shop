import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login Please</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='your email address' required />
                </div>
        
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='password' required />
                </div>

                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-John <Link to='/register'>Create New Account</Link></small></p>
            
        </div>
    );
};

export default Login;