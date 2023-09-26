import styled from 'styled-components';
import { useState, useEffect } from 'react';

const _Container = styled.div`
	width: 50vw;
	height: 80vh;
	display: flex;
	flex-direction: column;
`;

const _AddToList = styled.textarea`
	height: 50px;
`;

const _AddToListWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const _AddButton = styled.button`
	height: 50px;
	color: black;
	background-color: skyblue;
`;

const _ListContainer = styled.div`
	max-height: 200px;
	overflow-y: scroll;
`;

const _Todo = styled.div`
	text-align: center;
	height: 20px;
	border-bottom: 1px solid grey;
`;

export default function StyledComponent2() {
	const [inputList, setInputList] = useState('');
	const [list, setList] = useState([]);

	const submitList = () => {
		setList([...list, inputList]);
	};

	return (
		<_Container>
			<_AddToListWrapper>
				<_AddToList value={inputList} onChange={(e) => setInputList(e.target.value)}></_AddToList>
				<_AddButton onClick={submitList}>Add</_AddButton>
			</_AddToListWrapper>
			<_ListContainer>
				{list.map((todo) => {
					return <_Todo>{todo}</_Todo>;
				})}
			</_ListContainer>
		</_Container>
	);
}
