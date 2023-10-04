import React, { createContext, useState } from 'react';

//Context생성
//createContext(): Provider와 Consumer 두개의 React Component를 반환
const MyContext = createContext({
	language: '',
	abc: 0,
	setLanguage: () => {},
});

//provider
export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState('ko');

	return <MyContext.Provider value={{ language: language, setLanguage: setLanguage }}>{children}</MyContext.Provider>;
}

export default MyContext;
