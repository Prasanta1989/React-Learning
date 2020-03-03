import React, { Component } from 'react'

class RenderPropsTwo extends Component {
    render() {
        return (
            <div>
                {this.props.name()}
            </div>
        )
    }
}

export default RenderPropsTwo
