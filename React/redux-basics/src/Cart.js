import { useSelector, useDispatch } from 'react-redux';
import { ADD_CART, REMOVE_CART } from './store/cart';
import CartItem from './CartItem';

export default function Cart() {
	const items = useSelector((state) => state).filter((product) => product.quantity > 0);
	console.log(items);
	const total = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>My Cart</h1>
			<ul>
				{items.map((item) => (
					<CartItem item={item} />
				))}
			</ul>
			<h2>Total: {total}</h2>
		</div>
	);
}
