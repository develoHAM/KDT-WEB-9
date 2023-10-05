import { useContext } from 'react';
import ProductContext from './shopping-context';
import styled from 'styled-components';
import CartTotal from './CartTotal';
import CartItem from './CartItem';

const _Cart = styled.ul`
	border: 1px solid black;
	width: 30%;
	height: 50vh;
`;

export default function Cart() {
	const { products, setProducts } = useContext(ProductContext);
	const cartItems = products.filter((product) => {
		return product.quantity > 0;
	});
	console.log('cartItems', cartItems);

	return (
		<>
			<h4>My Cart</h4>
			<_Cart>
				{cartItems.map((product) => (
					<CartItem product={product} />
				))}
			</_Cart>
			<CartTotal>Total:</CartTotal>
		</>
	);
}
