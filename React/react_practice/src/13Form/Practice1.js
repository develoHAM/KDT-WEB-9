import { useForm } from 'react-hook-form';

export default function FormPractice1() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isDirty, isSubmitted },
		watch,
	} = useForm();

	const valid = (data, event) => {
		console.log('isValid', data);
		console.log('event', event);
	};

	console.log('errors', errors);
	console.log('isValid', isValid);
	console.log('isDirty', isDirty);
	console.log('isSubmitted', isSubmitted);
	return (
		<>
			<form onSubmit={handleSubmit(valid)}>
				<input placeholder='이름' type='text' {...register('name', { required: '이름은 필수 항목입니다.' })} />
				{errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
				<br />
				{/* <input
					placeholder='나이'
					type='number'
					{...register('age', { validate: (v) => v > 0 || '0 이상의 숫자만 입력 가능합니다.' })}
				/> */}
				<input
					placeholder='나이'
					type='number'
					{...register('age', { min: { value: 0, message: '0 이상의 숫자만 입력 가능합니다.' } })}
				/>
				{errors.age && <span style={{ color: 'red' }}>{errors.age.message}</span>}
				<br />
				<button>Submit</button>
			</form>
		</>
	);
}
