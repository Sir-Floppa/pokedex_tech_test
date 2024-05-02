<template>
  <main>
    <pokemon-card
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
  width: 100%;
  display: flex;
}
</style>