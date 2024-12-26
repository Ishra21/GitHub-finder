import React, { useContext, useState } from 'react'
import { searchUsers } from '../Providers/GitHubUsersService'
import GitHubUserContext from '../Providers/GitHubUsersContext'

const Form = () => {
    const { dispatch } = useContext(GitHubUserContext)

    const [text, setText] = useState("")
    const handlesubmit = async (e) => {
        e.preventDefault()


        const data = await searchUsers(text)
        console.log(data.items)
        // set State
        dispatch({
            type :"SEARCH_USERS",
            payload : data.items
        })
        setText("")

    }
    return (
        <>

            <h1 className='my-3 text-3xl font-bold text-center '>Find GitHub Users</h1>
            <form onSubmit={handlesubmit} className="my-7 flex flex-col md:flex-row items-center p-5  space-y-3 md:space-y-0 md:space-x-3 ">
                <input type="text" className='border border-slate-300 focus:outline-none w-full p-3 rounded-md  ' placeholder='Enter Username' onChange={(e) => setText(e.target.value)} value={text} />
                <button className='bg-blue-500 p-3 rounded-md w-full md:w-1/5 hover:bg-blue-900 duration-200'><p className='font-bold text-white'>SEARCH</p></button>
            </form>
        </>
    )
}

export default Form