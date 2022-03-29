import React from 'react'
import {addToDb, removeFromDb} from '../../utilities/fakedb'
import './SingleCosmetic.css'

const SingleCosmetic = ({ cosmetic }) => {
  const { name, price, id } = cosmetic

  const addToCart = (id) => {
    addToDb(id)
  }
  const removeFromCart = (id) => {
    removeFromDb(id)
  }

  // const handler = () => {
  //   addToCart(id)
  // }

  return (
    <div className="container">
      <h2>product : {name}</h2>
      <h3>price : ${price}</h3>
      <p>
        <small>{id}</small>
      </p>
      <button onClick={() => addToCart(id)} id="add-cart-btn">
        add to cart
      </button>
      <button onClick={() => removeFromCart(id)} id="remove-cart-btn">
        remove from cart
      </button>
    </div>
  )
}

export default SingleCosmetic
