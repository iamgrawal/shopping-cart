const Types = {
	UPDATE_ITEM_CART: 'UPDATE_ITEM_CART',
	CLEAR_CART: 'CLEAR_CART',
	UPDATE_INSTRUCTIONS: 'UPDATE_INSTRUCTIONS'
};

const updateItem = (item, type) => {
	return {
		type: Types.UPDATE_ITEM_CART,
		payload: { item, type }
	};
};

const clearCart = () => {
	return {
		type: Types.CLEAR_CART,
		payload: null
	};
};

const updateInstructions = text => {
	return {
		type: Types.UPDATE_INSTRUCTIONS,
		payload: text
	};
};

export default { Types, updateItem, clearCart, updateInstructions };
