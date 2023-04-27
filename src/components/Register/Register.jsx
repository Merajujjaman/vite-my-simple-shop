import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { creatAccout } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        
        if (password.length < 8) {
            setError('Your password must have to be 8 charectar')
            return
        }

        else if (password !== confirm) {
            setError('Your password did not match')
            return
        }


        else {
            setError('')
            console.log(email, password, confirm)
        }

        //create account with email and password: 
        creatAccout(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Register Please</h1>
            <form onSubmit={handleRegister}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='your email address' required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='password' required />
                </div>

                <input className='submit-btn' type="submit" value="Register" />
            </form>
            <p><small>Aready have an account? <Link to='/login'>Login</Link></small></p>
            <p className='error-text'>{error}</p>
        </div>
    );
};

export default Register;