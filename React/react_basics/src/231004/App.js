import Form from '../13HookForm/Form';
import MyContext, { LanguageProvider } from '../14ContextAPI/store/lang-context.js';
// import React, { useState } from 'react';
import LanguageSelector from '../14ContextAPI/LangSelector.js';

export default function App() {
	// const [language, setLanguage] = useState('ko');

	return (
		<>
			<LanguageProvider>
				<LanguageSelector />
			</LanguageProvider>
			{/* <MyContext.Provider value={{ language: language, setLanguage: setLanguage }}>
			<LanguageSelector />
			<MyContext.Consumer>
					{(value) => {
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
					}}
				</MyContext.Consumer>
			</MyContext.Provider> */}
		</>
	);
}
