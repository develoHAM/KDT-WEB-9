import { Component } from "react";

class PropsPrac1 extends Component {
    render() {
        return (
            <h1>
                제가 좋아하는 음식은
                <span style={{ color: "red" }}> {this.props.food}</span> 입니다
            </h1>
        );
    }
}

PropsPrac1.defaultProps = {
    food: "피자",
};

export default PropsPrac1;
