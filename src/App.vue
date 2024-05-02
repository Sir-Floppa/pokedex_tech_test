<template>
  <search-bar></search-bar>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ruda:400,900');
* {
  font-family: 'Ruda', sans-serif;
  box-sizing: border-box;
  font-size: 1rem;
}

#app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
</style>
