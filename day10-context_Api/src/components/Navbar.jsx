import { Pointer, TextCursor } from 'lucide-react'
import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

const Navbar = () => {
  const { setIsCartOpen } = useContext(MyContext);
  return (
    <div className="bg-gray-800 text-white h-15 text-lg p-2 rounded-xl flex justify-between items-center">
     <div>Logo</div>
     <div className='flex gap-5 text-lg'>
        <h1  className="cursor-pointer rounded-lg  px-5 py-2 text-white hover:bg-gray-600 transition" onClick={()=>{setIsCartOpen(true)}}>Home</h1>
        <h1  className="cursor-pointer rounded-lg  px-5 py-2 text-white hover:bg-gray-600 transition" onClick={()=>{setIsCartOpen(false)}}>cart</h1>
     </div>
     <div className='text-lg'>
        Login
     </div>
    </div>
  )
}

export default Navbar
