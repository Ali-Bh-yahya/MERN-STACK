import React, { useState} from  'react';




const Pakemon = () =>{
  const [Pokemons , SetPokemons] = useState([]);

  const ShowPokemon = (e) => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
      return response.json();
    }).then(response => {
      SetPokemons(response.results);
    }).catch(err=>{
        console.log(err);
    });
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