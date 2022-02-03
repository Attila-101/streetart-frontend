import * as api from '../api';

// Action Creators

// Get posts
export const getPosts = (setErrorHandler) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        dispatch({
            type:'FETCH_FAIL',
            payload: error.message
        })
        setErrorHandler({
            hasError:true,
            message:error.message
        })
    }
}

// Add post
export const createPost = (post, navigate,setErrorHandler) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });

        navigate('/');
    } catch (error) {
        dispatch({
            type:'CREATE_FAIL',
            payload: error.response.data.message
        })
        setErrorHandler({
            hasError:true,
            message:error.response.data.message
        });
    }
}

// Update post
export const updatePost = (id, post,setErrorHandler) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        dispatch({
            type:'UPDATE_FAIL',
            payload: error.response.data.message
        })
        setErrorHandler({
            hasError:true,
            message:error.response.data.message
        })
    }
}

// Delete post
export const deletePost = (id,setErrorHandler) => async (dispatch) => {
    
    try {
        await api.deletePost(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        dispatch({
            type:'DELETE_FAIL',
            payload: error.message
        })
        setErrorHandler({
            hasError:true,
            message:error
        })
    }
}

// Like post 
export const likePost = (id,setErrorHandler) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: 'UPDATE', payload: data });
        
    } catch (error) {
        dispatch({
            type:'LIKE_FAIL',
            payload: error.response.data.message
        })
        setErrorHandler({
            hasError:true,
            message:error.response.data.message
        })
    }


}