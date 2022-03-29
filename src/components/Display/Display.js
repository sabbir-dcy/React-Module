import React from 'react'

const Display = (props) => {
  return (
    <div style={{ background: 'lightblue', margin: '1rem' }}>
      <h2>Name : {props.name}</h2>
      <p>so far steps today : {props.steps}</p>
    </div>
  )
}

export default Display



















