import React, { useContext } from 'react'
import CartCard from '../components/CartCard'
import { MyContext } from '../context/MyContext'


const CartScreen = () => {
   const { cartItem } = useContext(MyContext)
  return (
    <div className='h-screen grid grid-cols-3 gap-4'>
      {cartItem.map((item) => (
        <CartCard key={item.id} product={item}/>
      ))}
    </div>
  )
}

export default CartScreen

