import React, { useContext } from 'react'
import UserCard from './UserCard'
import GitHubUserContext from '../Providers/GitHubUsersContext'

const UserContainer = () => {

    const { users } = useContext(GitHubUserContext)
    return (
        <div className="my-3 p-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">

                {
                    users.map((user) => <UserCard key={user.id} user={user} />)
                }

            </div>
        </div>
    )
}

export default UserContainer