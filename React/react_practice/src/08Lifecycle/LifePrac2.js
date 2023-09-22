import { useState, useEffect } from 'react';
import axios from 'axios';

export default function LifePrac2() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		//useEffect는 비동기함수를 직접적으로 지원하지 않음.
		//비동기 함수를 사용하려면 내부에 비동기함수를 정의하고 바로 호출

		const axiosUser = async () => {
			try {
				const result = await axios({
					method: 'GET',
					url: 'https://jsonplaceholder.typicode.com/users',
				});
				setUsers(result.data);
				setLoading(true);
			} catch (error) {
				console.log(error);
			}
		};
		axiosUser();

		return () => {
			console.log('연결 해제 완료');
		};
	}, []);

	useEffect(() => {
		console.log('유저 정보 업데이트', users.length);
	}, [users]);

	return (
		<div>
			{loading ? (
				<ul>
					{users.map((user) => {
						return (
							<li key={user.id}>
								{user.name} - {user.email}
							</li>
						);
					})}
				</ul>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}
