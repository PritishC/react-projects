import jsonPlaceholder from '../apis/jsonPlaceholder';

// ES2015 syntax for a function that returns a function => =>
// Also, redux-thunk syntax for action creators that have async-await syntax.
// The inner function will be invoked by the thunk middleware and it will return an action object.
// Args: dispatch, getState and extraArgument
export const fetchPosts = () => async dispatch => {
	// Can't just run this request. Actions must be plain objects. Use custom middleware for async actions.
	// const response = await jsonPlaceholder.get('/posts');

	const response = await jsonPlaceholder.get('/posts');

	dispatch({
		type: 'FETCH_POSTS', payload: response
	});
};