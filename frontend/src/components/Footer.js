import React from 'react'

const Footer = ({ col }) => {
    const year = new Date().getFullYear()
  return (
    <div className='footer' style={{ backgroundColor: col }}>
          © {year}
    </div>
  )
}

export default Footer
