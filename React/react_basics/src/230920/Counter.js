import { Component } from "react";


class Counter extends Component {

    // constructor(props) {
    //     // 부모 클래스인 Component의 생성자 호출
    //     super(props)

    //     this.state = {
    //         number: 0
    //     }

    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    // handleIncrement() {
    //     // console.log(this)
    //     this.setState({ number: this.state.number + 1 })
    // }

    state = {
        number: 0
    }



    handleDecrement = () => {
        // console.log('감소 함수', this) // 화살표 함수는 생성자에 this 바인딩을 자동으로 해준다.
        //setState는 호출 직후에 상태가 바로 업데이트 되지 않는다.
        //리액트는 여러 setState 호출을 일괄 처리 
        //2번의 setState가 1번의 setState의 결과를 기반으로 동작하지 않습니다.
        // this.setState({ number: this.state.number - 1 }) // --- 1번
        // this.setState({ number: this.state.number - 1 }) // --- 2번

        this.setState((prevState) => {
            return { number: prevState.number - 1 }
        })
        this.setState((prevState) => {
            return { number: prevState.number - 1 }
        })
    }


    render() {

        return (
            <>
                <div>
                    <h1>{this.state.number}</h1>
                    {/* <button onClick={this.handleIncrement}>증가</button> */}
                    <button onClick={this.handleDecrement}>감소</button>
                </div>
            </>
        )
    };
};

export default Counter;