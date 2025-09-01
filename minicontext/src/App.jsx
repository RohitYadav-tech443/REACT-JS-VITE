import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider className="bg-gray-800">
      <h1 className='p-4 justify-center bg-pink-400'>React and code ko famouus kar do</h1>
      <Login/>
      <br />
      <Profile/>
    </UserContextProvider>
      
   )
}

export default App
