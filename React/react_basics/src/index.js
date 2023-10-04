import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, BrowserRouter } from 'react-router-dom';

// import App from './230919/App';
// import App from './230920/App';
// import App from './230921/App';
// import App from './230922/App';
// import App from './230925/App';
// import App from './230926/App';
// import App from './230927/App';
// import Router from './12Router/Router';
import App from './231004/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		{/* <RouterProvider router={Router} /> */}
		{/* <BrowserRouter>
			<App></App>
		</BrowserRouter> */}
	</React.StrictMode>
);
