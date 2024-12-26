import React from 'react'
import { Link } from 'react-router-dom'


const UserCard = ({user}) => {
  return (
    <div className="p-5 border rounded-md flex flex-col items-center space-y-10 shadow-sm">
   <img src={user.avatar_url}  className='h-24 rounded-full' alt="" />
   <h1 className='text-2xl font-bold '>{user.login}</h1>
   {/* <h2 className='text-lg font-semibold'>ishra21</h2> */}
   {/* <p className='text-gray-500 text-sm'>User Since : 16--01-2024</p> */}
   <Link to={`/profile/${user.login}`} className='bg-cyan-900 p-2 px-5 rounded-lg w-full hover:bg-cyan-700 duration-200'><p className='font-bold text-white'>View More</p></Link>
  </div>
  )
}

export default UserCard