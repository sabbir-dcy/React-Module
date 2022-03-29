import React, { useEffect, useState } from 'react'
import Display from '../Display/Display'
import Tablet from '../Tablet/Tablet'

const Watch = () => {
  const [steps, setSteps] = useState(0)

  const increaseSteps = () => {
    const newStepsCount = steps + 1
    setSteps(newStepsCount)
  }

  useEffect(() => {
    console.log(steps);
  }, [steps])

  return (
    <div className="watch-container" style={{background : 'plum', margin : '1rem'}}>
      <h1>Smart watch</h1>
      <h4>my current steps : {steps}</h4>
      <button onClick={increaseSteps}>de dour</button>
      <Display name='garmin' steps={steps}></Display>
      <Tablet></Tablet>

    </div>
  )
}

export default Watch
