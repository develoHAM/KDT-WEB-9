import { useOutletContext } from 'react-router-dom';

export default function Comment() {
	const context = useOutletContext();
	return (
		<div>
			{context.comment.map((value, idx) => {
				return <div key={idx}>{value.text}</div>;
			})}
		</div>
	);
}
