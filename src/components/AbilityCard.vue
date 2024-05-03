<template>
  <div class="ability">
    <div class="name-container">
      <h1>{{ ability.name.toUpperCase() }}</h1>
    </div>
    <p>
      {{ getAbilityText(ability) }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['ability', 'lang'],
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
    
    h1 {
      color: white;
      background-color: #ef5350;
      padding: 1rem;
    }
  }

  p {
    margin: 1rem;
  }

}


</style>