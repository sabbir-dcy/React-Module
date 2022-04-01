import React from 'react'
import './TShirt.css'

const TShirt = ({ tShirt, addToCartHandler }) => {
  const { name, picture: img, price } = tShirt
  return (
    <div className='t-shirt'>
      <div>
        <img src={img} alt='' />
      </div>
      <div>
        <h3>{name}</h3>
        <h2>${price}</h2>
      </div>
      <button onClick={() => addToCartHandler(tShirt)}>add to cart</button>
    </div>
  )
}

export default TShirt
