import { Component } from "react";

class ClassState extends Component {

    state = {
        isTrue: true,
        msg: '사라져라'
    }

    handleClick = () => {
        this.setState((prevState) => {
            return { isTrue: prevState.isTrue == true ? false : true, msg: prevState.msg == '사라져라' ? '보여라' : '사라져라' }
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>{this.state.msg}</button>
                <br></br>
                <h1>{this.state.isTrue && '안녕하세요'}</h1>
            </>
        )
    }
}

export default ClassState;