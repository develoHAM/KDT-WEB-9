import { useSelector, useDispatch } from 'react-redux';
import { cartAction } from './store';

const products = [
	{
		id: 1,
		name: '상품1',
		price: 1000,
	},
	{
		id: 2,
		name: '상품2',
		price: 10000,
	},
	{
		id: 3,
		name: '상품3',
		price: 100000,
	},
];

export default function ProductList() {
	const loginState = useSelector((state) => state.login.isLoggedIn);
	const dispatch = useDispatch();
	const addProduct = (product) => {
		console.log('addToCart', product);
		dispatch(cartAction.addToCart(product));
	};

	return (
		<>
			<h1>상품 목록</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<span>
							{product.name} : {product.price}원
						</span>
						{loginState && <button onClick={() => addProduct(product)}>담기</button>}
					</li>
				))}
			</ul>
		</>
	);
}
