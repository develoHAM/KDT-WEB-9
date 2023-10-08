import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCountState = [];
const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCountState,
	reducers: {
		addToCart(state, action) {
			const product = action.payload;
			const find = state.find((item) => item.id == product.id);
			if (find) {
				const productIndex = state.findIndex((item) => item.id == product.id);
				state[productIndex].quantity++;
				console.log('new quantity added', state);
			} else {
				product.quantity = 0;
				state.push({ ...product, quantity: product.quantity + 1 });
				console.log('new item added', state);
			}
		},
		removeFromCart(state, action) {
			const id = action.payload;
			const productIndex = state.findIndex((item) => item.id == id);
			if (state[productIndex].quantity == 1) {
				state.splice(productIndex, 1);
			} else {
				state[productIndex].quantity--;
			}
		},
	},
});

const initialLoginState = {
	isLoggedIn: false,
};
const loginSlice = createSlice({
	name: 'login',
	initialState: initialLoginState,
	reducers: {
		login(state) {
			console.log('login');
			state.isLoggedIn = true;
		},
		logout(state) {
			console.log('logout');
			state.isLoggedIn = false;
		},
	},
});

const store = configureStore({
	reducer: { cart: cartSlice.reducer, login: loginSlice.reducer },
});

export const cartAction = cartSlice.actions;
export const loginAction = loginSlice.actions;

export default store;
