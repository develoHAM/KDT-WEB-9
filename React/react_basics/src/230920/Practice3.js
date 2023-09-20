import { Component } from "react";

class ClassState extends Component {

    constructor(props) {
        super(props)

        this.state = {
            table: [],
            filtered: []
        }

        this.category = 'writer';
        this.onSearch = false;
        this.append = this.append.bind(this)
        this.search = this.search.bind(this)
        this.selectCategory = this.selectCategory.bind(this)
        this.showAll = this.showAll.bind(this)
    }

    append() {
        const writerValue = document.getElementById('writer').value
        const titleValue = document.getElementById('title').value
        document.getElementById('writer').value = ''
        document.getElementById('title').value = ''
        this.setState((prevState) => {
            return {
                table: prevState.table.concat(
                    {
                        // id: (prevState.table.length > 0 ? prevState.table.length + 1 : 1),
                        writer: writerValue,
                        title: titleValue
                    }
                ),
                filtered: this.onSearch ? prevState.filtered : prevState.filtered.concat(
                    {
                        writer: writerValue,
                        title: titleValue
                    }
                )

            }
        })
        console.log(this.state)
    }

    selectCategory(event) {
        this.category = event.target.value
    }

    search() {
        // this.category = 'writer' OR 'title'
        const value = document.getElementById('search').value

        if (this.category == 'writer') {
            this.setState((prevState) => {
                return {
                    table: prevState.table,
                    filtered: prevState.table.filter((user) => {
                        return user.writer == value
                    })
                }
            })
        } else {
            this.setState((prevState) => {
                return {
                    table: prevState.table,
                    filtered: prevState.table.filter((user) => {
                        return user.title == value
                    })
                }
            })
        }

        this.onSearch = true;
        console.log(this.state)
    }

    showAll() {
        document.getElementById('search').value = ''
        this.setState((prevState) => {
            return {
                table: prevState.table,
                filtered: prevState.table
            }
        })

        this.onSearch = false;
    }



    render() {

        return (
            <>
                <div>
                    <label htmlFor="writer">작성자 : </label><input type="text" id="writer" placeholder="작성자"></input>
                    <label htmlFor="title">제목 : </label><input type="text" id="title" placeholder="제목"></input>
                    <button onClick={this.append}>작성</button>
                </div>
                <br />
                <div>
                    <select name="category" id="category" onChange={(event) => this.selectCategory(event)}>
                        <option value={'writer'}>작성자</option>
                        <option value={'title'}>제목</option>
                    </select>
                    <input type="text" id="search" placeholder="검색어"></input>
                    <button onClick={this.search}>검색</button>
                    <button onClick={this.showAll}>전체</button>
                </div>
                <br />
                <div>
                    <table cellSpacing={0} border={1} width={'300px'}>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.filtered.map((user, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{user.title}</td>
                                        <td>{user.writer}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div >
            </>
        )
    }
}

export default ClassState;