import { Link, useSearchParams } from 'react-router-dom';

export const users = [
	{
		id: 1,
		name: '티모',
		comment: [
			{
				text: '하하항',
			},
		],
	},
	{
		id: 2,
		name: '야스오',
		comment: [
			{
				text: '하세기',
			},
		],
	},
	{
		id: 3,
		name: '신지드',
		comment: [
			{
				text: '섞고 돌리고',
			},
		],
	},
	{
		id: 4,
		name: '트런들',
		comment: [
			{
				text: '트럴?',
			},
		],
	},
];

export default function User() {
	//searchParams는 쿼리스트링 값을 가져오는것
	//setSearchParams는 쿼리스트링 값을 할당하는것
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams.get('mode'));
	// setTimeout(() => {
	// 	setSearchParams({ mode: 'Light' });
	// }, 5000);
	return (
		<div>
			<ul>
				{users.map((value) => {
					return (
						<li key={value.id}>
							<Link to={`/user/${value.id}`}>{value.name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
