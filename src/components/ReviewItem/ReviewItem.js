import React from 'react';
import './ReviewItem.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItem = ({item, handleRemoveProduct}) => {
  const {name, img, price, shipping, quantity} = item
  return (
    <div className='review-item'>
      <div className='thumbnail'>
        <img src={img} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <h2>price : {price}</h2>
        <h2>shipping charge : {shipping}</h2>
      </div>
      <div className="bin">
        <button className='del-btn' onClick={() => handleRemoveProduct(item)}>
          <FontAwesomeIcon className='del-icon' icon={faTrashAlt}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;