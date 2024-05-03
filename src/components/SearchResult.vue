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
</style>