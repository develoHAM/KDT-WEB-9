import styled from 'styled-components';
import { useState, useEffect } from 'react';

const _Btn = styled.button`
	width: 300px;
	height: 300px;
	background-color: ${(props) => (props.isClicked ? 'red' : 'blue')};
	color: ${(props) => (props.isClicked ? 'black' : 'white')};
`;

export default function StyledComponent() {
	const [state, setState] = useState(true);
	const [isClicked, setIsClicked] = useState(false);

	return (
		<>
			<_Btn isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
				색상변경!
			</_Btn>
		</>
	);
}
