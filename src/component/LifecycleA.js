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
    // Updating Lifecycle start
    //2nd method
    shouldComponentUpdate(){
        console.log("Life CycleA shouldComponentUpdate")
        return true
    }
    //3rd method
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Life CycleA getSnapshotBeforeUpdate")
        return null
    }

    //4th method
    componentDidUpdate(){
        console.log("Life CycleA componentDidUpdate")
    }
    // Updating Lifecycle End

    changeState = () =>{
        this.setState({
            name: "Update lifeCycle"
        })
    }




    // 3rd method
    render() {
        console.log("Life cycle A rendered")
        return (
            <div>
                <div>Life Cycle A</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB>Life Cycle B</LifecycleB>
            </div>
        )
    }
}

export default LifecycleA