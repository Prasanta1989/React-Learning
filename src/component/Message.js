import React, {Component} from "react"

class Message extends Component{
    constructor(){
        super()
        this.state={
            message: "Welcome visitor"
        }
    }

    chaneMsg(){
        this.setState({
            message:"U r Visted"
        })
    }


    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button className="btn" onClick={() => this.chaneMsg()}>To change</button>
            </div>
        )
    }
}

export default Message