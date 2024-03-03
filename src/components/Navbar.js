import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <h1>Logo</h1>
      <div>
      <NavLink to='home'>Home</NavLink>
      <NavLink to='home'>Contact</NavLink>
      <NavLink to='home'>About</NavLink>
      </div>
    </div>
  )
}

export default Navbar
