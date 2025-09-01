import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("app rendered:" ,Math.random());
  // value renenders when the value changes or the state of the values used changes
  // so decrease the dependancy on the value variable instea of that pass the seperate values inside that 
  // const [value, setValue] = useState(1)
  const [value, setValue] = useState({
    value:0,
  })
  // const [mutlipliedValue,setMultipliedValue]=useState(1)
  //  other way
  // let multipliedvalue=value*5;

  // const mutliplyby5 = () => {
  //     // setMultipliedValue(value*5);
  //     setValue(value+1)
  // }

  const clickMe =() =>{
    // console.log("logged");
    // setValue(value+1)
    setValue({
      value:0,
    });
  }
  return (
    <>
      <h1>Main Value:{value}</h1>
      <button
      onClick={clickMe}>
        Click to multiply by 5
      </button>
      {/*onClick={mutliplyby5}>
      Click to Multiply by 5</button>
      {/* <h2>Multiplied Value:{mutlipliedValue}</h2> */}
      {/* <h2>Multiplied Value:{multipliedvalue}</h2>  */}
    </>
  )
}

export default App
