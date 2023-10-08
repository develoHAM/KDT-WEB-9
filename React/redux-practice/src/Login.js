import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from './store';
import Cart from './Cart';

export default function Login() {
	const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
	const dispatch = useDispatch();
	console.log(isLoggedIn);
	return (
		<>
			{isLoggedIn ? (
				<>
					<button onClick={() => dispatch(loginAction.logout())}>로그아웃</button>
					<Cart />
				</>
			) : (
				<button onClick={() => dispatch(loginAction.login())}>로그인</button>
			)}
		</>
	);
}
