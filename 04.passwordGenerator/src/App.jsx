import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  // Bada project hai to pahle dekhenge konse parameters change ho rahe jo ho rahe unki state ko track karenge
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("password");


  /* React recreates that function every time the component renders. 
  This can be inefficient, especially when passing functions as props to child 
  components.
  useCallback comes to the rescue by memoizing a function, meaning it remembers the 
  function between renders if the dependencies (specified as the second argument) 
  haven't changed. This can be useful when you want to prevent unnecessary re-renders 
  of child components that receive these functions as props.*/

  // Password Generate karne ka ek tareeka hota hai
  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed) str += "0123456789"
      if (CharAllowed) str += `!@#$%^&*()-_=+[{]};:,<.>/?`
      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    },
    [length, numberAllowed, CharAllowed, setPassword] //Yaha memoization ka concept use ho raha hai to setPassword sirf optimization k liye dala hai 
    // Is array ko kabhi bhi useEffect ki array se compare na karen isme wo variables,functions honge jinko hum cache mai rakhenge
  )
  // if we put passwordGenerator it will give us error saying too many renders
  // So we will useEffect()
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, CharAllowed, passwordGenerator])

  // Ab hume add karni hai copy karne wali functionality to hum useRef hook use karna padega 
  // Use Ref Karta kya hai : kisi bhi chezz ka jab mujhe reference lena hota hai tab useRef kaam aayega.
  // Ye kar bhi skte hain ya direct bhi kar skte hain bina ref use kiya pr useRef ka saath kuch extra methods milti hain
  const passwordRef = useRef(null)

  const CopyInClipboard = useCallback(() => {
    // Extra methods jo milti hai
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,20); jab bhi select karenge zayada bade password k case mai sirf 20 values hi select hongi 

    window.navigator.clipboard.writeText(Password)
  }, [Password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-black">
        <h1
          className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            // After defining useRef har ek password ya input field mai hum reference le skte aaiye dekhte hain kese
            ref={passwordRef}
          />
          <button
            onClick={CopyInClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >Length:{length}</label>

          </div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={CharAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='charInput'>Character</label>


        </div>
      </div>
    </>
  )
}

export default App




