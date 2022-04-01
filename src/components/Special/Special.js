import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Grandpa'

const Special = () => {
  const ring = useContext(RingContext)
  const [house, setHouse] = useContext(RingContext)
  return (
    <div>
      <h3>special : {house}</h3>
      <button onClick={() => setHouse(house + 1)}>buy house</button>
    </div>
  )
}

export default Special
