import { useState, useMemo } from 'react';

export default function SelfStudyUseMemo() {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	const handleAdd1 = () => {
		setCount1((prev) => prev + 1);
	};

	const handleAdd2 = () => {
		setCount2((prev) => prev + 1);
	};

	const count1Squared = useMemo(() => {
		console.log('count1Squared', count1Squared);
		return count1 * count1;
	}, [count1]);

	// const count1Squared = count1 * count1;
	// console.log('count1Squared', count1Squared);

	return (
		<>
			<div>count1: {count1}</div>
			<div>count2: {count2}</div>
			<div>count1Squared: {count1Squared}</div>
			<br />
			<button type='button' onClick={handleAdd1}>
				Add count1
			</button>
			<button type='button' onClick={handleAdd2}>
				Add count2
			</button>
		</>
	);
}
