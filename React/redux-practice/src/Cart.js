import { useSelector, useDispatch } from 'react-redux';
import { cartAction } from './store';

export default function Cart() {
	const cart = useSelector((state) => state.cart);
	console.log('cart', cart);
	const dispatch = useDispatch();

	const addProduct = (product) => {
		console.log('addToCart', product);
		dispatch(cartAction.addToCart(product));
	};

	const removeProduct = (id) => {
		dispatch(cartAction.removeFromCart(id));
	};
	return (
		<>
			<h2>내 장바구니</h2>
			{cart.map((product) => (
				<div key={product.id}>
					<span>
						{product.name} : {product.price * product.quantity}원 |
					</span>
					<button onClick={() => addProduct(product)}>추가</button>
					<span>{product.quantity}개</span>
					<button onClick={() => removeProduct(product.id)}>빼기</button>
				</div>
			))}
			<h4>Total: {cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)}</h4>
		</>
	);
}
