<template>
<div class="pokemon-view" v-if="pokemon">
  <h1>{{ pokemon.id }}. {{ pokemon.name.toUpperCase() }}</h1>
  <img :src="pokemon.sprites.front_default" alt="">

  <div class="type-card-container">
    <span class="type-card" v-for="type in pokemon.types">
      {{ type.type.name }}
    </span>
  </div>

  
  <div class="abilities-container">
    <div class="ability" v-for="ability in abilityList">
      <div class="name-container">
        <h1>{{ ability.name.toUpperCase() }}</h1>
      </div>
      <p>
        {{ getAbilityText(ability) }}
      </p>
    </div>
  </div>
</div>
</template>

<script>

export default {
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
  methods: {
    getAbilityText(ability) {
      if(ability.effect_entries.length > 0) {
        return this.getEffectByLang(ability.effect_entries)
      }
      else {
        return this.getFlavorTextByLang(ability.flavor_text_entries)
      }
    },

    getEffectByLang(entries) {
      let ans = entries.filter(entry => entry.language.name == this.lang)
      return ans[0].short_effect;
    },

    getFlavorTextByLang(entries) {
      let ans = entries.filter(entry => entry.language.name == this.lang)
      return ans[0].flavor_text;
    }
  }
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

    .type-card {
      text-transform: uppercase;
      color: white;
      font-size: 1.25rem;
      font-weight: bold;
      background-color: rgb(87, 109, 151);
      padding: .25rem 1rem;
      border-radius: .25rem;
      cursor: pointer;
    }
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