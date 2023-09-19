import { Component } from "react";

class EventClass extends Component {

    constructor(props) {
        // super는 부모의 값을 사용하기 위하여 넣는 키워드
        super(props)

        // this 바인딩
        // 일반형 함수일때만 사용
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log('클래스형 컴포넌트')
    }

    handleClick2 = (msg) => {
        console.log(msg)
    }

    render() {

        return (
            <>
                <button onClick={this.handleClick}>클릭Class</button>
                <button onClick={() => this.handleClick2('hello')}>클릭Class2번</button>
            </>
        )
    }
}

export default EventClass;