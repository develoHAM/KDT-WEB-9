import { useCallback, useState } from 'react';

function ChildComponent({ onClick }) {
	// console.log('Child Component');

	return (
		<>
			<button onClick={onClick}>PLUS</button>
		</>
	);
}

export default function UseCallback() {
	const [count, setCount] = useState(0);
	const [inputValue, setInputValue] = useState('');

	//useCallback미사용
	const plusCount = () => {
		console.log('plusCount', count);
		setCount((prev) => prev + 1);
	};

	//useCallback사용
	const plusCountCallback = useCallback(() => {
		console.log('plusCountCallback', count);
		setCount((prev) => prev + 1);
	}, []);

	const onChange = (e) => {
		setInputValue(e.target.value);
		plusCountCallback();
	};

	return (
		<>
			<input value={inputValue} onChange={(e) => onChange(e)} />
			<ChildComponent onClick={plusCountCallback}></ChildComponent>
			<p>{count}</p>
		</>
	);
}
