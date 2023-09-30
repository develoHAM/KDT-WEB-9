import { useParams, Link, Outlet } from 'react-router-dom';
import { users } from './User';

export default function UserDetail() {
	//Route에 /user/:userid
	const { userid } = useParams();
	console.log(users);
	console.log(userid);

	return (
		<div>
			<div>
				사용자 {userid}는 {users[Number(userid) - 1].name} 입니다.
			</div>
			<Link to={'comment'}>comment</Link>
			<Outlet context={{ comment: users[Number(userid) - 1].comment }} />
		</div>
	);
}
