import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
export default function createReducer() {
	const rootReducer = combineReducers({
		cart: cartReducer
	});
	return rootReducer;
}
