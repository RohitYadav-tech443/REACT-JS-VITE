import React from 'react'
import UserContext from './userContext'

const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

// This UserContextProvider is a React Context Provider component. It's a wrapper used to share user data (and updater function) across your entire React app without prop drilling.