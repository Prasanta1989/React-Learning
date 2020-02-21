import React from 'react'
import ReactDOM from "react-dom"
function Portal() {
    return ReactDOM.createPortal (
        <h1>
            Portal  demo
        </h1>,
        document.getElementById("portals-root")
    )
}

export default Portal
