import React from 'react'
import MySelf from '../MySelf/MySelf'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'

const Father = ({ house }) => {
  return (
    <div>
      <h2>Father : {house}</h2>
      <div style={{ display: 'flex' }}>
        <MySelf house={house}/>
        <Brother house={house} />
        <Sister house={house} />
      </div>
    </div>
  )
}

export default Father
