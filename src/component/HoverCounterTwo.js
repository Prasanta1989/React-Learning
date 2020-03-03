import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0 
        }
    }

    ClickHandleProp = ()=>{
        this.setState(prevState =>{
            return {count : prevState.count + 5}
        } )
    }
    
    render() {
        const{count} = this.state
        return (
            <div>
            <button onMouseOver = {this.ClickHandleProp}>Hovered Prop {count} times</button><br />
            </div>
        )
    }
}

export default HoverCounterTwo
