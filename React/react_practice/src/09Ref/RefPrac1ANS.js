import React, { Component } from 'react';

class RefPrac1ANS extends Component {
	constructor(props) {
		super(props);

		//state 초기화
		this.state = {
			inputWriter: '', //작성자
			inputTitle: '', //제목
			comments: [], //입력한 내용
		};
		//바인딩
		this.onChange = this.onChange.bind(this);
		this.addComment = this.addComment.bind(this);

		//Ref연습문제 코드추가
		this.inputWriterRef = React.createRef();
		this.inputTitleRef = React.createRef();
	}

	onChange(e) {
		//console.log(e.target);
		this.setState({ inputWriter: e.target.value });
	}

	addComment() {
		if (this.state.inputTitle.trim() === '') {
			this.inputTitleRef.current.focus();
			return false;
		}

		if (this.state.inputWriter.trim() === '') {
			this.inputWriterRef.current.focus();
			return false;
		}

		const newComment = {
			writer: this.state.inputWriter,
			title: this.state.inputTitle,
		};

		this.setState({
			comments: [...this.state.comments, newComment],
			inputTitle: '',
			inputWriter: '',
		});
	}

	render() {
		const { inputWriter, inputTitle, comments } = this.state;
		return (
			<>
				<form>
					<label htmlFor='writer'>작성자:</label>
					{/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
					<input
						type='text'
						id='writer'
						value={inputWriter}
						onChange={(e) => this.onChange(e)}
						ref={this.inputWriterRef}
					/>
					<label htmlFor='title'>제목:</label>
					<input
						type='text'
						id='title'
						value={inputTitle}
						onChange={(e) => this.setState({ inputTitle: e.target.value })}
						ref={this.inputTitleRef}
					/>
					<button
						type='button'
						onClick={this.addComment}
						ref={(ref) => {
							this.submitButton = ref;
						}}>
						작성
					</button>
				</form>
				<table border={1} cellSpacing={0}>
					<thead>
						<tr>
							<th>번호</th>
							<th>제목</th>
							<th>작성자</th>
						</tr>
					</thead>
					<tbody>
						{/* [ {title, writer},{title, writer},{title, writer}... ] */}
						{comments.map((value, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{value.title}</td>
									<td>{value.writer}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</>
		);
	}
}

export default RefPrac1ANS;
