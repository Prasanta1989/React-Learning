import React, { Component } from 'react'
import PureComp from "./PureComp"
import RegularComp from "./RegularComp"
import MemoComp from "./MemoComp"

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Prasanta"
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Prasanta"
            })
        },3000)

    }

    render() {
        console.log("Parent component")
        return (
            <div>
                Parent component
                <MemoComp name={this.state.name}></MemoComp>
                {/* <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
