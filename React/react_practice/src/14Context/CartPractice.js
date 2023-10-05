import { useContext } from 'react';
import CartContext from './store/cart-context';
import CartItemPractice from './CartItemPractice';

export default function CartPracice() {
	const { cart, setCart } = useContext(CartContext);

	//reduce(): 배열의 모든 요소를 더할때 사용. 하나의 결과를 반환

	const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
	return (
		<div>
			<h2>장바구니</h2>
			{cart.map((value) => (
				<CartItemPractice key={value.id} value={value} />
			))}
			<div>Total: {totalPrice}원</div>
		</div>
	);
}
