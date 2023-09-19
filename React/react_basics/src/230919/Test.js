import { Component } from "react";

class Test extends Component {

    name = '김대원';
    my_style = {
        backgroundColor: 'blue',
        color: 'orange',
        fontSize: '40px',
        padding: '12px'
    }

    render() {

        // const name = '김대원';
        // const my_style = {
        //     backgroundColor: 'blue',
        //     color: 'orange',
        //     fontSize: '40px',
        //     padding: '12px'
        // }
        return (
            <>
                <div style={this.my_style}>{this.name}</div>
            </>
        )
    }

}

export default Test