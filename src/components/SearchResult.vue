<template>
<main>
  <pokemon-card v-for="pokemon in pokemonList"
  :id="pokemon.id"
  :name="pokemon.name"
  :sprite="pokemon.sprites.front_default"
  ></pokemon-card>
</main>
</template>

<script>
import PokemonCard from './PokemonCard.vue';

export default {
  props: ['pokemonList'],
  components: {
    PokemonCard
  },
}
</script>

<style>
main {
  min-width: 75%;
  max-width: 75%;
  width: 75%;
  display: flex;
  flex-direction: row !important;
  gap: 3rem;
  margin: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  overflow-y: scroll;
  margin: 0;
  padding: 1rem;
}

@media (max-width: 800px) {
  main {
    width: 55vw;
    flex-direction: column !important;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
}

@media (max-width: 1200px) {
  main {
    width: 20vw;
    flex-direction: column !important;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
}

@media (max-width: 430px) {
  main {
    width: 100vw;
    max-width: none;
    flex-direction: column !important;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
}
</style>