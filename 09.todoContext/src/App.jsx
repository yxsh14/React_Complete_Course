import { useState,useEffect } from 'react'
import './App.css'
import {TodoContextProvider} from './context';
import {TodoForm,TodoItem} from './Components/index'
function App() {
  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
      setTodos((prev)=> [...prev,{id:Date.now(), ...todo}]) 
      //Yaha call back mai hume sari purani array ka access hoga
  }
  // const editTodo=(id,todo)=>{
  //   setTodos((prev) => prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo.todo)))
  // }
  const editTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo: updatedTodo.todo } : prevTodo
      )
    );
  };

  const deleteTodo=(id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id!==id))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id===id ?
    {...prevTodo,completed:!prevTodo.completed} :prevTodo))
  }
// Ab hum pdhenge local storage ke baare mai jo ki Browser ka local storage hoga JavaScript or react dono k case mai hi

// Ab hume chahiye esa kuch jo local storage se jo pahle se values save hon wo le aaye to ye hum karenge use effect se 
 useEffect(() => {
  //  localStorage.getItem("todos") local storage humesha string mai save karta hai or string mai hi return karta hai 
  const Localtodo=JSON.parse(localStorage.getItem("todos"));
  if (Localtodo && Localtodo.length>0){
    setTodos(Localtodo);
  }
  //pahle se koi value agar local k todos mai hai to usko parse karke dekhenge hogi to display kara denge wrna to empty array hai hi setTodo mai

 }, [])
//  Ab karna kya hai ki jab todos mai change ho to bhi to local storage mai set karna padega wo value
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos)) //do input lega dono string mai 
}, [todos])


 
  return (
    <TodoContextProvider value={{todos,addTodo,editTodo,deleteTodo,toggleComplete}}> 
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo)=>(
                    <div key={todo.id}
                    className='w-full'>
                      <TodoItem todo={todo}/>
                    </div>
                  ))}
                  
              </div>
          </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
