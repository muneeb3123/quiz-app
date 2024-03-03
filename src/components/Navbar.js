import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <h1>Logo</h1>
      <div>
      <NavLink to='home'>Home</NavLink>
      <NavLink to='Contact'>Contact</NavLink>
      <NavLink to='About'>About</NavLink>
      <NavLink to='Rezult'>Rezults</NavLink>
      </div>
    </div>
  )
}

export default Navbar
