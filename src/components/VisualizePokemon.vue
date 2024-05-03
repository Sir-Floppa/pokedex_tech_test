<template>
<div class="pokemon-view" v-if="pokemon">
  <h1>{{ pokemon.id }}. {{ pokemon.name.toUpperCase() }}</h1>
  <img :src="pokemon.sprites.front_default" alt="">

  <div class="type-card-container">
    <span class="type-card" v-for="type in pokemon.types" @click="$router.push(`/${type.type.name}`)">
      {{ type.type.name }}
    </span>
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

export default {
  components: {
    AbilityCard
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
    
    .ability {
      width: 20%;
      filter: drop-shadow(0 0 .25rem rgba(0, 0, 0, 0.5));
      background-color: white;
      border-radius: 1rem;
      min-width: min-content;


      .name-container {
        height: 6rem;
        border-radius: 1rem 1rem 0 0;
        filter: none;
        background-color: #ef5350;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        margin: 1rem;
      }

      h1 {
        color: white;
        background-color: #ef5350;
        padding: 1rem;
      }
    }
  }

}
</style>