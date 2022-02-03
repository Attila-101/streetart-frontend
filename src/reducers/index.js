import { combineReducers } from "redux";

import posts from './posts';
import auth from './auth';
// import authErrorReducer from './authError'

export default combineReducers({ posts, auth 
// ,authErrorReducer
});