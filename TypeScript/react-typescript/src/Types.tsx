import React, { useState, useRef } from 'react';

interface Props {
	name?: string;
}
interface Data {
	name: string;
	age: number;
}

// component 제작 방법1
export default function Types({ name }: Props) {
	const [count, setCount] = useState<Data | null>();
	const myInput = useRef<HTMLInputElement>(null);
	const onclick = () => {
		myInput.current?.focus();
	};
	return (
		<>
			<h2>Hello {name}</h2>
			<input ref={myInput} />
			<button onClick={onclick}>FOCUS</button>
		</>
	);
}

// component 제작 방법2
// const Types: React.FC<Props> = ({ name }) => {
// 	return (
// 		<>
// 			<h2>Hello {name}</h2>
// 		</>
// 	);
// };

// export default Types;
