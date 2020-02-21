import React, { Component } from 'react'
import FRInput from './FRInput'

class ParentFRInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandle = () =>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRInput ref= {this.inputRef}/>
                <button onClick={this.clickHandle}>FRInput</button>
            </div>
        )
    }
}

export default ParentFRInput
