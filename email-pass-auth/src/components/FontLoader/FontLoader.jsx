import React from 'react'
import GoogleFontLoader from 'react-google-font-loader'

const FontLoader = () => {
  <>
    <GoogleFontLoader></GoogleFontLoader>
    fonts={[{ font: 'montserrat', weight: [400] }]}
  </>
  return <div></div>
}

export default FontLoader
