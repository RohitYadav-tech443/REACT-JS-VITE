import { useCallback, useState ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  // use ref hook
  const passwordRef=useRef(null);
  // It's commonly used to directly access the DOM element (like an input field) or persist a mutable value across renders without causing re-renders.
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "012456789";
    if (charAllowed) str += "!@#$%^&*()_+-={}[]~`"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

const copyPasswordToClipboard=useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(Password);
    // above line is very importaant and used in many places
  },
[Password])


  useEffect(() => {
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])
  // This useEffect hook runs the passwordGenerator() function automatically whenever any of its dependencies change.
  // The dependencies are length, numberAllowed, and charAllowed. This means that if any of these values change, the passwordGenerator function will be called again to generate a new password.


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center text-xl font-semibold mb-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className=" bg-white outline-none w-full py-2 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-4 py-2 shrink-0 hover:bg-blue-600 transition"
          >
            Copy
          </button>
        </div>
  
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex items-center justify-between">
            <label htmlFor="lengthRange">Length: {length}</label>
            <input
              id="lengthRange"
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-2/3"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
  
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setnumberAllowed((prev) => !prev)}
              // This toggles the state of numberAllowed when the checkbox is clicked
              // true-> false and false-> true
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>
  
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
  
}
export default App
