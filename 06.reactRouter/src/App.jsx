import { useState } from 'react'

import Header from './components/header/header'
import Home from './components/Home/home'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
    // Abhi ye blank screen dega qki react router k case mai chezzen ese kaam nhi karti 
    // Hume route provide karna padega or route provide provide tab karenge jab route create karenge wo sab hume dekhenge main.jsx file mai 
    
  )
}

export default App
