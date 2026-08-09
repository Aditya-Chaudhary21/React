import React from 'react'
import { NavLink, Outlet } from 'react-router'


const Home = () => {
  
  return (
    <div>
      <h1>this is the home page</h1>
      <NavLink to={"help"}>Help</NavLink>
      <Outlet/>
    </div>
  )
}

export default Home
