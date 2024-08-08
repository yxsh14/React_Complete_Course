import { useState } from 'react'
import './App.css'
import Card from './components/cards'


function App() {
  const [count, setCount] = useState(0)
  const myObj={
    name:"yash",
    password:"123"
  }
  return (
    <>
      <h1 className='bg-orange-400 text-black p-4 rounded-xl'>Tailwind Check</h1>
      <Card network="Local" someDetails={myObj}/> 
    </>
    //direct koi bhi array ya object ya function pass nhi kar skte hamesha curly braces mai pass karenge.
  )
}

export default App
