import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { login, signup } from '../../actions/auth';

const initialState = { username: '', email: '', password: ''}

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log(formData);

        if (isSignup) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(login(formData, navigate))
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <h1>{isSignup ? 'Sign up' : 'Log in'}</h1>
                <div>
                    { isSignup && ( <label>Userame: <input type="text" name="username" label="username" onChange={handleChange} /></label> )}
                    <label>E-mail: <input type="email" name="email" label="email" onChange={handleChange} /></label>
                    <label>Password: <input type="password" name="password" label="password" onChange={handleChange} /></label>
                </div>
                <button type="submit">{isSignup ? 'Sign up' : 'Log in'}</button>
            </form>
                <button onClick={switchMode}>{ isSignup ? 'Have an account' : 'New User'}</button>
        </div>
    );
};


export default Auth;