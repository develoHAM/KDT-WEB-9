import styled from 'styled-components';
import { useState, useEffect } from 'react';

const _Btn = styled.button`
	width: 300px;
	height: 300px;
	background-color: ${(props) => (props.a ? 'red' : 'blue')};
	color: ${(props) => (props.a ? 'black' : 'white')};
`;

export default function StyledComponent() {
	const [state, setState] = useState(true);

	return (
		<>
			<_Btn a={state} onClick={() => setState(!state)}>
				색상변경!
			</_Btn>
		</>
	);
}
