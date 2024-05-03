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

</style>