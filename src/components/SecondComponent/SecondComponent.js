import React, { useContext } from 'react'
import { CountContext } from '../../App'

const SecondComponent = () => {
  const [count, setCount] = useContext(CountContext)

  return (
    <div
      className='container'
      style={{ background: '#137fab'}}
    >
      <div className='counter-container'>
        <h3>second</h3>
        <div className='counter'>
          <button title='increase' onClick={() => setCount(count + 1)}>
            +
          </button>
          <h3>count: {count}</h3>
          <button title='decrease' onClick={() => setCount(count - 1)}>
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default SecondComponent
