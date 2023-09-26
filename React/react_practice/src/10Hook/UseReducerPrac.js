import React, { useReducer } from 'react';

const initialState = {
	username: '',
	password: '',
	confirmPassword: '',
	message: '',
};

function signupReducer(state, action) {
	switch (action.type) {
		case 'SET_USERNAME':
			return { ...state, username: action.payload };
		case 'SET_PASSWORD':
			return { ...state, password: action.payload };
		case 'SET_CONFIRM_PASSWORD':
			return { ...state, confirmPassword: action.payload };
		case 'SIGN_UP':
			if (state.password === state.confirmPassword) {
				return { ...state, message: 'Signup successful!' };
			} else {
				return { ...state, message: 'Passwords do not match!' };
			}
		default:
			throw new Error('Unknown action type');
	}
}

function SignupForm() {
	const [state, dispatch] = useReducer(signupReducer, initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'SIGN_UP' });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={state.username}
					onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
					placeholder='Username'
				/>
				<input
					type='password'
					value={state.password}
					onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
					placeholder='Password'
				/>
				<input
					type='password'
					value={state.confirmPassword}
					onChange={(e) => dispatch({ type: 'SET_CONFIRM_PASSWORD', payload: e.target.value })}
					placeholder='Confirm Password'
				/>
				<button type='submit'>Submit</button>
			</form>
			<p>{state.message}</p>
		</div>
	);
}

export default SignupForm;
