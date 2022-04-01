import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import useTshirts from '../hooks/useTShirts'
import TShirt from '../TShirt/TShirt'
import './Home.css'

const Home = () => {
  const [tShirts, setTShirts] = useTshirts()
  const [cart, setCart] = useState([])

  const addToCartHandler = (selectedItem) => {
    const exist = cart.find((tShirt) => selectedItem._id === tShirt._id)
    if (exist) {
      alert('already added')
      return
    }
    const newCart = [...cart, selectedItem]
    setCart(newCart)
  }

  const removeFromCartHandler = (selectedItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectedItem._id)

    setCart(rest)
  }

  return (
    <div className='home-container'>
      <div className='tshirt-container'>
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            addToCartHandler={addToCartHandler}
          ></TShirt>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart} removeFromCartHandler={removeFromCartHandler}></Cart>
      </div>
    </div>
  )
}

export default Home
