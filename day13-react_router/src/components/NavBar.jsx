import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div className = 'flex justify-between items-center p-2 bg-gray-200'>
      <div>
        <h1>Logo</h1>
      </div>
      <div  className = 'flex justify-between items-center   gap-3 bg-gray-200'>
        <NavLink to ={'/'}>Home</NavLink>
        <NavLink to ={'/about'}>About</NavLink>
        <NavLink to ={'/contact'}>Contact</NavLink>
      </div>
      <div>
        <h1>Login</h1>
      </div>
    </div>
  )
}

export default NavBar
