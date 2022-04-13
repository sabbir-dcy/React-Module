import { createContext, useEffect, useState } from 'react'

export const dataContext = createContext()

export const UseData = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  )
}
