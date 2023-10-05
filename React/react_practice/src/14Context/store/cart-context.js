import { createContext, useState } from 'react';

//context
const CartContext = createContext({ cart: [], setCart: () => {} });

//provider component
export function CartProvider(props) {
	const [cart, setCart] = useState([]);
	return <CartContext.Provider value={{ cart, setCart }}>{props.children}</CartContext.Provider>;
}

export default CartContext;
