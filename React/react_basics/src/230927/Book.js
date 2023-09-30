import { useParams, useOutletContext } from 'react-router-dom';

export default function Book() {
	const { id } = useParams();
	const obj = useOutletContext();
	console.log(id);
	console.log('obj', obj);
	return <div>Book {id}</div>;
}
