import { Component } from "react";

class ClassState extends Component {

    state = {
        colorName: '검정색',
        colorClass: {
            color: 'black'
        }
    }

    colorBlack = () => {
        this.setState(() => {
            return {
                colorName: '검정색',
                colorClass: {
                    color: 'black'
                }
            }
        })
    }

    colorRed = () => {
        this.setState(() => {
            return {
                colorName: '빨간색',
                colorClass: {
                    color: 'red'
                }
            }
        })
    }

    colorBlue = () => {
        this.setState(() => {
            return {
                colorName: '파란색',
                colorClass: {
                    color: 'blue'
                }
            }
        })
    }


    render() {
        return (
            <>
                <h1 style={this.state.colorClass}>{this.state.colorName} 글씨</h1>
                <button onClick={this.colorBlack}>검정색</button>
                <button onClick={this.colorRed}>빨간색</button>
                <button onClick={this.colorBlue}>파란색</button>
            </>
        )
    }
}

export default ClassState;