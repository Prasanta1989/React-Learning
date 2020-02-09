import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:"Prasant"
        }

        // this.bindHandle = this.bindHandle.bind(this)                   //Old Approach
    }

    // bindHandle(){
    //     this.setState({
    //         text: "Kuku"
    //     })
    // }

    bindHandle = () =>{
        this.setState({
            text: "Kuku"
      })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.text}</div>
                {/* First Approach */}
                <button onClick={this.bindHandle.bind(this)}>clickBind</button> 
                 {/* Second Approach */}
                <button onClick={() => this.bindHandle()}>clickBind</button>

                {/* Best Approach */}
                <button onClick={this.bindHandle}>click1Bind</button>
            </div>
        )
    }
}

export default EventBind
