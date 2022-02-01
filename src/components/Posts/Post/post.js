import React from 'react';
import { useDispatch } from 'react-redux';

import EditForm from './EditForm';
import { deletePost } from '../../../actions/posts';

const Post = ({ post, currentId, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <div className="border-padding">
            <img className="maxwidth" src={post.image} alt={ `${post.title} by ${post.artist}` }/>
            <h4>{post.title}</h4>
            <button onClick={() => setCurrentId(post._id) }>Edit</button>
            <button onClick={() => dispatch(deletePost(post._id)) }>Delete</button>

            <EditForm currentId={currentId} setCurrentId={setCurrentId} />
        </div>
    );
}

export default Post;