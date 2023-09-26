import React, { Component } from 'react';

//내장함수 형태 createRef()
class RefSampleClass2 extends Component {
	//createRef를 사용해서 만들때는 component 내부 변수에 React.createRef()를 할당해주어야함
	myInput = React.createRef();

	handleFocus = () => {
		//ref를 설정한 DOM에 접근하기 위해서는 this.myInput.current 사용
		this.myInput.current.focus();
	};

	render() {
		return (
			<>
				<p>(클래스형 컴포넌트) 버튼클릭시 input에 focus 처리</p>
				<input ref={this.myInput} />
				<button onClick={this.handleFocus}>focus</button>
			</>
		);
	}
}

export default RefSampleClass2;
