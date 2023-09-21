import { useState } from 'react';

export default function ToggleFunction() {
	const [status, setStatus] = useState(false);
	const handleToggle = () => {
		// if (status === false) {
		// 	setStatus(true);
		// } else {
		// 	setStatus(false);
		// }
		setStatus(!status);
	};
	return (
		<div>
			<button onClick={handleToggle}>토글</button>
			<p>{status && '보여라'}</p>
		</div>
	);
}
