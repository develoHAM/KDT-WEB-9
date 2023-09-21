import { Component } from 'react';

class MyComponent extends Component {
	//생성 될때

	state = {
		count: 0,
	};
	componentDidMount() {
		console.log('Mount!');
		// this.setState({ count: this.state.count + 1 });
		//생성될때 예를 들어 db에서 정보를 가져와야할경우 실행할 코드 작성
		// axios({})...등등
	}

	//업데이트 될떄
	componentDidUpdate() {
		console.log('Update!');
	}

	//제거 될떄
	componentWillUnmount() {
		console.log('Unmount');
	}

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<>
				<div>My Component {this.props.number}</div>
				<button onClick={this.handleIncrement}>state count 증가</button>
				<h1>점수판: {this.state.count}</h1>
			</>
		);
	}
}

class LifecycleClass extends Component {
	state = {
		number: 0,
		visible: true,
	};

	changeNumberState = () => {
		this.setState({ number: this.state.number + 1 });
	};

	changeVisibleState = () => {
		this.setState({ visible: !this.state.visible });
	};

	render() {
		return (
			<>
				<button onClick={this.changeNumberState}>PLUS</button>
				<button onClick={this.changeVisibleState}>ON/OFF</button>
				{this.state.visible && <MyComponent number={this.state.number} />}
			</>
		);
	}
}

export default LifecycleClass;
