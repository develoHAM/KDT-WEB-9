import { Component } from "react";

class StatePrac2 extends Component {
    state = {
        visible: true,
    };

    handleVisible = () => {
        this.setState((prevState) => ({ visible: !prevState.visible }));
    };

    render() {
        return (
            <div>
                <button onClick={this.handleVisible}>
                    {this.state.visible ? "사라져라" : "보여라"}
                </button>
                <h1>{this.state.visible && "안녕하세요"}</h1>
            </div>
        );
    }
}

export default StatePrac2;
