import styled from 'styled-components';
import { useState, useEffect } from 'react';

const _Input = styled.input`
	padding: 10px;
	margin-right: 10px;
`;

const _Button = styled.button`
	padding: 10px 15px;
	background-color: skyblue;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: 700;

	&:hover {
		opacity: 0.8;
	}
`;

const _Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const _List = styled.ul`
	width: 300px;
	height: 200px;
	overflow-y: scroll;
	padding: 0;
`;

const _ListItem = styled.li`
	padding: 5px;
	border-bottom: 1px solid lightgrey;
	list-style: none;
`;

// const _Container = styled.div`
// 	width: 50vw;
// 	height: 80vh;
// 	display: flex;
// 	flex-direction: column;
// `;

// const _AddToList = styled.textarea`
// 	height: 50px;
// `;

// const _AddToListWrapper = styled.div`
// 	display: flex;
// 	justify-content: center;
// `;

// const _AddButton = styled.button`
// 	height: 50px;
// 	color: black;
// 	background-color: skyblue;
// `;

// const _ListContainer = styled.div`
// 	max-height: 200px;
// 	overflow-y: scroll;
// `;

// const _Todo = styled.div`
// 	text-align: center;
// 	height: 20px;
// 	border-bottom: 1px solid grey;
// `;

export default function StyledComponent2() {
	// const [inputList, setInputList] = useState('');
	// const [list, setList] = useState([]);

	// const submitList = () => {
	// 	setList([...list, inputList]);
	// };

	const [inputValue, setInputValue] = useState('');
	const [list, setList] = useState([]);

	const onClick = () => {
		if (inputValue !== '') {
			setList([...list, inputValue]);
			setInputValue('');
		}
	};

	return (
		<>
			{/* <_Container>
				<_AddToListWrapper>
					<_AddToList value={inputList} onChange={(e) => setInputList(e.target.value)}></_AddToList>
					<_AddButton onClick={submitList}>Add</_AddButton>
				</_AddToListWrapper>
				<_ListContainer>
					{list.map((todo) => {
						return <_Todo>{todo}</_Todo>;
					})}
				</_ListContainer>
			</_Container> */}
			<_Container>
				<div>
					<_Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
					<_Button onClick={onClick}>Add</_Button>
				</div>
				<_List>
					{list.map((value, idx) => {
						return <_ListItem key={idx}>{value}</_ListItem>;
					})}
				</_List>
			</_Container>
		</>
	);
}
