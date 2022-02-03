import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { updatePost } from '../../../actions/posts';

const EditForm = ({currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: '', artist: '', year: '', image: ''
    });
    const [errorHandler, setErrorHandler] = useState({
        hasError: false,
        message: "",
      });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
 
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post)
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`click on ${currentId}`);
        dispatch(updatePost(currentId, postData,setErrorHandler));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Edit post</h2>
                <label>Title:
                    <input type="text" name="title" label="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default EditForm;