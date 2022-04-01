import React from 'react'
import './Cart.css'

const Cart = ({ cart, removeFromCartHandler }) => {
  // conditional rendering options
  // 1. element variable
  // 2. ternary operator
  // 3. logical operator

  let command
  if (cart.length === 0) {
    command = <p>Please add some items</p>
  } else if (cart.length === 1) {
    command = <p>please add more</p>
  } else {
    command = (
      <p>
        <small>thanks for adding item</small>
      </p>
    )
  }
  return (
    <div>
      <h2>selected items: {cart.length}</h2>
      {command}
      {cart.map((tShirt) => (
        <p key={tShirt._id}>
          {tShirt.name}
          <button onClick={() => removeFromCartHandler(tShirt)}>✖</button>
        </p>
      ))}
      {cart.length === 3 && (
        <div style={{ background: 'lightcoral' }}>
          <h2>one more to go</h2>
        </div>
      )}
      {cart.length === 0 || 'not empty...'}
      {cart.length !== 4 ? <p>keep adding</p> : <button>remove all</button>}
    </div>
  )
}

export default Cart
