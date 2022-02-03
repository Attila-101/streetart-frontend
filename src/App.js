import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Auth from './components/Auth/Auth';
import Posts from './components/Posts/Posts';

const App = () => {
    return (
        <BrowserRouter> 
            <div>
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Posts />} />
                    <Route exact path="/auth" element={<Auth />} />
                    <Route exact path="/form" element={<Form />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;