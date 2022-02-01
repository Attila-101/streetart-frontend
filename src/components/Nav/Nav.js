import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";

const Nav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    //For testing purposes until we implement JWT
    const [user, setUser] = useState(1);

    const logout = () => {
        console.log('log out')
        dispatch({ type: 'LOGOUT' });
        navigate('/');

        setUser(null);
    };

    /*
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    console.log(user);
     useEffect(() => {

        const token = user?.token;

        //JWT...
        
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]); */

    return (
        <div className="grey-bg">
            <Link to="/"><h1>Street Art</h1></Link>
            <div>
                {user ? (
                    <>
                    <h6>User logged in</h6>
                    <Link to="/form"><button>Add new</button></Link>
                    <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <Link to="/auth"><button>Login</button></Link>
                )}
            </div>
        </div>
    );
};


export default Nav;