import { Component } from 'react';

class EventClass extends Component {
    constructor(props) {
        //super는 부모의 값을 사용하기 위하여 넣은 키워드
        super(props);

        //this바인딩
        //일반형 함수일때만 사용
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert('클래스형 컴포넌트');
    }

    handleClick2 = () => {
        alert('클래스형 컴포넌트 2번');
    };

    render() {
        return (
            <>
                <button onClick={this.handleClick}>클릭Class</button>
                <button onClick={this.handleClick2}>클릭Class2번</button>
            </>
        );
    }
}

export default EventClass;
