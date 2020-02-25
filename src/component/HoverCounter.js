import React, { Component } from 'react'
import withCounter from "./WithCounter"

class HoverCounter extends Component {

    render() {
        const {count, increamentCount} = this.props
        return (
                <button onMouseOver={increamentCount}> Hovered {count} times </button>
        )
    }
}

export default withCounter(HoverCounter, 4)
