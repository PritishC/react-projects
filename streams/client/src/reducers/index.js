import { combineReducers } from 'redux';
// Redux-form handles action creators, reducers and mapStateToProps related to forms for us.
import { reducer as formReducer } from 'redux-form';

import authReducer from './AuthReducer';
import streamReducer from './streamReducer';

export default combineReducers({
	auth: authReducer,
	streams: streamReducer,
	form: formReducer // redux-form requires us to attach the reducer to the key `form`.
});