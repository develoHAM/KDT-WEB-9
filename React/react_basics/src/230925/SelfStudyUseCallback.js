import { useEffect, useState, useCallback } from 'react';

export default function SelfStudyUseCallback() {
	const [number, setNumber] = useState(0);
	const [toggle, setToggle] = useState(true);

	const someFunc = () => {
		console.log(`someFunc: number: ${number}`);
		return;
	};

	// const someFunc = useCallback(() => {
	// 	console.log(`someFunc: number: ${number}`);
	// 	return;
	// }, [number]);

	useEffect(() => {
		console.log('someFunction이 변경되었습니다.');
	}, [someFunc]);

	return (
		<>
			<div>
				<input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
				<button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
				<br />
				<button onClick={someFunc}>someFunc</button>
			</div>
		</>
	);
}
