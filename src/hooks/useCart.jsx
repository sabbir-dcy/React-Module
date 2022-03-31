import { useEffect, useState } from 'react'
import { getStoredCart } from '../utilities/fakedb'

export const useCart = (products) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = getStoredCart()
    const savedCart = []

    for (const id in storedCart) {
      const addedProduct = products.find((pd) => pd.id === id)

      if (addedProduct) {
        addedProduct.quantity = storedCart[id]
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  }, [products])
  
  return [cart, setCart]
}
