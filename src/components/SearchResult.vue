<template>
  <main>
    <pokemon-card
    id="4"
    name="charmander"
    sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    ></pokemon-card>

    <pokemon-card
    id="4"
    name="charmander"
    sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    ></pokemon-card>

    <pokemon-card
    id="4"
    name="charmander"
    sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    ></pokemon-card>

    <pokemon-card
    id="4"
    name="charmander"
    sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    ></pokemon-card>

    <pokemon-card
    id="4"
    name="charmander"
    sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    ></pokemon-card>
  </main>
</template>

<script>
import PokemonCard from './PokemonCard.vue';

export default {
  components: {
    PokemonCard
  }
}

</script>

<style>
main {
  width: 80%;
  display: flex;
  gap: 3rem;
  margin: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>