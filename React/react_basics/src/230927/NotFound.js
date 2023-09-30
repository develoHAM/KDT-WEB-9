import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();
	useEffect(() => {
		console.log('hi');
		setTimeout(() => {
			navigate('/', { state: 'error not page' });
		}, 1000);
	}, []);
	return (
		<>
			<h1>NOT FOUND</h1>
		</>
	);
}
