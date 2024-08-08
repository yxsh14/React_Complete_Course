import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
export function AddTodo() {
// mtlb store mai kuch add karna hai add kese hoga jab data dispatch karenge useSelector & useDispatch react redux se aate hain
    const [input, setInput] = useState('')
    const dispatch=useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault();
        // Dispatch ek reducer ko use karte huye store mai value store karta hai 
        dispatch(addTodo(input));
        setInput("")
        
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
   
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}
