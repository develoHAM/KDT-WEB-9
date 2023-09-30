import { BrowserRouter, Routes, Route, createBrowserRouter, Outlet } from 'react-router-dom';
import Main from './Main';
import Student from './Student';

// export default function RouterPrac1() {
// 	return (
// 		<>
// 			<BrowserRouter>
// 				<Routes>
// 					<Route path='/' element={<Main />} />
// 					<Route path='/student/:name' element={<Student />} />
// 				</Routes>
// 			</BrowserRouter>
// 		</>
// 	);
// }

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/student',
		element: <Outlet />,
		children: [
			{
				path: ':name',
				element: <Student />,
			},
		],
	},
	// {
	// 	path: '/student/:name',
	// 	element: <Student />,
	// },
]);

export default Router;
