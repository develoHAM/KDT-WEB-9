import { Outlet, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Header from '../12Router/Header';
import Router from '../12Router/Router';
import Home from '../12Router/Home';
import BookList from './BookList';
import Book from './Book';
import NewBook from './NewBook';
import BookLayout from './BookLayout';
import BookRoutes from './BookRoutes';
import NotFound from './NotFound';
export default function App() {
	const location = useLocation();
	console.log(location);
	return (
		<>
			{/* 방법1 */}
			{/* <Router /> */}
			{/* 방법2 */}
			{/* <Header />
	 	<Outlet /> */}
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/books'>Books</NavLink>
					</li>
				</ul>
			</nav>
			{location.state}
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/books/*' element={<BookRoutes />}></Route> */}
				<Route path='/books' element={<BookLayout />}>
					<Route index element={<BookList />} />
					<Route path=':id' element={<Book />} />
					<Route path='new' element={<NewBook />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}
