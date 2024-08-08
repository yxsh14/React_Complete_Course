import { useState } from 'react'


function App() {
  const [Color, setColor] = useState("olive")

  return (
    <>
    <div className=" h-screen w-full" style={{backgroundColor:Color}}>
      <div className='fixed flex flex-wrap justify-center'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-100 px-3 py-2 rounded-lg'>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg" 
          style={{backgroundColor:"red"}} 
          onClick={()=>setColor("red")}>
            Red
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg" 
          style={{backgroundColor:"green"}} 
          onClick={()=>setColor("green")}>
            Green
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg" 
          style={{backgroundColor:"blue"}} 
          onClick={()=>setColor("blue")}>
            Blue
          </button>
        </div>
      </div>
    </div>
      
      
    </>
  )
}

export default App
