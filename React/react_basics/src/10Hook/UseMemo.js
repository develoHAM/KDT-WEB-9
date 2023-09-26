import { useMemo, useState } from 'react';

export default function UseMemo() {
	const [count, setCount] = useState(0);
	const [inputValue, setInputValue] = useState('');

	//count가 변경될때만 실행, inputValue가 변경되어도 컴포넌트는 리랜더링 되지만, calc는 다시 계산되지 않는다
	//제공된 함수의 반환값을 기억하며, 의존성 배열의 값이(여기선 count) 변경될때만 해당 함수를 재실행
	const calc = useMemo(() => {
		console.log('calcs...');
		for (let i = 0; i < 10000; i++) {
			//i = i * 2;
		}
		return count * 2;
	}, [count]);

	// const calc = () => {
	// 	console.log('calcs...');
	// 	for (let i = 0; i < 10000; i++) {
	// 		//i = i * 2;
	// 	}
	// 	return count * 2;
	// };

	return (
		<>
			<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
			<button onClick={() => setCount(() => count + 1)}>PLUS</button>
			<p>count: {count}</p>
			<p>calc: {calc}</p>
		</>
	);
}
