import { useState } from 'react';

export default function ChangeColor() {
	const [color, setColor] = useState('black');
	const [colorName, setColorName] = useState('검정색');
	const changeToRed = () => {
		setColor('red');
		setColorName('빨간색');
	};
	const changeToBlue = () => {
		setColor('blue');
		setColorName('파란색');
	};
	return (
		<>
			<h1>useState 실습 1</h1>
			<h3 style={{ color: color }}>
				<span>{colorName} 글씨</span>
			</h3>
			<button onClick={changeToRed}>빨간색</button>
			<button onClick={changeToBlue}>파란색</button>
		</>
	);
}
