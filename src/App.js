import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Form from './components/Form/form';
import Posts from './components/Posts/posts';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div>
            <h1>Street Art</h1>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            <Posts currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
    );
}

export default App;