import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ items }) => {
  let total = 0
  let shippingCost = 0
  let quantity = 0

  //* phero approach
  /* items.forEach((item) => {
    quantity += item.quantity
    total += item.price * item.quantity
    shippingCost += item.shipping
  }) */

  //* my approach
  const newItems = []
  items.forEach((item) => {
    if (!newItems.includes(item)) {
      total += item.price * item.quantity
      shippingCost += item.shipping
      quantity += item.quantity
      newItems.push(item)
    }
  })

  // common
  let tax = parseFloat((total * 0.1).toFixed(2))
  const grandTotal = tax + total + shippingCost

  return (
    <div className="cart">
      <h1>Order summary</h1>
      <p>Selected Items: {quantity} </p>
      <p>Total Price: {total}</p>
      <p>Total Shipping Charge: {shippingCost}</p>
      <p>Tax: ${tax}</p>
      <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
      <div className="btn-cart-container">
        <button className="btn btn-cart btn-clear-cart">
          <span>
            clear cart <FontAwesomeIcon icon={faTrash} />
          </span>
        </button>
        <button className="btn btn-cart btn-review-order">
          <span>
            review oder <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Cart
