import { useContext } from 'react';
import ProductContext from './shopping-context';
import styled from 'styled-components';
import CartTotal from './CartTotal';

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

	const handleDelete = (id) => {
		const updatedList = products.map((product) => {
			if (product.id == id) {
				return { ...product, quantity: product.quantity - 1 };
			} else {
				return product;
			}
		});
		setProducts(updatedList);
	};
	return (
		<>
			<h4>My Cart</h4>
			<_Cart>
				{cartItems.map((product) => {
					return (
						<li key={product.id}>
							<div>{product.name}</div>
							<div>{product.price} KRW</div>
							<div>수량: {product.quantity}</div>
							<button onClick={() => handleDelete(product.id)}>장바구니에 삭제</button>
						</li>
					);
				})}
			</_Cart>
			<CartTotal>Total:</CartTotal>
		</>
	);
}
