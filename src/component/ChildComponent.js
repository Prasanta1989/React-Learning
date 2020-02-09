import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* Without passing Parameter */}
            {/* <button onClick={props.greetHandler}>Parent Btn</button> */}
            {/* With passing Parameter */}
            <button onClick={() => props.greetHandler("child")}>Parent Btn</button>
        </div>
    )
}

export default ChildComponent
