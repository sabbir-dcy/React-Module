import React, { useEffect, useState } from 'react'
import Shoes from '../Shoes/Shoes'
import SingleCosmetic from '../SingleCosmetic/SingleCosmetic'

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([])

  useEffect(() => {
    fetch('data.json').then((res) => res.json()).then((data) => setCosmetics(data))
  }, [])
  return (
    <div>
      <h2>welcome to my material</h2>
      <Shoes price={100}></Shoes>
      {cosmetics.map((cosmetic) => (
        <SingleCosmetic
          key={cosmetic.id}
          cosmetic = {cosmetic}
        ></SingleCosmetic>
      ))}
    </div>
  )
}

export default Cosmetics
