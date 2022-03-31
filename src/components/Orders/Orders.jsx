import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'
import { removeFromDb } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem'
const Orders = () => {
  const [products, setProducts] = useProducts() // array destructre
  const [cart, setCart] = useCart(products)

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id)
    setCart(rest)
    removeFromDb(product.id)
  }


  const navigate = useNavigate()
  return (
    <div className='shop-container'>
      <div className='review-container'>
        {cart.map((item) => (
          <ReviewItem
            key={item.id}
            item={item}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}>
          {/* <Link to='/inventory'>
            <button>proceed</button>
          </Link> */}
          <button onClick={() => navigate('/inventory')}>proceed</button>
        </Cart>
      </div>
    </div>
  )
}

export default Orders
