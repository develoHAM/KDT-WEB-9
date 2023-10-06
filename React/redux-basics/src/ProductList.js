import { useSelector, useDispatch } from 'react-redux';
import { ADD_CART, REMOVE_CART } from './store/cart';

const products = [
	{
		id: 1,
		name: '상품1',
		price: 1000,
		quantity: 0,
	},
	{
		id: 2,
		name: '상품2',
		price: 20000,
		quantity: 0,
	},
	{
		id: 3,
		name: '상품3',
		price: 300000,
		quantity: 0,
	},
];

export default function ProductList() {
	const cart = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>상품 리스트</h1>
			{products.map((product) => (
				<div key={product.id}>
					<span>
						{product.name} : {product.price}
					</span>
					<button onClick={() => dispatch({ type: ADD_CART, product })}>ADD TO CART</button>
				</div>
			))}
		</div>
	);
}
