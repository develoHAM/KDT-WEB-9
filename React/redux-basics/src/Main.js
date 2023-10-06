import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO, DELETE_TODO } from './store/todo';

export default function Main() {
	const [text, setText] = useState('');

	//useSelector(): 리덕스의 store의 state를 조회
	//인자로 콜백함수, 콜백함수의 매개변수로 state를 받을 수 있음.
	//자동으로 subscribe를 하고 있기 때문에 데이터가 변형되면 component가 재렌더링 됨.
	const todos = useSelector((state) => state);

	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ADD_TODO, text: text });
		setText('');
	};

	const deleteTodo = (id) => {
		dispatch({ type: DELETE_TODO, id: id });
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<h1>To Dos</h1>
				<input value={text} onChange={(e) => setText(e.target.value)} />
				<button>ADD</button>
				<ul>
					{todos.map((todo) => (
						<li key={todo.id} id={todo.id}>
							{todo.text}
							<button onClick={() => deleteTodo(todo.id)}>DEL</button>
						</li>
					))}
				</ul>
			</form>
		</div>
	);
}
