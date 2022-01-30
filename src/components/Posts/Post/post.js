import React from 'react';
import EditForm from './editForm';

const Post = ({ post, currentId, setCurrentId }) => {
    return (
        <div className="border-padding">
            <img className="maxwidth" src={post.image} alt={ `${post.title} by ${post.artist}` }/>
            <h4>{post.title}</h4>
            <button onClick={() => setCurrentId(post._id) }>Edit</button>
            <button onClick={() => {} }>Delete</button>

            <EditForm currentId={currentId} setCurrentId={setCurrentId} />
        </div>
    );
}

export default Post;