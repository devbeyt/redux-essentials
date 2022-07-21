import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='navigation'>
      <Link to="/" className='Link'>Home</Link>
      <Link to="/" className='Link'>Empty</Link>
    </nav>
  )
}

export default Navigation