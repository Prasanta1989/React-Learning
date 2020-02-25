import React, { Component } from 'react'
import withCounter from "./WithCounter"

class ClickCounter extends Component {

    render() {
        const {count, increamentCount} = this.props
        return (
                <button onClick={increamentCount}> Clicked {count} times </button>
        )
    }
}

export default withCounter(ClickCounter, 2)
