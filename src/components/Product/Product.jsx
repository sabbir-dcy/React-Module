import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
  const {
    name,
    price,
    seller: manufacturer,
    ratings,
    img,
    category,
    shipping,
    ratingsCount,
  } = product
  return (
    <div className="product">
      <div className="upper">
        <div className="thumbnail-info">
          <img src={img} alt="" />
          <div className="other-info">
            <p>{category}</p>
            {/* <p>{ratingsCount}</p>
            <p>{shipping}</p> */}
          </div>
        </div>
        <div className="upper-info">
          <h2 className="product-title">{name}</h2>
          <h3 className="product-price">$ {price}</h3>
        </div>
      </div>
      <div className="lower">
        <div className="lower-info">
          <p>
            <small>Manufacturer : {manufacturer}</small>
          </p>
          <p>rating : {ratings} star</p>
        </div>
        <button
          className="btn btn-add"
          onClick={() => handleAddToCart(product)}
        >
          <p>
            Add to Cart{' '}
            <span>
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
          </p>
        </button>
      </div>
    </div>
  )
}

export default Product
