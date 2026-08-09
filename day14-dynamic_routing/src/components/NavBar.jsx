import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-2 bg-slate-300'>
      <div>Logo</div>
      <div className='flex justify-between items-center p-2 bg-slate-300 gap-3'>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <div>Login</div>
    </div>
  )
}

export default NavBar
