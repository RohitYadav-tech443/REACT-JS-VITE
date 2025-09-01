import React, { useContext } from 'react'
import UserContext from '../context/userContext'
function Profile() {
    const {user} =useContext(UserContext)
    if(!user) return <div className='bg-red-800 text-white'>Please LogIn</div>
    return <div className='bg-red-800 text-white'>Welcome {user.username}</div>

}

export default Profile
