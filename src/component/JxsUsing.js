import React from "react"

const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Hello PK using JSX</h1>
    //     </div>
    // )

    return React.createElement(
        "div",
        {id:"createId", className:"createClass"},
        React.createElement("h1", {className:"heading"}, "Without JSX")
    )
}

export default Hello