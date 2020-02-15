import React from 'react'
import Mystyle from "./Mystyle.css"
function Customestyle(props) {
    let cName = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${cName} font-s`}>Mystyle change</h1>
        </div>
    )
}

export default Customestyle