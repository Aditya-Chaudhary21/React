import React from 'react'

const UserCard = ({ user }) => {
  return (
    <div className="border-2 p-3 h-20px w-20px rounded-2xl flex flex-col items-center gap-2">
        <div>
            <img src={user.image} alt="user" className='w-20 h-20 rounded-full' />
        </div>
        <h1 className='text-2xl font-bold'> User- {user.name}</h1>
        <p className='text-lg'>Email- {user.email}</p>
        </div>
  )
}

export default UserCard
