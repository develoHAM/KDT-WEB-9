import { Component } from "react";

class EventHandling extends Component {

    showMessage = (msg) => {
        console.log(this.props)
        alert(msg)
    }

    // showMessage = () => {
    //     alert(this.props.message)
    // }

    render() {
        // const { message } = this.props

        return (
            <>
                <button onClick={() => this.showMessage(this.props.message)}>Show Message</button>
            </>
        )
    }
}

export default EventHandling;