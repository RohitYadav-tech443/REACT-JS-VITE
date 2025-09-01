import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
import Projects from './components/Projects/project.jsx'


// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path: "",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       },{
//         path:"User/:userid",
//         element:<User/>
//       },{
//         loader:{}
//         path:"Github",
//         element:<Github/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
     createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
