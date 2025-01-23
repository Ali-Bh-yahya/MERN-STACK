import React, { useState} from  'react';
import axios from 'axios';



const Pakemon = () =>{
  const [Pokemons , setPokemons] = useState([]);

  const ShowPokemon = (e) => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{
      setPokemons(response.data.results);
  })
  }
  return ( <>
  <button onClick ={ShowPokemon} >Fetch Pokemon</button>
    <ol>
      {Pokemons.map((pokemons , i) => (
        <li key={i}> {pokemons.name} </li>
      ))}
    </ol> 
  
  </>
  );


}

export default Pakemon;