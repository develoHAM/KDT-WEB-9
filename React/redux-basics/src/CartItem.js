import { useSelector, useDispatch } from 'react-redux';
import { ADD_CART, REMOVE_CART } from './store/cart';

export default function CartItem({ item }) {
	const dispatch = useDispatch();

	return (
		<li key={item.id}>
			{item.name} | 수량: {item.quantity}
			<button onClick={() => dispatch({ type: REMOVE_CART, id: item.id })}>DEL</button>
		</li>
	);
}
