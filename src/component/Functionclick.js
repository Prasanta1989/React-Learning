// Event Handling in function componet
import React from 'react'

function Functionclick() {
    function clickHandler(){
        console.log("clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default Functionclick
