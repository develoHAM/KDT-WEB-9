import MyContext from './store/lang-context';
import { useContext } from 'react';

export default function LanguageSelector() {
	const value = useContext(MyContext);

	return (
		<div>
			<h2>현재 선택된 언어: {value.language}</h2>
			<select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
				<option value='ko'>한국어</option>
				<option value='en'>영어</option>
				<option value='jp'>일본어</option>
			</select>
		</div>
	);

	//첫번째 방법
	// return (
	// 	<MyContext.Consumer>
	// 		{(value) => (
	// 			<div>
	// 				<h2>현재 선택된 언어: {value.language}</h2>
	// 				<select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
	// 					<option value='ko'>한국어</option>
	// 					<option value='en'>영어</option>
	// 					<option value='jp'>일본어</option>
	// 				</select>
	// 			</div>
	// 		)}
	// 	</MyContext.Consumer>
	// );
}
