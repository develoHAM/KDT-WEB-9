import { useContext } from 'react';
import ProductContext from './shopping-context';

export default function ProductList() {
	const { products, setProducts } = useContext(ProductContext);

	const handleAdd = (id) => {
		const updatedList = products.map((product) => {
			if (product.id == id) {
				return { ...product, quantity: product.quantity + 1 };
			} else {
				return product;
			}
		});
		setProducts(updatedList);
	};

	return (
		<>
			<h4>Products</h4>
			<ul>
				{products.map((product) => {
					return (
						<li key={product.id}>
							<div>{product.name}</div>
							<div>{product.price} KRW</div>
							<button onClick={() => handleAdd(product.id)}>장바구니에 추가하기</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}
