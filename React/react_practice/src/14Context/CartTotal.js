import { useContext } from 'react';
import ProductContext from './shopping-context';

export default function CartTotal() {
	const { products, setProducts } = useContext(ProductContext);
	const cartItems = products.filter((product) => {
		return product.quantity > 0;
	});
	const total = cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
	return <h3>Total: {total}</h3>;
}
