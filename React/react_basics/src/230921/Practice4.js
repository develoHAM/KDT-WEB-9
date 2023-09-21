import { useState } from 'react';

export default function BoardSearch() {
	const [inputWriter, setInputWriter] = useState('');
	const [inputTitle, setInputTitle] = useState('');
	const [comments, setComments] = useState([]);
	const [inputSearch, setInputSearch] = useState('');
	const [searchType, setSearchType] = useState('title');
	const [results, setResults] = useState([]);

	const addComment = () => {
		setComments([...comments, { writer: inputWriter, title: inputTitle }]);
	};

	const searchComment = () => {
		const result = comments.filter((comment) => {
			return comment[searchType].includes(inputSearch);
		});
		setResults(result);
	};

	return (
		<>
			<form>
				<label htmlFor='writer'>작성자 :</label>
				<input type='text' id='writer' value={inputWriter} onChange={(e) => setInputWriter(e.target.value)} />
				<label htmlFor='title'>제목 :</label>
				<input type='text' id='title' value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
				<button type='button' onClick={addComment}>
					작성
				</button>
			</form>
			<form>
				<select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
					<option value='writer'>작성자</option>
					<option value='title'>제목</option>
				</select>
				<input type='text' placeholder='검색어' onChange={(e) => setInputSearch(e.target.value)} />
				<button type='button' onClick={searchComment}>
					검색
				</button>
			</form>
			<table border={1} cellSpacing={0}>
				<thead>
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>작성자</th>
					</tr>
				</thead>
				<tbody>
					{comments.map((comment, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{comment.title}</td>
								<td>{comment.writer}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<h2>검색결과</h2>
			<table border={1} cellSpacing={0}>
				<thead>
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>작성자</th>
					</tr>
				</thead>
				<tbody>
					{results.map((comment, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{comment.title}</td>
								<td>{comment.writer}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
