import React from 'react'

function Person({person}) {
    return (
        <div>
<h2>I am {person.name}. I am {person.Age} years old.</h2>
        </div>
    )
}

export default Person