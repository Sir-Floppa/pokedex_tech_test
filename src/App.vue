<template>
  <search-bar
    @new-random="getRandom5()"
  ></search-bar>

  <router-view
    :pokemonList="pokemonList"
  ></router-view>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import SearchResult from './components/SearchResult.vue';

export default {
  name: 'App',
  created() {
    this.getRandom5();
  },
  data() {
    return {
      pokemonList: [],
    }
  },
  components: {
    SearchBar,
    SearchResult
  },
  methods: {
    async getRandom5() {
      // Vacia la lista en caso de que haya una busqueda previa
      this.pokemonList = [];

      while (this.pokemonList.length < 5){
        let newPoke = await this.$api.getRandomPokemon();
        this.pokemonList.push(newPoke);
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ruda:400,900');
* {
  font-family: 'Ruda', sans-serif;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  img {
    /* Estos estilos hacen que el sprite escale sin suavizado en todos los navegadores */
    /* https://stackoverflow.com/questions/14068103/disable-antialising-when-scaling-images */
    image-rendering: optimizeSpeed;            
    image-rendering: -moz-crisp-edges;         
    image-rendering: -o-crisp-edges;           
    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated;                
    image-rendering: optimize-contrast;        
    -ms-interpolation-mode: nearest-neighbor;
  }
}
</style>
