import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Student() {
	const { name } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const keyword = searchParams.get('name');
	const navigate = useNavigate();
	const onClick = () => {
		navigate('/');
	};
	return (
		<>
			<div>
				학생 이름은 <span style={{ color: 'green' }}>{name}</span> 입니다.
				{keyword !== null && (
					<div>
						실제이름은 <span style={{ color: 'red' }}>{keyword}</span> 입니다.
					</div>
				)}
			</div>
			<button onClick={onClick}>뒤로가기</button>
		</>
	);
}
