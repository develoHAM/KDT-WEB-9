import { useState } from 'react';

export default function ToggleVisibility() {
	const [status, setStatus] = useState(true);
	const [buttonText, setButtonText] = useState('사라져라');
	const handleToggle = () => {
		setStatus(!status);
		if (buttonText === '사라져라') {
			setButtonText('보여라');
		} else {
			setButtonText('사라져라');
		}
	};
	return (
		<div>
			<button onClick={handleToggle}>{buttonText}</button>
			<p>{status && '안녕하세요'}</p>
		</div>
	);
}
