import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import usersReducer from './usersReducer';

export default combineReducers({
	posts: PostReducer,
	users: usersReducer
});