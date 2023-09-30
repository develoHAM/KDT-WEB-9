import { Link, Outlet, useSearchParams } from 'react-router-dom';
export default function BookLayout() {
	const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
	const number = searchParams.get('n');
	return (
		<>
			<ul>
				<li>
					<Link to='/books/1'>Book 1</Link>
				</li>
				<li>
					<Link to='/books/2'>Book 2</Link>
				</li>
				<li>
					<Link to={`/books/${number}`}>Book {number}</Link>
				</li>
				<li>
					<Link to='/books/new'>New Book</Link>
				</li>
			</ul>
			<Outlet context={{ hello: 'world' }} />
			<input type='number' value={number} onChange={(e) => setSearchParams({ n: e.target.value })} />
		</>
	);
}
