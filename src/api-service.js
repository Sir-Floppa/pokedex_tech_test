const apiUrl = "https://pokeapi.co/api/v2/"

const api = {
  // Obtener un pokemon por ID
  async getPokemonById(id) {
    // De moment no he encontrado forma de hallar el numero de pokemons
    // inicialmente pense que era el count que devuelve la query pero son menos
    if(id < 1026 && id > 0) {
      let res = await fetch(`${apiUrl}/pokemon/${id}`);
      let data = await res.json();
  
      return data;
    }
    else {
      return
    }
  },

  async getRandomPokemon() {
    // genera un Id aleatorio entre 1 y 1026
    let newPokemonId = Math.floor(Math.random() * 1026 + 1);
    let randomPokemon = this.getPokemonById(newPokemonId);

    return randomPokemon;
  },

  // Consigue una habilidad con la URL
  async getAbilityByUrl(url) {
    let res = await fetch(url);
    let data = await res.json();

    return data
  },

  // Consigue una lista con todos los tipos de Pokemon
  async getTypes() {
    let res = await(fetch(`${apiUrl}/type`));
    let data = await res.json();
    let types = []

    data.results.forEach(type => types.push(type.name))
    return types;
  }
}

export default api;