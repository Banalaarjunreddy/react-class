import React, { useState } from 'react'
import DisplayVehicle from './DisplayVechile'
export default function UserData() {
    const [name, setName] = useState('')
    function submit() {
        console.log(name)

    }
    return (
        <div>
            <p>
                <input value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name" />
            </p>
            <button onClick={submit}>submit</button>
        </div>
    )
}