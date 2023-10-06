import { createSlice } from '@reduxjs/toolkit';

const initLogin = { isLogin: false };

const loginSlice = createSlice({
	name: 'login',
	initialState: initLogin,
	reducers: {
		login(state) {
			state.isLogin = true;
		},
		logout(state) {
			state.isLogin = false;
		},
	},
});

export const loginAction = loginSlice.actions;
export default loginSlice.reducer;
