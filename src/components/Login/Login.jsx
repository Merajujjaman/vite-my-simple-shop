import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.Log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                setSuccess('Welcome to the Ema-John')
                form.reset()
            })
            .catch(error => {
                console.log(error);
                setSuccess('')
                setError(error.message)
            })
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login Please</h1>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='your email address' required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='password' required />
                </div>

                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-John <Link to='/register'>Create New Account</Link></small></p>
            <p className='success-text'>{success}</p>
            <p className='error-text'>{error}</p>
        </div>
    );
};

export default Login;