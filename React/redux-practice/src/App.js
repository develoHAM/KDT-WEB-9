import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import Login from './Login';

function App() {
	return (
		<Provider store={store}>
			<Login />
			<ProductList />
		</Provider>
	);
}

export default App;
