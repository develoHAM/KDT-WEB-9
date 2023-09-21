import { useState } from 'react';

export default function Practice5() {
	const [todos, setTodos] = useState([]);
	const [inputTodo, setInputTodo] = useState('');

	const addTodo = () => {
		if (todos.length > 10) {
			alert('할 일이 너무 많아요!');
		}
		if (inputTodo !== '') {
			const newTodo = {
				id: Date.now(),
				text: inputTodo,
				checked: false,
			};
			setTodos([...todos, newTodo]);
			setInputTodo('');
		}
	};

	const toggleTodo = (e, id) => {
		console.log(id);
		setTodos(
			todos.map((todo) => {
				console.log(todo);
				return todo.id === id ? { ...todo, checked: e.target.checked } : todo;
			})
		);
	};

	const removeTodo = () => {
		const newTodo = todos.filter((todo) => {
			return !todo.checked;
		});
		setTodos(newTodo);
	};

	return (
		<>
			<input
				type='text'
				value={inputTodo}
				onChange={(e) => setInputTodo(e.target.value)}
				placeholder='할 일 입력...'
			/>
			<button onClick={addTodo}>추가</button>
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							<input type={'checkbox'} checked={todo.checked} onChange={(e) => toggleTodo(e, todo.id)} />
							{todo.text}
						</li>
					);
				})}
			</ul>
			<button onClick={removeTodo}>완료된 할 일 삭제</button>
		</>
	);
}
