import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
// import store from './store/todo';
import CartStore from './store/cart';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

// // Redux 실습1 풀이
// import { createStore } from 'redux';

// const input = document.querySelector('input');
// const form = document.querySelector('form');
// const ul = document.querySelector('ul');

// //reducer
// const ADD_TODO = 'ADD_TODO';
// const DELETE_TODO = 'DELETE_TODO';
// const reducer = (state = [], action) => {
// 	console.log(action);
// 	switch (action.type) {
// 		case ADD_TODO:
// 			const newTodo = { text: action.text, id: Date.now() };
// 			return [newTodo, ...state];

// 		case DELETE_TODO:
// 			return state.filter((el) => el.id !== action.id);

// 		default:
// 			return state;
// 	}
// };

// //store
// const store = createStore(reducer);

// const removeTodo = (event) => {
// 	event.preventDefault();
// 	store.dispatch({ type: DELETE_TODO, id: Number(event.target.parentNode.id) });
// };

// store.subscribe(() => {
// 	const todos = store.getState();
// 	ul.innerHTML = '';
// 	todos.map((value) => {
// 		const li = document.createElement('li');
// 		const btn = document.createElement('button');
// 		btn.innerText = '삭제';
// 		btn.addEventListener('click', removeTodo);
// 		li.id = value.id;
// 		li.textContent = value.text;
// 		li.appendChild(btn);
// 		ul.appendChild(li);
// 	});
// });

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	store.dispatch({ type: ADD_TODO, text: input.value });
// 	input.value = '';
// });

// // Redux 실습1
// /*
// import { createStore } from 'redux';
// const addbtn = document.querySelector('#Add');
// const input = document.querySelector('#inputTodo');
// const todolist = document.querySelector('#todoList');

// const ADD_TODO = 'ADD_TODO';
// const DELETE_TODO = 'DELETE_TODO';

// const todoReducer = (state = [], action) => {
// 	switch (action.type) {
// 		case ADD_TODO:
// 			return [...state, { value: action.value, id: action.id }];

// 		case DELETE_TODO:
// 			return state.filter((todo) => todo.id != action.id);

// 		default:
// 			return state;
// 	}
// };

// const TodoStore = createStore(todoReducer);

// TodoStore.subscribe(() => {
// 	todolist.innerHTML = '';
// 	const list = TodoStore.getState();
// 	console.log(list);
// 	for (const value of list) {
// 		const element = document.createElement('li');
// 		const btn = document.createElement('button');
// 		element.textContent = value.value;
// 		btn.textContent = 'DEL';
// 		btn.addEventListener('click', () => TodoStore.dispatch({ type: DELETE_TODO, id: value.id }));
// 		element.appendChild(btn);
// 		todolist.append(element);
// 		input.value = '';
// 	}
// });

// addbtn.addEventListener('click', () => {
// 	const id = Date.now();
// 	console.log(id);
// 	TodoStore.dispatch({ type: ADD_TODO, value: input.value, id: id });
// });

// input.addEventListener('keypress', (e) => {
// 	console.log('keypress');
// 	if (e.key == 'Enter') {
// 		const id = Date.now();
// 		console.log(id);
// 		TodoStore.dispatch({ type: ADD_TODO, value: input.value, id: id });
// 	}
// });
// */

// // addbtn.addEventListener('click', () => {
// // 	TodoStore.dispatch({ type: DELETE_TODO, value: input.value });
// // });

// // //// Redux를 이용한 숫자 증가 및 감소 코드
// // import { createStore } from 'redux';

// // const add = document.querySelector('#add');
// // const minus = document.querySelector('#minus');
// // const num = document.querySelector('#num');

// // const ADD = 'ADD';
// // const MINUS = 'MINUS';

// // const countReducer = (state = 0, action) => {
// // 	switch (action.type) {
// // 		case ADD:
// // 			return state + 1;
// // 		case MINUS:
// // 			return state - 1;
// // 		default:
// // 			return state;
// // 	}
// // };

// // //store는 데이터를 넣는곳 (저장소)
// // //createStore(): store생성, parameter로 reducer 함수가 필수로 들어간다
// // const countStore = createStore(countReducer);
// // console.log('countStore', countStore);

// // //subscribe(): 데이터와 저장소가 변경될때마다 함수를 실행
// // countStore.subscribe(() => {
// // 	//getState(): 저장소에서 최신상태의 값을 반환한다
// // 	num.textContent = countStore.getState();
// // });

// // add.addEventListener('click', () => {
// // 	countStore.dispatch({ type: ADD });
// // });

// // minus.addEventListener('click', () => {
// // 	countStore.dispatch({ type: MINUS });
// // });

// //// JavaScript를 이용한 숫자 증가 및 감소 코드
// /*
// let count = 0;

// add.addEventListener('click', () => {
// 	count = count + 1;
// 	num.textContent = count;
// });

// minus.addEventListener('click', () => {
// 	count = count - 1;
// 	num.textContent = count;
// });
// */
