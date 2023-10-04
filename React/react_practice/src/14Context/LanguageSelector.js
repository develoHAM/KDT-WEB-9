import { useContext, useState } from 'react';
import Context from './context';

export default function LanguageSelector() {
	const { language, setLanguage, theme, setTheme } = useContext(Context);

	return (
		<div
			style={{
				backgroundColor: theme === 'light' ? 'white' : 'black',
				color: theme === 'light' ? 'black' : 'white',
			}}>
			<h4>
				{language === 'Korean' ? '현재 언어 : ' : 'current language : '} {language}
			</h4>
			<select value={language} onChange={(e) => setLanguage(e.target.value)}>
				<option value={'Korean'}>Korean</option>
				<option value={'English'}>English</option>
			</select>
		</div>
	);
}
