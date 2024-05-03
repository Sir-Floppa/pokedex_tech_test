<template>
<div class="pokemon-view" v-if="pokemon">
  <h1>{{ pokemon.id }}. {{ pokemon.name.toUpperCase() }}</h1>
  <img :src="pokemon.sprites.front_default" :alt="`${pokemon.name} sprite`">

  <div class="type-card-container">
    <type-card
      v-for="type in pokemon.types"
      :type="type"></type-card>
  </div>

  
  <div class="abilities-container">
    <ability-card 
      v-for="ability in abilityList" 
      :ability="ability" 
      :lang="lang"></ability-card>
  </div>
</div>
</template>

<script>
import AbilityCard from './AbilityCard.vue';
import TypeCard from './TypeCard.vue';

export default {
  components: {
    AbilityCard,
    TypeCard
  },
  data() {
    return {
      id: 0,
      pokemon: undefined,
      abilityList: [],
      lang: 'en'
    }
  },
  async created() {
    this.id = this.$route.params.id;
    this.pokemon = await this.$api.getPokemonById(this.id);

    // Pobla la lista de habilidades
    this.pokemon.abilities.forEach(async ability => {
      let newAbility = await this.$api.getByUrl(ability.ability.url);
      this.abilityList.push(newAbility);
    });
  },
}
</script>

<style>
.pokemon-view {
  max-height: 100vh;
  min-width: 75%;
  max-width: 75%;
  width: 75%;
  display: flex;
  flex-direction: column !important;
  justify-content: space-around;
  align-items: center;

  h1 {
    color: #ef5350;
    text-align: center;
  }

  img {
    width: 30%;
  }

  .type-card-container {
    display: flex;
    gap: 1rem;
  }

  .abilities-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;
  }
}

@media (max-width: 420px) {
  .pokemon-view {
    width: 100%;
    height: 100%;
    max-height: none;
    max-width: none;
    align-items: center;
    
    .abilities-container {
      max-width: 100vw;
      height: max-content;
      overflow-x: scroll;
      justify-content: space-around;
      padding: 2rem;
    }
  }
}
</style>