function nextId() {
    const pokemons = readAll();
  
    const ids = pokemons.map((pokemon) => pokemon.id);
  
    const maxId = Math.max(...ids);
  
    return maxId + 1;
  }
  
  function load(newPokemons) {
    localStorage.setItem('pokemons-app:pokemons', JSON.stringify(newPokemons));
  }
  
  function create(pokemon) {
    pokemon = { id: nextId(), ...pokemon };
  
    const pokemons = readAll();
  
    const newPokemons = [...pokemons, pokemon];
  
    load(newPokemons);
  
    return pokemon;
  }
  
  function readAll() {
    return JSON.parse(localStorage.getItem('pokemons-app:pokemons'));
  }
  
  function read(id) {
    const pokemons = readAll();
  
    const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  
    return pokemon;
  }
  
  function update(id, pokemon) {
    const pokemons = readAll();
  
    const index = pokemons.findIndex((pokemon) => pokemon.id === id);
  
    if (index >= 0) {
      pokemons[index] = { id, ...pokemon };
    }
  
    load(pokemons);
  
    return pokemon;
  }
  
  function destroy(id) {
    const pokemons = readAll();
  
    const index = pokemons.findIndex((pokemon) => pokemon.id === id);
  
    if (index >= 0) {
      pokemons.splice(index, 1);
    }
  
    load(pokemons);
  }
  
  export default { load, create, readAll, read, update, destroy };