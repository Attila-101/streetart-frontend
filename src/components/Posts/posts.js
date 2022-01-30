import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/post';

const Posts = ({ currentId, setCurrentId }) => {
    const posts = useSelector((state) => state.posts)

    console.log(posts);
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