import { useState } from 'react';

export default function ToDoList() {
	const [inputTask, setInputTask] = useState('');
	const [list, setList] = useState([]);
	const [taskCount, setTaskCount] = useState(0);

	const addTask = () => {
		if (taskCount >= 10) {
			alert('할 일이 너무 많아요!');
			return;
		}
		setTaskCount(taskCount + 1);

		setList([...list, { task: inputTask, checked: false }]);
	};

	const changeChecked = (e) => {
		const newList = list.map((task) => {
			if (task.task == e.target.value) {
				return { task: task.task, checked: e.target.checked };
			} else {
				return task;
			}
		});
		console.log(newList);
		setList(newList);
	};

	const deleteChecked = () => {
		const sortedList = list.filter((task) => {
			return !task.checked;
		});
		setList(sortedList);
		setTaskCount(taskCount - (10 - sortedList.length));
		console.log(10 - taskCount);
	};

	return (
		<>
			<input
				type='text'
				placeholder='할 일 입력...'
				value={inputTask}
				onChange={(e) => setInputTask(e.target.value)}
			/>
			<button type='button' onClick={addTask}>
				추가
			</button>
			<ul>
				{list.map((task, index) => {
					return (
						<li key={task + index}>
							<input
								type='checkbox'
								onChange={(e) => changeChecked(e)}
								id={task.task + index}
								value={task.task}
								checked={task.checked}
							/>
							<label htmlFor={task.task + index}>{task.task}</label>
						</li>
					);
				})}
			</ul>
			<button type='button' onClick={deleteChecked}>
				완료된 할 일 삭제
			</button>
		</>
	);
}
