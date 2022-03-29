import React, { useEffect, useState } from 'react'
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  useEffect(() => {
    const storedCart = getStoredCart()
    const savedCart = []
    for (const id in storedCart) {
      /**
       * local storage theke newa product gulo ke fetch kore json theke load kora product gular moddhe khujbe
       * note: ekhane dependancy add korte hobe karon json theke product fetch korte ektu deri hobe local storage er tulonay
       * jodi na kori then addedProduct e undefined assign hobe karon dekha jabe json data load howar aagei amra find method chalaiye compare kore data na peye hothash hoye undefined assign kore diyechi
       * tai dependency te [products] add korte hobe.
       * jaate, as soon as json data load hoy useffect again call hoy
       * ar ekta shorto add korbe hobe jate jotokkhon na data pacchi undefined print na kore
       * dependancy chara useffect only once call hoy
       */
      const addedProduct = products.find((pd) => pd.id === id)
      if (!addedProduct) return
      const quantity = storedCart[id]
      addedProduct.quantity = quantity // quantity is a property of every product in json
      savedCart.push(addedProduct)
    }
    setCart(savedCart)
  }, [products])

  const handleAddToCart = (product) => {
    // console.log(product.name + ' add to cart')
    // jei product tay click korlam shudhu matro oi porduct ta pacchi. ekhan theke ei data ta cart er shathe share korte parbe

    //* phero approach
    /* let newCart
    const exists = cart.find(pd => pd.id === product.id)
    if (!exists) {
      product.quantity = 1
      newCart = [...cart, product]
    } else {
      const rest = cart.filter((pd) => product.id !== pd.id)
      exists.quantity += 1
      newCart = [...rest, exists]
    } */

    //* my approach
    if (cart.includes(product)) {
      product['quantity'] += 1
    } else {
      product['quantity'] = 1
    }
    const newCart = [...cart, product]

    // common
    setCart(newCart)
    addToDb(product.id)
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart items={cart} />
      </div>
    </div>
  )
}

export default Shop
