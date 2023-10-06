import { createStore } from 'redux';
// import { configureStore, createSlice } from '@reduxjs/toolkit';

//reducer
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
const reducer = (state = [], action) => {
	console.log(action);
	switch (action.type) {
		case ADD_TODO:
			const newTodo = { text: action.text, id: Date.now() };
			return [newTodo, ...state];

		case DELETE_TODO:
			return state.filter((el) => el.id !== action.id);

		default:
			return state;
	}
};

//store
const store = createStore(reducer);

export default store;
