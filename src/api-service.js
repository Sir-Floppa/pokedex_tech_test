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

  async getLanguages() {
    let res = await fetch(`${apiUrl}/language`);
    let data = await res.json();
    let langList = [];

    data.results.forEach(result => {
      langList.push(result.name)
    }) 

    langList = langList
                .filter(lang => lang != 'cs' && lang != 'pt-BR' && lang != 'roomaji')
                // Estos idiomas dan problemas y no creo tener tiempo para solucionarlo ahora mismo.

    return langList;
  },

  async getRandomPokemon() {
    // genera un Id aleatorio entre 1 y 1026
    let newPokemonId = Math.floor(Math.random() * 1026 + 1);
    let randomPokemon = this.getPokemonById(newPokemonId);

    return randomPokemon;
  },

  // Consigue una habilidad o pokemon con la URL
  async getByUrl(url) {
    let res = await fetch(url);
    let data = await res.json();

    return data
  },

  // Consigue una lista con todos los tipos de Pokemon
  async getTypes() {
    let res = await fetch(`${apiUrl}/type`);
    let data = await res.json();
    let types = []

    data.results.forEach(type => {
      types.push(type.name)
    })
    return types;
  },

  // Devuelve los pokemons de un tipo
  async getType(type) {
    let res = await fetch(`${apiUrl}/type/${type}/?limit=20`);
    let data = await res.json();

    return data.pokemon;
  },

  // Devuelve una lista de URL de Pokemon del tipo especificado
  async getPokemonByType(type) {
    let res = await fetch(`${apiUrl}/type/${type}`);
    let data = await res.json();
    let pokemons = []

    data.pokemons.forEach(pokemon => {
      pokemons.push(pokemon.url)
    })

    return pokemons;
  }
}

export default api;