import { Component } from "react";
import PropTypes from 'prop-types'

class Food extends Component {
    render() {
        const styles = {
            color: "red"
        }
        return (
            <>
                <p>제가 좋아하는 음식은 <span style={styles}>{this.props.food}</span> 입니다.</p>
            </>
        )
    }
}

Food.defaultProps = {
    food: '도넛'
}

export default Food