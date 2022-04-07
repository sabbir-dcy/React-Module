import React, { useEffect, useState } from 'react'

const Font = () => {
  const [font, setFont] = useState([])
  // const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0`
  const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0&sort=popularity`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      // .then((data) => console.log(data.items.slice(0, 5)))
      .then((data) => setFont(data.items[0]))
  }, [url])

  const prefix = `@import url('`
  var apiUrl = [prefix]
  apiUrl.push('https://fonts.googleapis.com/css?family=')
  apiUrl.push(font?.family?.replace(/ /g, '+'))
  if (font?.variants?.includes('italic')) {
    apiUrl.push('&display=swap');
  }

  // @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap');

  var cssAPI = apiUrl.join('')
  cssAPI = `${cssAPI}');`
  return (
    <div>
      <p>{cssAPI}</p>
    </div>
  )
}

export default Font
