import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandle(){
        console.log("class clicked");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandle}>ClickMe</button>
            </div>
        )
    }
}

export default ClassClick
