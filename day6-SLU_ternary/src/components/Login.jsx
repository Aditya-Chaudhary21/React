import React from 'react'

const Login = ({ setToggle }) => {
  return (
    <div className = "bg-gray-300 p-4 rounded-2xl flex flex-col gap-4">
        <h1 className="text-xl font-bold self-center ">Login</h1>
      <form className="flex flex-col gap-3 items-center justify-center ">
        <input className="border-2 border-gray-200 rounded-2xl w-full p-2 text-base" type="text" placeholder = "Email"/>
        <input className="border-2 border-gray-200 rounded-2xl w-full p-2 text-base" type="text" placeholder = "Password"/>
        <button className="text-white w-full rounded-2xl p-3 bg-blue-600 cursor-pointer">Login</button> 
      </form>
      <p>Don't have account ? <span className="text-blue-600 cursor-pointer">Register here</span></p>
    </div>
  )
}

export default Login
