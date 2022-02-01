import React, { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../actions/posts';

import Post from './Post/Post';

const Posts = () => {
    const posts = useSelector((state) => state.posts)

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    
    return (
        !posts.length ? <h3>No posts found</h3> : (
            <>
                <h3>Posts</h3>
                <div>
                    {posts.map((post) => (
                        <div key={post._id}>
                            <Post post={post} currentId={currentId} setCurrentId={setCurrentId} />
                        </div>
                    ))}
                </div>
            </>
        )
    );
}

export default Posts;