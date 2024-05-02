<template>
  <search-bar></search-bar>
  <router-view></router-view>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import SearchResult from './components/SearchResult.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    SearchResult
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
}
</style>
