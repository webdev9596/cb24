import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = ({ col }) => {
  const navigate = useNavigate()
  const goToUrl = (p='')=>{
    navigate(`/${p}`)
  }

  return (
    <div className='nav' style={{ backgroundColor: col }}>
      <span className="logo">CodeBuddy</span>
      <ul className='liitems'>
        <li onClick={() => goToUrl('')}>JavaScript</li>
        <li onClick={() => goToUrl('TypeScript')}>TypeScript</li>
        <li onClick={() => goToUrl('React')}>React</li>
        {/* <li>Redux</li>
        <li>Git</li> */}
      </ul>
    </div>
  )
}

export default Navbar
