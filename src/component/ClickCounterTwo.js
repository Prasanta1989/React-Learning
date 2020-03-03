import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0 
        }
    }

    ClickHandleProp = ()=>{
        this.setState(prevState =>{
            return {count : prevState.count + 2}
        } )
    }
    
    render() {
        const{count} = this.state
        return (
            <div>
            <button onClick = {this.ClickHandleProp}>Clicked Prop {count} times</button><br />
            </div>
        )
    }
}

export default ClickCounterTwo
