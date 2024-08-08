import './App.css';
import {AddTodo} from "./components/AddTodo";
import {Todos} from "./components/Todos";
function App() {

  return (
    <>
      <h1>Learn about redux</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}
// Yaha wrapper bhi lagana padega jo ki most of the cases mai main.jsx mai lagate hain redux k case mai aap yaha bhi laga skte

export default App
