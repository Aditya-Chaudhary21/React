import React from 'react'

const Productcard = ({product,del}) => {
  return (
    <div className='p-3 border-2 h-65 flex flex-col gap-2 rounded-2xl'>
      <div className='w-40 '>
        <img src={product.image} alt="img here" />
      </div>
      <div>
        <h1 className='text-base' >id-{product.id}</h1>
        <p className='font-bold text-xl' >{product.name.substring(0,5)}</p>
        <p className='text-lg text-green-600' >Price-${product.price}</p>
      </div>
      <button  onClick={()=>{del(product.id)}} className='bg-red-500 p-1 rounded-2xl'>Delete</button>
    </div>
  )
}

export default Productcard
