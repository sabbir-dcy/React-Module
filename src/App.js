import { createContext, useState } from 'react'
import './App.css'
import FirstComponent from './components/FirstComponent/FirstComponent'
import SecondComponent from './components/SecondComponent/SecondComponent'
import ThirdComponent from './components/ThirdComponent/ThirdComponent'

export const CountContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  /**
  to pass multiple values
  
  const value = {count, setCount, otherObj}
  instruction:
  pass this value as provider value 
  distructre as object in consumer component
  */
  return (
    <CountContext.Provider value={[count, setCount]}>
      <div className='container'>
        <div className='counter-container'>
          <h3>app</h3>
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

        <FirstComponent counter={[count, setCount]}></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    </CountContext.Provider>
  )
}

export default App
