import { createStore } from 'redux';

export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';

const reducer = (state = [], action) => {
	// console.log(action);
	switch (action.type) {
		case ADD_CART:
			const { product } = action;
			const hasProduct = state.filter((item) => item.id == product.id);
			if (hasProduct.length == 0) {
				const addedQuantity = { ...product, quantity: product.quantity + 1 };
				return [...state, addedQuantity];
			} else {
				const newArray = state.map((item) => {
					if (item.id == product.id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
				return newArray;
			}
		case REMOVE_CART:
			const { id } = action;
			const newArray = state.map((item) => {
				if (item.id == id) {
					return { ...item, quantity: item.quantity - 1 };
				} else {
					return item;
				}
			});
			return newArray;
		default:
			return state;
	}
};

const CartStore = createStore(reducer);

export default CartStore;
