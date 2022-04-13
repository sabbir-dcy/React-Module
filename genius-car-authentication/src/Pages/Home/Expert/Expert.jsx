import React from 'react'

const Expert = ({ expert }) => {
  const { name, img } = expert

  return (

    <div className='col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center' id='experts'>
      <div className='card' style={{ width: '18rem' }}>
        <img className='card-img-top' src={img} alt='expert' />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='#' className='btn btn-primary'>
            about me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Expert
