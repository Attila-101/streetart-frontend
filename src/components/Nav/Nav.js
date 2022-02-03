import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";

const Nav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');

        setUser(null);
    };

    console.log(user);
     useEffect(() => {

        const token = user?.token;
        
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

    return (
        <div className="grey-bg">
            <Link to="/"><h1>Street Art</h1></Link>
            <div>
                {user ? (
                    <>
                    <h6>{user.result.username} is logged in</h6>
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