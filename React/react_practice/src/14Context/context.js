import React, { createContext, useState } from 'react';

const Context = createContext({
	theme: '',
	setTheme: () => {},
	language: '',
	setLanguage: () => {},
});

export function ContextProvider({ children }) {
	const [theme, setTheme] = useState('light');
	const [language, setLanguage] = useState('Korean');

	return <Context.Provider value={{ theme, setTheme, language, setLanguage }}>{children}</Context.Provider>;
}

export default Context;
