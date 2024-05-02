const apiUrl = "https://pokeapi.co/api/v2/"

const api = {
  // Obtener un pokemon por ID
  async getPokemonById(id) {
    let res = await fetch(`${apiUrl}/pokemon/${id}`);
    let data = await res.json();

    return data;
  }
}

export default api;