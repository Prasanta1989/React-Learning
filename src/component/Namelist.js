import React from 'react'
import Person from "./Person"
function Namelist() {
    const names=["Prasant", "Kuku"]
    const namelist = names.map(name => <h2>{name}</h2>)



    const persons=[
        {
            name:"Prasanta",
            Age:30,
            Skill:"developer"
        },
        {
            name:"Smita",
            Age:28,
            Skill:"Writer"
        },
        {
            name:"Bikash",
            Age:25,
            Skill:"Engineer"
        }
    ]

// const personList = persons.map(person => <h2>I am {person.name}. I am {person.Age} years old.</h2>)
const personList= persons.map((person, index) =>
<Person key={index} person={person}></Person>,


)
return (
    <div>{personList}</div>
)

    return (
        <div>{namelist}</div>
    )
}

export default Namelist
