import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
export default function createReducer(injectedReducers = {}) {
	const rootReducer = combineReducers({
		cart: cartReducer,
		...injectedReducers
	});
	return rootReducer;
}
