import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, RohitsetCounter] = useState(15)
  // let counter=15;
  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1;
    if(counter<=20 || counter >0)
    RohitsetCounter(counter+1);
    if(counter>=20)
    RohitsetCounter(0);
  }
  const removeValue=() =>{
    if(counter<=20 || counter >0)
    RohitsetCounter(counter-1)
    if(counter<=0)
    RohitsetCounter(0);
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <p>Welcome to my React app!</p>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>AddValue</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
