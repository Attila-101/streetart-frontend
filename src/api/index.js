import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3007' });

const url = 'http://localhost:3007/posts/';

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`posts/${id}`);

export const logIn = (formData) => API.post('/api/signin', formData);
export const signUp = (formData) => API.post('/api/signup', formData);
