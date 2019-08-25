import { createStore } from 'redux';

import createReducer from './rootReducer';
export default function configureStore(initialState = {}) {
	return createStore(createReducer, initialState);
}
