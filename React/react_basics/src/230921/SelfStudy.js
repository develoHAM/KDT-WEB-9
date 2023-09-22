import { useState } from 'react';

export default function TODO() {
	const [todoList, setTodoList] = useState([]);
	const [inputTodo, setInputTodo] = useState('');

	const addTodo = () => {
		const newTodo = {
			id: Date.now(),
			task: inputTodo,
			checked: false,
		};
		setTodoList([...todoList, newTodo]);
	};

	const checkTodo = (e, id) => {
		const newTodoList = todoList.map((todo) => {
			return todo.id === id ? { ...todo, checked: e.target.checked } : todo;
		});
		console.log(newTodoList);
		setTodoList(newTodoList);
	};

	const removeChecked = () => {
		const removedList = todoList.filter((todo) => {
			return !todo.checked;
		});
		setTodoList(removedList);
	};

	return (
		<>
			<input
				type='text'
				placeholder='할 일 입력...'
				value={inputTodo}
				onChange={(e) => setInputTodo(e.target.value)}></input>
			<button type='button' onClick={addTodo}>
				추가
			</button>
			<ul>
				{todoList.map((todo) => {
					return (
						<li key={todo.id}>
							<input type='checkbox' checked={todo.checked} onChange={(e) => checkTodo(e, todo.id)} />
							{todo.task}
						</li>
					);
				})}
			</ul>
			<button type='button' onClick={removeChecked}>
				완료된 애들 제거
			</button>
		</>
	);
}
