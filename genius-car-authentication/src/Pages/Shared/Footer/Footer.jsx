import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <footer>
      <p>
        <small>&copy; copyright {date.getFullYear()}</small>
      </p>
    </footer>
  )
}

export default Footer
