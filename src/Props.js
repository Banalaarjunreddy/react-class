import React from 'react'

export default function Props(props) {
  return (
    <div>
      <h1>This is props component</h1>
     <p>Name is : <b>{props.studentName}</b> and roll No. :<b>{props.studentrollNumber}</b> </p>
    </div>
  )
}
