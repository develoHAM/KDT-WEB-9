import { useContext } from 'react';
import ProductContext from './shopping-context';

export default function CartItem({ product }) {
	const { products, setProducts } = useContext(ProductContext);

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
		<li key={product.id}>
			<div>{product.name}</div>
			<div>{product.price} KRW</div>
			<div>수량: {product.quantity}</div>
			<button onClick={() => handleDelete(product.id)}>장바구니에 삭제</button>
		</li>
	);
}
