import React from 'react'

function Column() {
    const items=[
        {
            id:1,
            name: "Prasant",
            job: "UI Dev"
        },
        {
            id:2,
            name: "Kuki",
            job: "Java Dev"
        },
        {
            id:3,
            name: "KUKU",
            job: "Testing"
        },
        {
            id:4,
            name: "Smita",
            job: "Support"
        }
    ]
    return (
        <React.Fragment>
            {
                items.map( items => (
                    <React.Fragment key={items.id}>
                        <tr>
                        <td>
                            {items.name}
                        </td>
                        <td>
                            {items.job}
                        </td>
                        </tr>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
}

export default Column
