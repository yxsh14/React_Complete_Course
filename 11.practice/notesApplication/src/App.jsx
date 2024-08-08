import { useState } from 'react';
import './App.css'; 

function App() {
  const [data, setData] = useState([])
  const [isPokemon,setIsPokemon]=useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState([])
  const [abilities, setAbilities] = useState([])
  const [height, setHeight] = useState(0);
  const [moves, setMoves] = useState([]);

  fetch('https://pokeapi.co/api/v2/pokemon')
  .then((res)=> res.json())
  .then((res)=> setData(res.results))
  const handlePokemon = async (poki) => {
    try {
      const response = await fetch(poki.url);
      const data = await response.json();
      setSelectedPokemon(data);
      setIsPokemon(true);
      setAbilities(data.abilities); // Use data instead of selectedPokemon
      setHeight(data.height);       // Use data instead of selectedPokemon
      setMoves(data.moves);         // Use data instead of selectedPokemon
    
    } catch (error) {
      console.log(error);
    }
  }
 return(
  <>
  <div className="container">
    <ul>{
      data.map((poki)=>(
        <li>
          <h3 style={{color:'white'}}>{poki.name}</h3>
          <button onClick={()=>{handlePokemon(poki)}} >
            Read More
          </button>
        </li>
      ))
      }</ul>
  </div>
  {isPokemon &&
  <div>
    <div>
      <h2 style={{color:'white'}}>Abilities</h2>
      <ul>{abilities.map((abilities)=>(
      <h3 style={{color:'white'}}>{abilities.ability.name}</h3>
    ))}</ul>
    </div>

    <div>
      <h2 style={{color:'white'}}>Moves</h2>
      <ul>{moves.map((moves)=>(
      <h3 style={{color:'white'}}>{moves.move.name}</h3>
    ))}</ul>
    </div>
    <h2 style={{color:'white'}}>Height: {height}</h2>
  </div>
  
  
  }
  </>
 )

  
}

export default App;
