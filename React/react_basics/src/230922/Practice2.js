import axios from 'axios';
import { useState, useEffect } from 'react';

function MyList() {
	const [list, setList] = useState([]);

	useEffect(() => {
		// axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
		// 	setList(res.data);
		// 	console.log(res.data);
		// });
		(async function () {
			const res = await axios.get('https://jsonplaceholder.typicode.com/users');
			setList(res.data);
		})();
		return () => {
			console.log('연결해제 완료');
		};
	}, []);

	useEffect(() => {
		console.log(`유저 정보 업데이트 ${list.length}`);
	}, [list]);

	return (
		<>
			<ul>
				{list.length > 0 &&
					list.map((user) => {
						return (
							<li key={user.id}>
								{user.name} - {user.email}
							</li>
						);
					})}
			</ul>
		</>
	);
}

export default function Practice2() {
	const [mount, setMount] = useState(false);

	return (
		<>
			<h2>실습 2번</h2>
			<button type='button' onClick={() => setMount(!mount)}>
				Component Mount/Unmount
			</button>
			{mount && (
				<>
					<MyList></MyList>
				</>
			)}
		</>
	);
}
