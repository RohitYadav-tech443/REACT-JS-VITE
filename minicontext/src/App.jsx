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
    <UserContextProvider>
      <h1>React and code ko famouus kar do</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
      
   )
}

export default App
