import React, { createContext, useState } from 'react'
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css'

export const RingContext = createContext('plasma ring')

const Grandpa = () => {
  const [house, setHouse] = useState(1)
  const ornament = 'diamond ring'
  const handleBuyHouse = () => {
    setHouse(house + 1)
  }
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className='grandpa'>
        <button onClick={handleBuyHouse}>buy a house</button>
        <h2>grandpa : {house}</h2>
        <div className='grandpa-child'>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  )
}

export default Grandpa
