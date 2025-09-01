import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {TodoProvider} from "./contexts"
import './App.css'
import { useEffect } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodoItems.jsx'

function App() {
  const[todos,setTodos]=useState([]);

  // isme na ham localStorage se todos ko lete hain aur set karte hain
  // aur jab bhi todos change hote hain to localStorage me update karte hain
  // ... ka use ham array mein spread karne ke liye karte hain
  // useEffect ka use karte hain localStorage se todos ko lete hain aur set
  const addTodo =(todo) =>{
    setTodos((prev) =>[{id:Date.now(),...todo},...prev])
  }
  
  // yahan jo prev hai woh ek koi bhi random name hai aur uska use ham karte hain taaki agr prev map ki koi bhi 
  // value (prevTodo) milti hai to usko update kar sakein
  // aur agr nahi milti to usko waise hi rakh sakein
  const updateTodo=(id,todo) =>{
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))

    // prev.map((eachVal) =>{
    //   if(eachVal.id === id){
    //     todo
    //   }else{
    //     prevTodo
    //   }
    // })
  }

  // yahan ham koi bhi cheez ko delete karne ke liye filter ka use karte hain aur woh jiski id todo.id ke equal nhi hai unko oass hone dega baaki ko filter out kar dega 
  const deleteTodo= (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  
  // yahan ham toggleComplete function ka use karte hain taaki agar todo.completed true hai to false kar de aur agar false hai to true kar de
  // isme ham map ka use karte hain taaki har ek todo ko check kar sakein aur uski id ke equal hai ya nahi
  // agar hai to usko update
  const toggleComplete=(id) => {
     setTodos((prev)=>prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed :!prevTodo.completed}: prevTodo))
  }
//  localstorage ke use se ham values ko store kar sakte hain aur jab bhi page reload hota hai to values wapas mil jaati hain
// local storage has only to thungs to do - setitem and getitem
  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
              <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                  <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                  <div className="mb-4">
                      {/* Todo form goes here */} 
                      <TodoForm />
                  </div>
                  <div className="flex flex-wrap gap-y-3">
                      {/* // yahan ham key use karte hain  maap pr loop karne ke liye taaki agr ek naam ke zyafa todos ho to unko differentiate kar sakein */}
                      {/*Loop and Add TodoItem here */}
                      
                      {todos.map((todo) => (
                        <div key={todo.id}
                        className='w-full'
                        >
                          <TodoItem todo={todo} />
                        </div>
                      ))}
                  </div>
              </div>
          </div>
  </TodoProvider>
  )
  
}

export default App
