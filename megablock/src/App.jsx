import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth.js'
import service from './appwrite/config.js'
import {login,logout} from "./store/authSlice.js"
import {Header,Footer} from './components'
import { Outlet } from 'react-router-dom'
function App() {
   const [loading,setLoading] = useState(true)
    const dispatch=useDispatch()

    useEffect(() => {
      authService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }
      })
      .finally( () => setLoading(false))
    }, [dispatch])

    return !loading ? <div className='min-h-sc flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div> : null


  // console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h1>A blog with appwrite and Rohit</h1>
    </>
  )
}

export default App
