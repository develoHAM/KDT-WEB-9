import { useContext } from 'react';
import CartContext from './store/cart-context';

export default function CartItemPractice({ value }) {
	const { cart, setCart } = useContext(CartContext);

	const removeCart = (id) => {
		setCart(cart.filter((element) => element.id !== id));
	};

	return (
		<div key={value.id}>
			<span>
				{value.name} : {value.price}원
			</span>
			<button onClick={() => removeCart(value.id)}>제거</button>
		</div>
	);
}
