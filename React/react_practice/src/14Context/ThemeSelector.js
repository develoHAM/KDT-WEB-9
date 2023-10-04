import { useContext } from 'react';
import Context from './context';

export default function ThemeSelector() {
	const { language, setLanguage, theme, setTheme } = useContext(Context);

	return (
		<div
			style={{
				backgroundColor: theme === 'light' ? 'white' : 'black',
				color: theme === 'light' ? 'black' : 'white',
			}}>
			<h4>
				{' '}
				{language === 'Korean' ? '현재 테마 : ' : 'current theme : '} {theme}
			</h4>
			<select value={theme} onChange={(e) => setTheme(e.target.value)}>
				<option value={'light'}>light</option>
				<option value={'dark'}>dark</option>
			</select>
		</div>
	);
}
