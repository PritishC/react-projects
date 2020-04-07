import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Alternate solution to memoization: overfetching
// Action creator that returns action creators - delegate to fetchPosts or fetchUsers as needed.
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	// Wait for fetchPosts() inner function to finish calling the API. 
	await dispatch(fetchPosts());

	/*
	const userIds = _.uniq(_.map(getState().posts, 'userId'));
	// Don't care about waiting for each user to be fetched, so no await needed.
	userIds.forEach(id => dispatch(fetchUser(id)));
	*/

	// lodash's chain executes the whole chain of methods only if value() is called.
	_.chain(getState().posts)
		.map('userId')
		.uniq()
		.forEach(id => dispatch(fetchUser(id)))
		.value();
};

// ES2015 syntax for a function that returns a function => =>
// Also, redux-thunk syntax for action creators that have async-await syntax.
// The inner function will be invoked by the thunk middleware and it will return an action object.
// Args: dispatch, getState and extraArgument
export const fetchPosts = () => async dispatch => {
	// Can't just run this request. Actions must be plain objects. Use custom middleware for async actions.
	// const response = await jsonPlaceholder.get('/posts');

	const response = await jsonPlaceholder.get('/posts');

	dispatch({
		type: 'FETCH_POSTS', payload: response.data
	});
};

export const fetchUser = (id) => async dispatch => {
	const response = await jsonPlaceholder.get('/users/' + id);

	dispatch({
		type: 'FETCH_USER', payload: response.data
	});
};

// Memoized solution -:
/*
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
	// This will run the request only once for a unique set of arguments.
	// If called again, the memoized function merely returns the cached result.
	const response = await jsonPlaceholder.get('/users/' + id);

	dispatch({
		type: 'FETCH_USER', payload: response.data
	});
});
*/