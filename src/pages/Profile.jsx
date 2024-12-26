import React, { useContext, useEffect } from 'react'
import GitHubUserContext from '../Providers/GitHubUsersContext'
import { useParams } from 'react-router-dom'
import { fetchUser } from '../Providers/GitHubUsersService'

const Profile = () => {

const {dispatch,user} = useContext(GitHubUserContext)

const {id} = useParams()

const getUser = async () =>{
const data = await fetchUser(id)
dispatch({
    type :"GET_USER",
    payload : data
})
}

useEffect(()=>{
getUser()
},[id])

if(!user) {
    return (
        <div className='p-5 container mx-auto'>
        <h1>Loading....</h1>
    </div>
    )}

    return (
        <div className='p-5 mx-auto flex justify-center  item-center'>
            <div className="card border mt-20 py-16 px-10 shadow-lg hover:scale-105 hover:shadow-slate-400 max-w-sm">
                <img className='w-28 hover:scale-105 shadow-xl  rounded-full' src={user.avatar_url} alt="" />
                <h2 className='text-3xl font-bold my-3'>Name : {user.name}</h2>
                <h1 className='text-2xl font-bold my-4 text-blue-800'>Login id : {user.login}</h1>
                <a className='font-semibold' href={user.html_url}>GitHub URL : {user.html_url}</a>
            </div>
        </div>
    )
}

export default Profile