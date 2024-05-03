<template>
  <span class="type-card" @click="$router.push(`/${type.type.name}`)">
    {{ translatedType }}
  </span>
</template>

<script>
export default {
  props: ['type', 'lang'],
  async created() {
    this.getTranslatedType();

    // refresca el componente cuando cambia la traduccion
    this.$watch(() => this.lang, (newParams, oldParams) => {
      this.getTranslatedType();
    })
  },
  data() {
    return {
      translatedType: undefined
    }
  },
  methods: {
    async getTranslatedType() {
      let type = await this.$api.getByUrl(this.type.type.url);
      this.translatedType = this.filterNamesByLang(type.names);
    },
    filterNamesByLang(typeNamesArr) {
      let filterResult = typeNamesArr
                      .filter(name => name.language.name == this.lang)[0]

      let newName = filterResult.name;

      if(!newName) {
        newName = typeNamesArr
                      .filter(name => name.language.name == 'en')[0]
                      .name
      }
      
      console.log(newName);
      return newName;
    }
  }
}
</script>

<style>
.type-card {
  background-color: rgb(57, 57, 97);
  color: white;
  padding: .75rem 2rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  border-radius: 1rem;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid rgb(26, 26, 97);
    background-color: rgb(28, 28, 90);
  }

  &:active {
    border: 2px solid rgb(34, 34, 94);
    background-color: rgb(86, 86, 139);
  }
}
</style>