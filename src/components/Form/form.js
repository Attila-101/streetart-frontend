import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createPost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: '', artist: '', year: '', image: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    return (
        <>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <h2>New post</h2>
                <label>Title:
                    <input type="text" name="title" label="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                </label>
                <label>Artist:
                    <input type="text" name="artist" label="artist" value={postData.artist} onChange={(e) => setPostData({ ...postData, artist: e.target.value })}/>
                </label>
                <label>Year:
                    <input type="text" name="year" label="year" value={postData.year} onChange={(e) => setPostData({ ...postData, year: e.target.value })}/>
                </label>
                <label>Image:
                    <input type="text" name="image" label="image" value={postData.image} onChange={(e) => setPostData({ ...postData, image: e.target.value })}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Form;