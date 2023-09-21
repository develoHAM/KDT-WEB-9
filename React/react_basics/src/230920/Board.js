import { Component } from 'react';

class Board extends Component {
	constructor(props) {
		super(props);

		//초기화
		this.state = {
			inputWriter: '',
			inputTitle: '',
			selectCategory: 'writer',
			inputSearch: '',
			onSearch: false,
			comments: [],
			filteredComments: [],
		};

		this.onChange = this.onChange.bind(this);
		this.addComment = this.addComment.bind(this);
		this.selectCategory = this.selectCategory.bind(this);
		this.filterComment = this.filterComment.bind(this);
		this.showAll = this.showAll.bind(this);
	}

	onChange(event) {
		this.setState({ inputWriter: event.target.value });
	}

	addComment() {
		const newComment = {
			writer: this.state.inputWriter,
			title: this.state.inputTitle,
		};
		this.setState(() => ({
			comments: [...this.state.comments, newComment],
			inputTitle: '',
			inputWriter: '',
		}));
	}

	selectCategory(event) {
		this.setState({ selectCategory: event.target.value });
	}

	filterComment() {
		const result =
			this.state.selectCategory == 'writer'
				? this.state.comments.filter((comment) => {
						return comment.writer == this.state.inputSearch;
				  })
				: this.state.comments.filter((comment) => {
						return comment.title == this.state.inputSearch;
				  });

		this.setState({ onSearch: true, filteredComments: result });
	}

	showAll() {
		this.setState({ onSearch: false });
	}

	render() {
		return (
			<>
				<form>
					<label htmlFor='writer'>작성자 :</label>
					<input
						type='text'
						id='writer'
						value={this.state.inputWriter}
						onChange={(e) => this.onChange(e)}
					/>
					<label htmlFor='title'>제목 :</label>
					<input
						type='text'
						id='title'
						value={this.state.inputTitle}
						onChange={(e) =>
							this.setState({ inputTitle: e.target.value })
						}
					/>
					<button type='button' onClick={this.addComment}>
						작성
					</button>
				</form>
				<div>
					<select onChange={(e) => this.selectCategory(e)}>
						<option value={'writer'}>작성자</option>
						<option value={'title'}>제목</option>
					</select>
					<input
						placeholder='검색어'
						onChange={(e) =>
							this.setState({ inputSearch: e.target.value })
						}
					/>
					<button type='button' onClick={this.filterComment}>
						검색
					</button>
					<button type='button' onClick={this.showAll}>
						전체
					</button>
				</div>
				<table border={1} cellSpacing={0}>
					<thead>
						<tr>
							<th>번호</th>
							<th>제목</th>
							<th>작성자</th>
						</tr>
					</thead>
					<tbody>
						{this.state.onSearch
							? this.state.filteredComments.map(
									(value, index) => {
										return (
											<tr key={index}>
												<td>{index + 1}</td>
												<td>{value.title}</td>
												<td>{value.writer}</td>
											</tr>
										);
									}
							  )
							: this.state.comments.map((value, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{value.title}</td>
											<td>{value.writer}</td>
										</tr>
									);
							  })}

						{/* {this.state.comments.map((value, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        })} */}
					</tbody>
				</table>
			</>
		);
	}
}

export default Board;
