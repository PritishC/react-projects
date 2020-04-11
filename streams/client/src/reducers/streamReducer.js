import {
	CREATE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
	EDIT_STREAM,
	DELETE_STREAM
} from '../actions/types';

import _ from 'lodash';

/* We choose to set state to an empty object as opposed to an array (of streams),
 * because the syntax to update and produce a new array at the same time looks like -:
 * state.map(obj => if obj.id === id ? newObj : obj)
 * while the syntax to update and produce a new object at the same time looks like -:
 * { ...state, [id]: newObj }
 * The [id]: newObj portion is known as key interpolation syntax. It's a dynamic way
 * of adding a new key or updating the key to the state object.
 * Note: We have to produce a new array/object for state on return because otherwise,
 * the react-redux system will not detect any state change and will not re-render component.
 */
export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAMS:
			// mapKeys takes an array of records and returns an object, with `id` as the key.
			return { ...state, ..._.mapKeys(action.payload, 'id') }
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return _.omit(state, action.payload.id);
		default:
			return state;
	}
};