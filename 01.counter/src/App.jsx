import { useState } from 'react'
import './App.css'

function App() {
  // let counter=5;
  //UI ki state ko change karne k liye hota hai use
  // yaha use state mai initial jo value hai wo dete hain
  // useState ek value or ek function return karta hai value ka type kuch bhi ho skta

  let [counter,setCounter]=useState(5);
  function increaseValue(){
    if (counter<20){
      setCounter(counter+1);
    }
  }
  function decreseValue(){
    if (counter!==0){
      counter=counter-1;
      setCounter(counter);
    }
    
  }
  /*yaha hume dekhne milega ki console mai counter ki value buttons click karne par 
  increase and decrease ho rahi hai lekin desktop pr change nhi ho rahi i.e. UI update nhi ho raha
  */
//  setCounter basically operation perform karke jo updated value aayegi wo pure document mai jaha jaha humne counter use kiya wo sari jagah change kar dega
  
 
 return (
  <>
  <h1>Why we needs hooks?</h1>
  <h3>Counter value: {counter}</h3>
  <button onClick={increaseValue}>Increase</button>
  <br />
  <button onClick={decreseValue}>Decrease</button>
  </> 
 )
  
}

export default App
