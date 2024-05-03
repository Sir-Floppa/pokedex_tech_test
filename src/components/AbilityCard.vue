<template>
  <div class="ability">
    <div class="name-container">
      <h1>{{ filterNameByLang(ability) }}</h1>
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
    // Consigue el texto de una habilidad
    getAbilityText(ability) {
      return this.getFlavorTextByLang(ability.flavor_text_entries)
    },

    // Selecciona el idioma de un texto
    getFlavorTextByLang(entry) {
      if(this.filterByLang(entry) != undefined) {
        return this.filterByLang(entry).flavor_text;
      }
    },

    // Filtra una lista por el idioma
    filterByLang(entries) {
      let ans = entries.filter(entry => entry.language.name == this.lang);
      return ans[0];
    },

    // filtra la lista de nombres por idioma
    filterNameByLang(ability) {
      let namesList = ability.names;
      namesList = namesList.filter( name => name.language.name == this.lang);
      if(namesList.length > 0) {
        return namesList[0].name;
      }
      else {
        return namesList.filter( name => name.language.name == 'en')[0].name;
      }
    },

    // consigue la lista de idiomas de una habilidad.
    getLanguageList(ability) {
      let languages = [];
      ability.flavor_text_entries.forEach(entry => {
        let lang = entry.language.name;
        if(!languages.includes(lang)) {
          languages.push(lang);
        }
      })
      return languages;
    }
  }
}
</script>

<style>
.ability {
  min-width: 35%;
  max-width: 35%;
  width: 35%;
  filter: drop-shadow(0 0 .25rem rgba(0, 0, 0, 0.5));
  background-color: white;
  border-radius: 1rem;
  min-width: min-content;
  display: flex;
  flex-direction: column;


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
      padding: 1rem;
    }
  }

  p {
    margin: 1rem;
  }

  select {
    margin: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    text-transform: uppercase;
  }

}

@media (max-width: 420px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>