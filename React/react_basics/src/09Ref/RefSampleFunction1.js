import { useRef } from 'react';

export default function RefSampleFunction1() {
	// 1. ref 객체 만들기
	const myInput = useRef();

	const handleFocus = () => {
		// 3. useRef()로 만든 객체의 current값에 focus() 적용
		myInput.current.focus();
	};
	return (
		<>
			<p>(함수형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
			{/* 2. 선택하고 싶은 DOM에 ref prop 설정 */}
			<input ref={myInput} />
			<button onClick={handleFocus}>focus</button>
		</>
	);
}
