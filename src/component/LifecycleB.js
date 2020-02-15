import React, { Component } from 'react'


class LifecycleB extends Component {
    // 1St method
    constructor(props) {
        super(props)
    
        this.state = {
             name: "LCycleB"
        }
        console.log("Life CycleB constructor")
    }

    //2nd Method
    static getDerivedStateFromProps(props, state){
        console.log("Life CycleB getDerivedStateFromProps")
        return null
    }
    //4th Method
    componentDidMount(){
        console.log("Life CycleB componentDidMount")
    }


    // 3rd method
    render() {
        console.log("Life cycle B rendered")
        return (
            <div>
                Life Cycle B
            </div>
        )
    }
}

export default LifecycleB