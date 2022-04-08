import React, { useEffect, useState } from 'react'
import { StyledContainer } from '../styles/element'

const Font = () => {
  const [fonts, setFonts] = useState([])
  // const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0`
  const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0&sort=popularity`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFonts(data.items.slice(0, 1000))
        console.log(data.length)
      })
    // .then((data) => setFont(data.items[0]))
  }, [url])

  let prefix = `@import url('https://fonts.googleapis.com/css2?`
  // var apiUrl = [prefix]

  fonts.map(
    (font) => (prefix += 'family=' + font.family.replace(/ /g, '+') + '&')
  )

  // apiUrl.push('https://fonts.googleapis.com/css?family=')
  // apiUrl.push(font?.family?.replace(/ /g, '+'))
  // apiUrl.push('&display=swap')

  // @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap');
  // @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro&family=Rubik+Moonrocks&display=swap');
  // var cssAPI = apiUrl.join('')
  // cssAPI = `${cssAPI}');`
  return (
    <StyledContainer>
      <h5>{prefix + "display=swap');"}</h5>
    </StyledContainer>
  )
}

export default Font
