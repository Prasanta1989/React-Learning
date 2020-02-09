import React, { Component } from 'react'
import ChildComponent from "./ChildComponent"


class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "Parent"
        }
        this.greetParent=this.greetParent.bind(this)
    }

    // greetParent(){
    //     alert(`Hello ${this.state.parentName}`)   /*Without passing Parameter*/
    // }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)   /*With passing Parameter*/
    }
    
    render() {
        return (
            <ChildComponent greetHandler = {this.greetParent}/>
        )
    }
}

export default ParentComponent
