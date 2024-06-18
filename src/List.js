import React, { useState } from 'react'

export default function List() {
    const [employees, setEmployees] = useState([
        {
            name: "Arjun",
            city: "Kamareddy",
            Gender: "Male",
            yop: 2024

        },
        {
            name: "Naresh",
            city: "Medak",
            Gender: "male",
            yop: 2024
        },
        {
            name: "Harin",
            city: "Nizamabad",
            Gender: "male",
            yop: 2024

        }
    ])
    return(
        <div>
            {
                employees.map((emp) => (
                    <div>  
                         <p> Name: {emp.name}</p>
                         <p> City: {emp.city}</p>
                         <p> Gender: {emp.Gender}</p>
                         <p> YOP: {emp.yop}</p>
                         <br/>
                    </div>
                ))

            }
        </div>
    )
}
