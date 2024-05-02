import api from "./api-service";
import bulbasaur from "./bulbasaur";

it('obtener pokemon por id: 1', async () => {
  let poke = await api.getPokemonById(1);

  expect(poke).toEqual(bulbasaur);
})

it('obtener pokemon por id: 1026', async () => {
  let poke = await api.getPokemonById(1026);

  expect(poke).toEqual(undefined);
})
