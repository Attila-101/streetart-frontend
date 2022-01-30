import axios from 'axios';

const url = 'http://localhost:3007/streetarts';

export const fetchPosts = () => axios.get(`${url}/get`);
export const createPost = (newPost) => axios.post(`${url}/add`, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/update/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/delete/${id}`)