import { createContext, useState } from 'react';

const ProductContext = createContext({
	products: [],
	setProducts: () => {},
});

export function ProductContextProvider({ children }) {
	const info = [
		{
			id: 1,
			name: '청바지',
			price: 80000,
			quantity: 0,
		},
		{
			id: 2,
			name: '니트',
			price: 5000,
			quantity: 0,
		},
		{
			id: 3,
			name: '노트북',
			price: 1000,
			quantity: 0,
		},
	];

	const [products, setProducts] = useState(info);

	return <ProductContext.Provider value={{ products, setProducts }}>{children}</ProductContext.Provider>;
}

export default ProductContext;
