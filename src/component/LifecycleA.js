import React, { Component } from 'react'
import LifecycleB from "./LifecycleB"

class LifecycleA extends Component {
    // 1St method
    constructor(props) {
        super(props)
    
        this.state = {
             name: "LCycleA"
        }
        console.log("Life CycleA constructor")
    }

    //2nd Method
    static getDerivedStateFromProps(props, state){
        console.log("Life CycleA getDerivedStateFromProps")
        return null
    }
    //4th Method
    componentDidMount(){
        console.log("Life CycleA componentDidMount")
    }




    // 3rd method
    render() {
        console.log("Life cycle A rendered")
        return (
            <div>
                <div>Life Cycle A</div>
                <LifecycleB>Life Cycle B</LifecycleB>
            </div>
        )
    }
}

export default LifecycleA