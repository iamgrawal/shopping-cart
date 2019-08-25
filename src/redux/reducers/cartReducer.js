import ACTIONS from '../actions/cartActions';
const initialState = {
	quantity: {},
	price: {},
	instructions: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.Types.UPDATE_ITEM_CART:
			const { item, type } = action.payload;
			let quantity = { ...state.quantity };
			state.price[item.itemName] = item.price;
			if (type === '+1')
				quantity[item.itemName] = quantity[item.itemName]
					? quantity[item.itemName] + 1
					: 1;
			else if (type === '-1') {
				if (quantity[item.itemName] && quantity[item.itemName] > 0) {
					if (quantity[item.itemName] === 1) delete quantity[item.itemName];
					else quantity[item.itemName] = quantity[item.itemName] - 1;
				}
			} else if (!isNaN(type)) {
				if (quantity[item.itemName] && Number(type) < 0)
					delete quantity[item.itemName];
				else quantity[item.itemName] = Number(type);
			}
			return { ...state, ...{ quantity } };
		case ACTIONS.Types.CLEAR_CART:
			return {
				quantity: {},
				price: {},
				instructions: ''
			};
		case ACTIONS.Types.UPDATE_INSTRUCTIONS:
			return { ...state, instructions: action.payload };
		default:
			return state;
	}
};
