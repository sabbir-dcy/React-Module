import React from 'react'

const ThirdComponent = () => {
  return (
    <div className='container' style={{ background: '#137fab'}}>
      <div
        className='counter-container'
        
      >
        <h3>third</h3>
        <div className='counter'>
          <button title='increase'>+</button>
          <h3>count: {}</h3>
          <button title='decrease'>-</button>
        </div>
      </div>
    </div>
  )
}

export default ThirdComponent
