import { Outlet, RouterProvider } from 'react-router-dom';
import PropsPrac1 from './04Props/PropsPrac1';
import PropsPrac2 from './04Props/PropsPrac2';
import Message from './05Event/Message';
import StatePrac1 from './06State/StatePrac1';
import StatePrac2 from './06State/StatePrac2';
import StatePrac3 from './06State/StatePrac3';
import StatePrac4 from './06State/StatePrac4';
import UseStatePrac1 from './07UseState/UseStatePrac1';
import UseStatePrac2 from './07UseState/UseStatePrac2';
import UseStatePrac3 from './07UseState/UseStatePrac3';
import UseStatePrac4 from './07UseState/UseStatePrac4';
import UseStatePrac5 from './07UseState/UseStatePrac5';
import LifePrac1 from './08Lifecycle/LifePrac1';
import LifePrac2 from './08Lifecycle/LifePrac2';
import RefPrac1 from './09Ref/RefPrac1';
import RefPrac1ANS from './09Ref/RefPrac1ANS';
import RefPrac2 from './09Ref/RefPrac2';
import RefPrac2ANS from './09Ref/RefPrac2ANS';
import SignupForm from './10Hook/UseReducerPrac';
import Caterpillar from './11Style/Practice1';
import Practice2 from './11Style/Practice2';
import StyledComponent from './11Style/StyledComponent';
import StyledComponent2 from './11Style/StyledComponent2';
import RouterPrac1 from './12Router/Practice1';
import Router from './12Router/Practice1';
import FormPractice1 from './13Form/Practice1';
import { ContextProvider } from './14Context/context';
import ThemeSelector from './14Context/ThemeSelector';
import LanguageSelector from './14Context/LanguageSelector';
import { ProductContextProvider } from './14Context/shopping-context';
import ProductList from './14Context/ProductList';
import Cart from './14Context/Cart';
import ProductListPractice from './14Context/ProductListPractice';
import CartPracice from './14Context/CartPractice';
import { CartProvider } from './14Context/store/cart-context';

function App() {
	return (
		<>
			{/* Prop 실습 */}
			{/* <PropsPrac1 food="치킨" />
            <PropsPrac1 />
            <PropsPrac2
                title={"나의하루는 4시40분에 시작된다"}
                author={"김유진"}
                price={"13,600원"}
                type={"자기개발서"}
            /> */}
			{/* 이벤트 핸들링 실습 */}
			{/* <Message message={"Hello React"} /> */}
			{/* state 실습 */}
			{/* <StatePrac1 />
            <StatePrac2 />
            <StatePrac3 />
            <StatePrac4 /> */}
			{/* useState 실습 */}
			{/* <UseStatePrac1 />
            <UseStatePrac2 />
            <UseStatePrac3 />
            <UseStatePrac4 />
            <UseStatePrac5 /> */}
			{/* <LifePrac1></LifePrac1> */}
			{/* <LifePrac2 /> */}
			{/* <RefPrac1></RefPrac1> */}
			{/* <RefPrac1ANS></RefPrac1ANS> */}
			{/* <RefPrac2ANS /> */}
			{/* <SignupForm /> */}
			{/* <Caterpillar /> */}
			{/* <Practice2 /> */}
			{/* <StyledComponent /> */}
			{/* <StyledComponent2 /> */}
			{/* <RouterPrac1 /> */}
			{/* <RouterProvider router={Router} /> */}
			{/* <FormPractice1 /> */}

			{/* ContextAPI 실습1 */}
			{/* <ContextProvider>
				<ThemeSelector />
				<LanguageSelector />
			</ContextProvider> */}

			{/* ContextAPI 실습2 */}
			{/* <ProductContextProvider>
				<ProductList />
				<Cart />
			</ProductContextProvider> */}
			<CartProvider>
				<ProductListPractice />
				<CartPracice />
			</CartProvider>
		</>
	);
}

export default App;
