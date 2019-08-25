import { createStore } from 'redux';

import createReducer from './rootReducer';
export default function configureStore() {
	return createStore(createReducer());
}
